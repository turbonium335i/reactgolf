import React from "react";

const MobilePay = () => {
  return (
    <div>
      MobilePay
      <div>
        <div className="wrap">
          {/* 주문정보 입력 form : order_info */}
          <form name="order_info" method="post">
            {/* header */}
            <div className="header">
              <a href="/" className="btn-back">
                <span>뒤로가기</span>
              </a>
              <h1 className="title">주문/결제 SAMPLE</h1>
            </div>
            {/* //header */}
            {/* contents */}
            <div id="skipCont" className="contents">
              <p className="txt-type-1">
                이 페이지는 거래등록 완료 후 주문 요청하는 샘플 페이지입니다.
              </p>
              <p className="txt-type-2">
                소스 수정 시 [※ 필수] 또는 [※ 옵션] 표시가 포함된 문장은
                가맹점의 상황에 맞게 적절히 수정 적용하시기 바랍니다.
              </p>
              {/*
                    ==================================================================
                        1. 주문정보 입력                                                       
                    ------------------------------------------------------------------
                    결제에 필요한 주문 정보를 입력 및 설정합니다.                           
                    ------------------------------------------------------------------
                */}
              {/* 주문정보 */}
              <h2 className="title-type-3">주문정보</h2>
              <ul className="list-type-1">
                {/* 주문번호(ordr_idxx) */}
                <li>
                  <div className="left">
                    <p className="title">주문번호</p>
                  </div>
                  <div className="right">
                    <div className="ipt-type-1 pc-wd-2">
                      <input
                        type="text"
                        name="ordr_idxx"
                        defaultValue="{{post_data.ordr_idxx }}"
                        maxLength={40}
                        readOnly
                      />
                    </div>
                  </div>
                </li>
                {/* 상품명(good_name) */}
                <li>
                  <div className="left">
                    <p className="title">상품명</p>
                  </div>
                  <div className="right">
                    <div className="ipt-type-1 pc-wd-2">
                      <input
                        type="text"
                        name="good_name"
                        defaultValue="{{post_data.good_name }}"
                        readOnly
                      />
                    </div>
                  </div>
                </li>
                {/* 결제금액(good_mny) - ※ 필수 : 값 설정시 ,(콤마)를 제외한 숫자만 입력하여 주십시오. */}
                <li>
                  <div className="left">
                    <p className="title">상품금액</p>
                  </div>
                  <div className="right">
                    <div className="ipt-type-1 gap-2 pc-wd-2">
                      <input
                        type="text"
                        name="good_mny"
                        defaultValue="{{post_data.good_mny }}"
                        maxLength={9}
                        readOnly
                      />
                      <span className="txt-price">원</span>
                    </div>
                  </div>
                </li>
                {/* 주문자명(buyr_name) */}
                <li>
                  <div className="left">
                    <p className="title">주문자명</p>
                  </div>
                  <div className="right">
                    <div className="ipt-type-1 pc-wd-2">
                      <input
                        type="text"
                        name="buyr_name"
                        defaultValue="홍길동"
                      />
                    </div>
                  </div>
                </li>
                {/* 주문자 연락처1(buyr_tel1) */}
                <li>
                  <div className="left">
                    <p className="title">전화번호</p>
                  </div>
                  <div className="right">
                    <div className="ipt-type-1 pc-wd-2">
                      <input
                        type="text"
                        name="buyr_tel1"
                        defaultValue="02-0000-0000"
                      />
                    </div>
                  </div>
                </li>
                {/* 휴대폰번호(buyr_tel2) */}
                <li>
                  <div className="left">
                    <p className="title">휴대폰번호</p>
                  </div>
                  <div className="right">
                    <div className="ipt-type-1 pc-wd-2">
                      <input
                        type="text"
                        name="buyr_tel2"
                        defaultValue="010-0000-0000"
                      />
                    </div>
                  </div>
                </li>
                {/* 주문자 E-mail(buyr_mail) */}
                <li>
                  <div className="left">
                    <p className="title">이메일</p>
                  </div>
                  <div className="right">
                    <div className="ipt-type-1 pc-wd-2">
                      <input
                        type="text"
                        name="buyr_mail"
                        defaultValue="test@test.co.kr"
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="Line-Type-1" />
              <ul className="list-btn-2">
                <li className="pc-only-show">
                  <a href="/" className="btn-type-3 pc-wd-2">
                    뒤로
                  </a>
                </li>
                <li>
                  <a
                    href="#none"
                    onclick="call_pay_form();"
                    className="btn-type-2 pc-wd-3"
                  >
                    결제요청
                  </a>
                </li>
              </ul>
            </div>
            {/* //contents */}
            {/* footer */}
            <div className="grid-footer">
              <div className="inner">
                <div className="footer">ⓒ NHN KCP Corp.</div>
              </div>
            </div>
            {/*//footer*/}
            {/* 공통정보 */}
            <input type="hidden" name="req_tx" defaultValue="pay" />{" "}
            {/* 요청 구분 */}
            <input
              type="hidden"
              name="shop_name"
              defaultValue="TEST SITE"
            />{" "}
            {/* 사이트 이름 */}
            <input
              type="hidden"
              name="site_cd"
              defaultValue="{{post_data.site_cd }}"
            />{" "}
            {/* 사이트 코드 */}
            <input type="hidden" name="currency" defaultValue={410} />{" "}
            {/* 통화 코드 */}
            {/* 인증시 필요한 파라미터(변경불가)*/}
            <input type="hidden" name="escw_used" defaultValue="N" />
            <input
              type="hidden"
              name="pay_method"
              defaultValue="{{post_data.pay_method }}"
            />
            <input
              type="hidden"
              name="ActionResult"
              defaultValue="{{post_data.actionResult }}"
            />
            <input
              type="hidden"
              name="van_code"
              defaultValue="{{post_data.van_code }}"
            />
            {/* 신용카드 설정 */}
            <input type="hidden" name="quotaopt" defaultValue={12} />{" "}
            {/* 최대 할부개월수 */}
            {/* 가상계좌 설정 */}
            <input type="hidden" name="ipgm_date" defaultValue />
            {/* 리턴 URL (kcp와 통신후 결제를 요청할 수 있는 암호화 데이터를 전송 받을 가맹점의 주문페이지 URL) */}
            <input
              type="hidden"
              name="Ret_URL"
              defaultValue="{{post_data.Ret_URL }}"
            />
            {/* 화면 크기조정 */}
            <input type="hidden" name="tablet_size" defaultValue={1.0} />
            {/* 추가 파라미터 ( 가맹점에서 별도의 값전달시 param_opt 를 사용하여 값 전달 ) */}
            <input type="hidden" name="param_opt_1" defaultValue />
            <input type="hidden" name="param_opt_2" defaultValue />
            <input type="hidden" name="param_opt_3" defaultValue />
            {/* 거래등록 응답값 */}
            <input
              type="hidden"
              name="approval_key"
              id="approval"
              defaultValue="{{post_data.approvalKey}}"
            />
            <input
              type="hidden"
              name="traceNo"
              defaultValue="{{post_data.traceNo}}"
            />
            <input
              type="hidden"
              name="PayUrl"
              defaultValue="{{post_data.PayUrl}}"
            />
            {/* 인증창 호출 시 한글깨질 경우 encoding 처리 추가 (**인코딩 네임은 대문자)  
            <input type="hidden" name="encoding_trans" value="UTF-8" /> */}
            {/* 
            =======================================
             옵션 정보                                                               
            --------------------------------------
              ※ 옵션 - 결제에 필요한 추가 옵션 정보를 입력 및 설정합니다.
            --------------------------------------
            */}
            {/*  카드사 리스트 설정
            예) 비씨카드와 신한카드 사용 설정시 */}
            {/* <input type="hidden" name="used_card"    value="CCBC:CCLG"> */}
            {/* 무이자 옵션
                    ※ 설정할부    (가맹점 관리자 페이지에 설정 된 무이자 설정을 따른다) - "" 로 설정
                    ※ 일반할부    (KCP 이벤트 이외에 설정 된 모든 무이자 설정을 무시한다) - "N" 로 설정
                    ※ 무이자 할부 (가맹점 관리자 페이지에 설정 된 무이자 이벤트 중 원하는 무이자 설정을 세팅한다)   - "Y" 로 설정  */}
            {/* <input type="hidden" name="kcp_noint"       value=""/> */}
            {/* 무이자 설정
                    ※ 주의 1 : 할부는 결제금액이 50,000 원 이상일 경우에만 가능
                    ※ 주의 2 : 무이자 설정값은 무이자 옵션이 Y일 경우에만 결제 창에 적용
                    예) BC 2,3,6개월, 국민 3,6개월, 삼성 6,9개월 무이자 : CCBC-02:03:06,CCKM-03:06,CCSS-03:06:04 */}
            {/* <input type="hidden" name="kcp_noint_quota" value="CCBC-02:03:06,CCKM-03:06,CCSS-03:06:09"/> */}
            {/* KCP는 과세상품과 비과세상품을 동시에 판매하는 업체들의 결제관리에 대한 편의성을 제공해드리고자, 
               복합과세 전용 사이트코드를 지원해 드리며 총 금액에 대해 복합과세 처리가 가능하도록 제공하고 있습니다
               복합과세 전용 사이트 코드로 계약하신 가맹점에만 해당이 됩니다
               상품별이 아니라 금액으로 구분하여 요청하셔야 합니다
               총결제 금액은 과세금액 + 부과세 + 비과세금액의 합과 같아야 합니다. 
               (good_mny = comm_tax_mny + comm_vat_mny + comm_free_mny)
            */}
            {/* <input type="hidden" name="tax_flag"       value="TG03"> */}{" "}
            {/* 변경불가    */}
            {/* <input type="hidden" name="comm_tax_mny"   value=""    > */}{" "}
            {/* 과세금액    */}
            {/* <input type="hidden" name="comm_vat_mny"   value=""    > */}{" "}
            {/* 부가세     */}
            {/* <input type="hidden" name="comm_free_mny"  value=""    > */}{" "}
            {/* 비과세 금액 */}
            {/* 결제창 한국어/영어 설정 옵션 (Y : 영어) */}
            {/* <input type="hidden" name="eng_flag"        value="Y"/> */}
            {/* 가맹점에서 관리하는 고객 아이디 설정을 해야 합니다. 상품권 결제 시 반드시 입력하시기 바랍니다. */}
            {/* <input type="hidden" name="shop_user_id"    value=""/> */}
            {/* 복지포인트 결제시 가맹점에 할당되어진 코드 값을 입력해야합니다. */}
            {/* <input type="hidden" name="pt_memcorp_cd"   value=""/> */}
            {/* 결제창 현금영수증 노출 설정 옵션 (Y : 노출) */}
            {/* <input type="hidden" name="disp_tax_yn"     value="Y"/> */}
          </form>
        </div>
        <form name="pay_form" method="post" action="/kcp_api_pay">
          <input
            type="hidden"
            name="req_tx"
            defaultValue="{{post_data.req_tx}}"
          />{" "}
          {/* 요청 구분          */}
          <input
            type="hidden"
            name="res_cd"
            defaultValue="{{post_data.res_cd}}"
          />{" "}
          {/* 결과 코드          */}
          <input
            type="hidden"
            name="site_cd"
            defaultValue="{{post_data.site_cd}}"
          />{" "}
          {/* 사이트 코드      */}
          <input
            type="hidden"
            name="tran_cd"
            defaultValue="{{post_data.tran_cd}}"
          />{" "}
          {/* 트랜잭션 코드      */}
          <input
            type="hidden"
            name="ordr_idxx"
            defaultValue="{{post_data.ordr_idxx}}"
          />{" "}
          {/* 주문번호           */}
          <input
            type="hidden"
            name="good_mny"
            defaultValue="{{post_data.good_mny}}"
          />{" "}
          {/* 휴대폰 결제금액    */}
          <input
            type="hidden"
            name="good_name"
            defaultValue="{{post_data.good_name}}"
          />{" "}
          {/* 상품명             */}
          <input
            type="hidden"
            name="buyr_name"
            defaultValue="{{post_data.buyr_name}}"
          />{" "}
          {/* 주문자명           */}
          <input
            type="hidden"
            name="buyr_tel1"
            defaultValue="{{post_data.buyr_tel1}}"
          />{" "}
          {/* 주문자 전화번호    */}
          <input
            type="hidden"
            name="buyr_tel2"
            defaultValue="{{post_data.buyr_tel2}}"
          />{" "}
          {/* 주문자 휴대폰번호  */}
          <input
            type="hidden"
            name="buyr_mail"
            defaultValue="{{post_data.buyr_mail}}"
          />{" "}
          {/* 주문자 E-mail      */}
          <input
            type="hidden"
            name="enc_info"
            defaultValue="{{post_data.enc_info}}"
          />
          <input
            type="hidden"
            name="enc_data"
            defaultValue="{{post_data.enc_data}}"
          />
          <input
            type="hidden"
            name="use_pay_method"
            defaultValue="{{post_data.use_pay_method}}"
          />
          <input
            type="hidden"
            name="cash_yn"
            defaultValue="{{post_data.cash_yn}}"
          />{" "}
          {/* 현금영수증 등록여부*/}
          <input
            type="hidden"
            name="cash_tr_code"
            defaultValue="{{post_data.cash_tr_code}}"
          />
          {/* 추가 파라미터 */}
          <input
            type="hidden"
            name="param_opt_1"
            defaultValue="{{post_data.param_opt_1}}"
          />
          <input
            type="hidden"
            name="param_opt_2"
            defaultValue="{{post_data.param_opt_2}}"
          />
          <input
            type="hidden"
            name="param_opt_3"
            defaultValue="{{post_data.param_opt_3}}"
          />
        </form>
      </div>
    </div>
  );
};

export default MobilePay;
