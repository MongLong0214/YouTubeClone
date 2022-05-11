import { UserMondel } from "../db/index";
import { hashPassword } from "../utils/hashPassword";
class RegisterService {
  static create = async ({ name, email, password }) => {
    const hashedPassword = hashPassword(password);
    const newUserData = {
      name,
      email,
      password: hashedPassword,
    };
    const newUser = await UserMondel.create(newUserData);
    return newUser;
  };
}

export { RegisterService };
