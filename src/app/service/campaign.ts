import { AxiosResponse } from "axios";

import api from "./base";

import { CampaignSaveRequest, CampaignSaveResponse } from "../types/campaign";

export const PostCampaignSaveData = (
  param: CampaignSaveRequest
): Promise<AxiosResponse<CampaignSaveResponse>> =>
  api.post(`campaign/save`, param);
