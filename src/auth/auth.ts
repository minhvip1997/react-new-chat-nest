import { ValidateUserDetails } from "src/utils/type";

export interface IAuthService{
  validateUser(userCredentials: ValidateUserDetails);
  
}