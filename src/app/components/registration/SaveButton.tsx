import React from "react";
import { PostCampaignSaveData } from "@/app/service/campaign";
import { CampaignSaveRequest } from "@/app/types/campaign";
import { PlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";

interface Props {
  data: PlatformRegistrationData;
}

export default function SaveButton({ data }: Props) {
  const formatDate = (date: string): string => {
    const [year, month, day] = date.split(".");
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;
  };

  const removeEmptyStrings = (obj: unknown): unknown => {
    if (Array.isArray(obj)) {
      return obj
        .map(removeEmptyStrings)
        .filter((item) => item !== "" && item !== null && item !== undefined);
    } else if (typeof obj === "object" && obj !== null) {
      return Object.fromEntries(
        Object.entries(obj)
          .map(([key, value]) => [key, removeEmptyStrings(value)])
          .filter(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ([_, value]) =>
              value !== "" && value !== null && value !== undefined
          )
      );
    }
    return obj;
  };

  const handleCampaignSave = () => {
    const dataToSend = { ...(data as CampaignSaveRequest) };

    if (dataToSend.startSaleDateTime) {
      dataToSend.startSaleDateTime = formatDate(dataToSend.startSaleDateTime);
    }
    if (dataToSend.endSaleDateTime) {
      dataToSend.endSaleDateTime = formatDate(dataToSend.endSaleDateTime);
    }

    if (dataToSend.optionType === "SINGLE") {
      dataToSend.options = dataToSend.options.map((option) => ({
        ...option,
        subOption: null,
      }));
    }

    const cleanedData = removeEmptyStrings(dataToSend) as CampaignSaveRequest;

    if (
      !cleanedData.campaignLink?.startsWith("https://") ||
      !cleanedData.campaignImgUrl?.startsWith("https://")
    ) {
      alert("URL은 'https://'로 시작해야 합니다.");
      return;
    }

    PostCampaignSaveData(cleanedData)
      .then(({ data }) => {
        if (data.data.isSave === true) alert("등록되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return <button onClick={handleCampaignSave}>저장하기</button>;
}
