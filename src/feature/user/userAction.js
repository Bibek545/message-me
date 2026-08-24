import { getUserApi, loginUserApi } from "../../helper/authApi";
import { setUser } from "./userSlice";

export const loginAction = (formData) => async (dispatch) => {
  const result = await loginUserApi(formData);
  if (result.status === "success") {
    dispatch(setUser(result.data.user));
  }
  return result;
};

export const getUserAction = () => async (dispatch) => {
  const result = await getUserApi();
  console.log("GET USER RESULT:", result);
  if (result.status === "success") {
    dispatch(setUser(result.user));
  }
};
