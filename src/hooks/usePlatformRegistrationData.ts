import { ChangeEvent, useEffect, useState } from "react";

export function usePlatformRegistrationData() {
  const [data, setData] = useState<PlatformRegistrationData>({
    companyName: "",
    platform: "",
    category: "",
    productTitle: "",
    campaignLink: "",
    campaignImgUrl: "",
    campaignPrice: 0,
    reviewPoint: 0,
    startSaleDateTime: "",
    endSaleDateTime: "",
    startTime: "",
    endTime: "",
    optionType: "SINGLE",
    optionCount: 1,

    options: [
      {
        key: 0,
        optionTitle: "",
        recruitPeople: "",
        subOption: [
          { key: 0, subOptionTitle: "", addPrice: "", recruitPeople: "" },
        ],
      },
    ],
    sellerRequest: "",
  });

  const updateButton = (
    key: keyof PlatformRegistrationData,
    value: string | number
  ) => {
    if (key === "optionType") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setData((prevData: any) => {
        if (value === "SINGLE") {
          return {
            ...prevData,
            optionType: value,
            optionCount: 1,
            options: [
              {
                key: 0,
                optionTitle: "",
                recruitPeople: "",
                subOption: [
                  {
                    key: 0,
                    subOptionTitle: "",
                    addPrice: "",
                    recruitPeople: "",
                  },
                ],
              },
            ],
          };
        }

        if (value === "MULTI") {
          return {
            ...prevData,
            optionType: value,
            optionCount: 1,
            options: [
              {
                key: 0,
                optionTitle: "",
                recruitPeople: "",
                subOption: [
                  {
                    key: 0,
                    subOptionTitle: "",
                    addPrice: "",
                    recruitPeople: "",
                  },
                ],
              },
            ],
          };
        }

        return {
          ...prevData,
          [key]: value,
        };
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const numericKeys = ["campaignPrice", "reviewPoint"];

    setData((prevData) => ({
      ...prevData,
      [id]: numericKeys.includes(id) ? Number(value) : value,
    }));
  };

  const handleTimeCheckInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setData((prevData) => {
      let updatedStartSaleDateTime = prevData.startSaleDateTime;
      let updatedEndSaleDateTime = prevData.endSaleDateTime;

      if (id === "startHour" || id === "startMin") {
        const [hour, min] = updatedStartSaleDateTime.split(":");
        updatedStartSaleDateTime =
          id === "startHour"
            ? `${value.padStart(2, "0")}:${min}`
            : `${hour}:${value.padStart(2, "0")}`;
      }

      if (id === "endHour" || id === "endMin") {
        const [hour, min] = updatedEndSaleDateTime.split(":");
        updatedEndSaleDateTime =
          id === "endHour"
            ? `${value.padStart(2, "0")}:${min}`
            : `${hour}:${value.padStart(2, "0")}`;
      }

      return {
        ...prevData,
        startSaleDateTime: updatedStartSaleDateTime,
        endSaleDateTime: updatedEndSaleDateTime,
      };
    });
  };

  const addOption = () => {
    setData((prevData) => ({
      ...prevData,
      options: [
        ...prevData.options,
        {
          key: prevData.options.length,
          optionTitle: "",
          recruitPeople: "",
          subOption:
            prevData.optionType === "MULTI"
              ? [
                  {
                    key: 0,
                    subOptionTitle: "",
                    addPrice: "",
                    recruitPeople: "",
                  },
                ]
              : [],
        },
      ],
    }));
  };

  const removeOption = (key: number) => {
    setData((prevData) => {
      if (prevData.options.length <= 1) {
        return prevData;
      }

      return {
        ...prevData,
        options: prevData.options.filter((option) => option.key !== key),
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
    addOption,
    removeOption,
  };
}

export interface subOptions {
  subOptionTitle: string;
  addPrice: number | string;
  recruitPeople: number | string;
  key: number;
}
export interface OptionListItem {
  key: number;
  optionTitle: string;
  subOption: subOptions[];
  recruitPeople: number | string;
}

export interface PlatformRegistrationData {
  companyName: string;
  platform: string;
  category: string;
  productTitle: string;
  campaignLink: string;
  campaignImgUrl: string;
  campaignPrice: number;
  reviewPoint: number;
  startSaleDateTime: string;
  endSaleDateTime: string;
  startTime: string;
  endTime: string;
  optionType?: string;
  optionCount: number;
  options: OptionListItem[];
  sellerRequest: string;
}

// const DATA = {
//   //플랫폼
//   platform: "N, C, E",
//   //상품타입
//   category: "SP, TP",
//   // SP = 당일 구매
//   // TP = 시간 구매

//   // SP일떄
//   startDay: "YYYY.MM.DD",
//   endDay: "YYYY.MM.DD",

//   // TP일떄
//   //판매기간
//   startDay: "YYYY.MM.DD",
//   endDay: "YYYY.MM.DD",
//   startSaleDateTime : '00:00'
//   endSaleDateTime : '00:00'

//   //상품명
//   productTitle: "",
//   //상품링크주소
//   campaignLink: "",

//   //상품가격
//   campaignPrice: 0,
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
//     optionTitle: "",
//     recruitPeople: 0,
//   },

//   //CT 일때
//   option: [
//     {
//       key: 0,
//       //옵션명
//       optionTitle: "",
//       //하위 옵션 값
//       optionList: ["", "", ""],
//       //추가금액
//       addAmount: 0,
//       //모집인원
//       recruitPeople: 0,
//     },
//   ],

//   //리뷰 요청사항
//   sellerRequest: "",
// };
