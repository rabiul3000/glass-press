import { loginBtnCN } from "@/constants/constants";
import { GithubIcon } from "@/helpers/Icons";

const GithubLoginBtn = () => {
  return (
    <button className={loginBtnCN}
    >
      <GithubIcon /> Continue with Github
    </button>
  );
};

export default GithubLoginBtn;
