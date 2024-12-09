export interface CampaignSaveResponse {
  status: number;
  code: string;
  message: string;
  data: {
    isSave: boolean;
  };
  timestamp: "2024-11-27 23:59:59";
}

export interface subOptions {
  subOptionTitle: string | null;
  addPrice: number | string | null;
  recruitPeople: number | string | null;
  key: number | null;
}
export interface OptionListItem {
  key: number | null;
  optionTitle: string | null;
  subOption: subOptions[] | null;
  recruitPeople: number | string | null;
}

export interface CampaignSaveRequest {
  companyName: string | null;
  platform: string | null;
  category: string | null;
  productTitle: string | null;
  campaignLink: string | null;
  campaignImgUrl: string | null;
  campaignPrice: number | null;
  reviewPoint: number | null;
  startSaleDateTime: string | null;
  endSaleDateTime: string | null;
  startTime: string | null;
  endTime: string | null;
  optionType: string | null;
  optionCount: number | null;
  options: OptionListItem[];
  sellerRequest: string | null;
}
