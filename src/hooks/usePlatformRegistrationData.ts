import { ChangeEvent, useEffect, useState } from "react";

export function usePlatformRegistrationData() {
  const [data, setData] = useState<PlatformRegistrationData>({
    platformName: "",
    platform: "",
    productType: "",
    productName: "",
    productLink: "",
    productImgLink: "",
    productPrice: 0,
    reviewPoint: 0,
    startTime: "",
    endTime: "",
    optionType: "",
    optionCount: 1,
    options: [
      {
        key: 0,
        optionName: "",
        optionList: [],
        addAmount: [],
        userCount: 0,
      },
    ],
    requestedTerm: "",
  });

  const updateButton = (
    key: keyof PlatformRegistrationData,
    value: string | number
  ) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const numericKeys = ["productPrice", "reviewPoint"];

    setData((prevData) => ({
      ...prevData,
      [id]: numericKeys.includes(id) ? Number(value) : value,
    }));
  };

  const updateOptions = (action: "add" | "remove") => {
    setData((prevData) => {
      if (action === "add") {
        const newOption: OptionListItem = {
          key: prevData.options.length,
          optionName: "",
          optionList: [],
          addAmount: [],
          userCount: 0,
        };

        return {
          ...prevData,
          options: [...prevData.options, newOption],
        };
      }

      if (action === "remove") {
        if (prevData.options.length > 1) {
          return {
            ...prevData,
            options: prevData.options.slice(0, -1),
          };
        }
      }

      return prevData;
    });
  };

  const handleTimeCheckInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setData((prevData) => {
      let updatedStartTime = prevData.startTime;
      let updatedEndTime = prevData.endTime;

      if (id === "startHour" || id === "startMin") {
        const [hour, min] = updatedStartTime.split(":");
        updatedStartTime =
          id === "startHour"
            ? `${value.padStart(2, "0")}:${min}`
            : `${hour}:${value.padStart(2, "0")}`;
      }

      if (id === "endHour" || id === "endMin") {
        const [hour, min] = updatedEndTime.split(":");
        updatedEndTime =
          id === "endHour"
            ? `${value.padStart(2, "0")}:${min}`
            : `${hour}:${value.padStart(2, "0")}`;
      }

      return {
        ...prevData,
        startTime: updatedStartTime,
        endTime: updatedEndTime,
      };
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return {
    data,
    setData,
    updateButton,
    handleInputChange,
    handleTimeCheckInputChange,
    updateOptions,
  };
}

export interface OptionListItem {
  key: number;
  optionName: string;
  optionList: string[];
  addAmount: string[];
  userCount: number;
}

export interface PlatformRegistrationData {
  platformName: string;
  platform: string;
  productType: string;
  productName: string;
  productLink: string;
  productImgLink: string;
  productPrice: number;
  reviewPoint: number;
  startTime: string;
  endTime: string;
  optionType: string;
  optionCount: number;
  options: OptionListItem[];
  requestedTerm: string;
}

// const DATA = {
//   //플랫폼
//   platform: "N, C, E",
//   //상품타입
//   productType: "SP, TP",
//   // SP = 당일 구매
//   // TP = 시간 구매

//   // SP일떄
//   startDay: "YYYY.MM.DD",
//   endDay: "YYYY.MM.DD",

//   // TP일떄
//   //판매기간
//   startDay: "YYYY.MM.DD",
//   endDay: "YYYY.MM.DD",
//   startTime : '00:00'
//   endTime : '00:00'

//   //상품명
//   productName: "",
//   //상품링크주소
//   productLink: "",

//   //상품가격
//   productPrice: 0,
//   //라뷰어 지급 포인트
//   reviewPoint: 0,

//   //옵션구성타입
//   //ST = 단독형
//   //CT = 조합형
//   optionType: "ST, CT",

//   //옵션명 갯수
//   optionCount: 0,

//   //ST일때
//   option: {
//     optionName: "",
//     userCount: 0,
//   },

//   //CT 일때
//   option: [
//     {
//       key: 0,
//       //옵션명
//       optionName: "",
//       //하위 옵션 값
//       optionList: ["", "", ""],
//       //추가금액
//       addAmount: 0,
//       //모집인원
//       userCount: 0,
//     },
//   ],

//   //리뷰 요청사항
//   requestedTerm: "",
// };
