class LoginView(FormView):

    """ Login View """

    # Using inherited FormView class instead of LoginView: https://ccbv.co.uk/projects/Django/3.0/django.views.generic.edit/FormView/
    template_name = "users/login.html"
    form_class = forms.LoginForm
    success_url = reverse_lazy("core:home")

    def form_valid(self, form):
        email = form.cleaned_data.get("email")
        password = form.cleaned_data.get("password")
        user = authenticate(self.request, username=email, password=password)
        if user is not None:
            login(
                self.request, user, backend="django.contrib.auth.backends.ModelBackend"
            )
        return super().form_valid(form)

# Logout function: https://docs.djangoproject.com/en/3.0/topics/auth/default/#how-to-log-a-user-out
# LogoutView class: https://docs.djangoproject.com/en/3.0/topics/auth/default/#django.contrib.auth.views.LogoutView
def log_out(request):
    logout(request)
    return redirect(reverse("core:home"))


class SignUpView(FormView):
    # Using inherited FormView class: https://ccbv.co.uk/projects/Django/3.0/django.views.generic.edit/FormView/
    template_name = "users/signup.html"
    form_class = forms.SignUpForm
    success_url = reverse_lazy("core:home")

    # to see where "form" came from, CMD + Click on FormView inherited class
    def form_valid(self, form):
        form.save()
        email = form.cleaned_data.get("email")
        password = form.cleaned_data.get("password")
        user = authenticate(self.request, username=email, password=password)
        if user is not None:
            login(
                self.request, user, backend="django.contrib.auth.backends.ModelBackend"
            )
        # getting function from models.py users app, verify user by sending randomly genearated string
        user.verify_email()
        return super().form_valid(form)

# https://developers.kakao.com/docs/restapi/user-management
def kakao_login(request):
    app_rest_api_key = os.environ.get("KAKAO_REST_API_KEY")
    redirect_uri = main_domain + "users/login/kakao/callback"
    return redirect(
        f"https://kauth.kakao.com/oauth/authorize?client_id={app_rest_api_key}&redirect_uri={redirect_uri}&response_type=code"
    )


class KakaoException(Exception):
    pass

# https://developers.kakao.com/docs/restapi/user-management
def kakao_callback(request):
    try:
        app_rest_api_key = os.environ.get("KAKAO_REST_API_KEY")
        redirect_uri = main_domain + "users/login/kakao/callback"
        user_token = request.GET.get("code")
        # post request
        token_request = requests.get(
            f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={app_rest_api_key}&redirect_uri={redirect_uri}&code={user_token}"
        )

        token_response_json = token_request.json()
        error = token_response_json.get("error", None)
        # if there is an error from token_request
        if error is not None:
            raise KakaoException()
        access_token = token_response_json.get("access_token")
        profile_request = requests.get(
            "https://kapi.kakao.com/v2/user/me",
            headers={"Authorization": f"Bearer {access_token}"},
        )
        profile_json = profile_request.json()
        # print(profile_json)
        # parsing profile json
        kakao_account = profile_json.get("kakao_account")
        email = kakao_account.get("email", None)
        if email is None:
            raise KakaoException()
        profile = kakao_account.get("profile")
        nickname = profile.get("nickname")
        profile_image_url = profile.get("profile_image_url")
        try:
            user_in_db = models.User.objects.get(email=email)
            if user_in_db.register_login_method != models.User.REGISTER_LOGIN_KAKAO:
                raise KakaoException()
            else:
                login(
                    request,
                    user_in_db,
                    backend="django.contrib.auth.backends.ModelBackend",
                )
        except models.User.DoesNotExist:
            new_user_to_db = models.User.objects.create(
                username=email,
                email=email,
                first_name=nickname,
                register_login_method=models.User.REGISTER_LOGIN_KAKAO,
                email_confirmed=True,
            )
            # https://docs.djangoproject.com/en/3.0/ref/contrib/auth/#django.contrib.auth.models.User.set_unusable_password
            new_user_to_db.set_unusable_password()
            new_user_to_db.save()
            # after user is saved to db, login the user
            login(
                request,
                new_user_to_db,
                backend="django.contrib.auth.backends.ModelBackend",
            )
        return redirect(reverse("core:home"))
    except KakaoException:
        return redirect(reverse("users:login"))