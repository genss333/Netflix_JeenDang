import { useDispatch } from "react-redux";
import { postLogin } from "../../redux/reducer/auth/loginReducer";

const useLoginState = () => {
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(postLogin(true));
  };

  return { onLogin };
};

export default useLoginState;
