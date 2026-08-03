import { loginUserApi } from "../../helper/authApi";
import { setUser } from "./userSlice";

export const loginAction = (formData) => async (dispatch) => {
  const result = await loginUserApi(formData);
  if (result.status === "success") {
    dispatch(setUser(result.data.user));
  }
  return result;
};
