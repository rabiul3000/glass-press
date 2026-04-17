import { loginBtnCN } from "@/constants/constants";
import { AppleIcon } from "lucide-react";

const AppleLoginBtn = () => {
  return (
    <button className={loginBtnCN}>
      <AppleIcon /> Continue with Apple
    </button>
  );
};

export default AppleLoginBtn;
