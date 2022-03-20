import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
const UserID = () => {
  let { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <span className="text-success">{user.first_name} </span>
      ) : (
        <span className="text-secondary">Guest</span>
      )}
    </>
  );
};

export default UserID;
