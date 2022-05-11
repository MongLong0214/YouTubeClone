import { UserModel } from "../db/index";

import { hashPassword } from "../utils/hashPassword";

class loginService {
  static login = async ({ email, password }) => {
    const user = await UserModel.findByEmail({ email });

    const hashedPassword = hashPassword(password);

    if (!user) {
      const errorMessage =
        "해당 아이디로 가입된 유저가 없습니다. 다시 한 번 확인해주세요";
      return { errorMessage };
    } else if (user.password === hashedPassword) {
      return user;
    } else {
      const errorMessage = "비밀 번호가 틀립니다 다시 한 번 확인해주세요";
      return { errorMessage };
    }
  };
}

export { loginService };
