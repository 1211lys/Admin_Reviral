import { AxiosResponse } from "axios";

import api from "./base";
import {
  SigninRequest,
  SigninResponse,
  SignupRequest,
  SignupResponse,
} from "@/types/signup/signup";

export const PostSignupData = (
  param: SignupRequest
): Promise<AxiosResponse<SignupResponse>> => api.post(`users/sign-up`, param);

export const GetAccountCheck = (param: {
  loginId: string;
}): Promise<AxiosResponse<SignupResponse>> =>
  api.get(`users/id-check`, {
    params: {
      loginId: param.loginId,
    },
  });

export const PostSigninData = (
  param: SigninRequest
): Promise<AxiosResponse<SigninResponse>> => api.post(`users/sign-in`, param);
