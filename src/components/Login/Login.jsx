import LoginButtonAtom from "./LoginButtonAtom";
import PasswordAtom from "./PasswordAtom";
import UserAtom from "./UserAtom";

const Login = ({}) => {
  return (
    <>
      <UserAtom />
      <PasswordAtom />
      <LoginButtonAtom />
    </>
  );
};

export default Login;
