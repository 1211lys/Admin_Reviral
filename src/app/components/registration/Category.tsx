"use client";

import { PlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";
import React, { Dispatch, SetStateAction } from "react";

const PLATFORM_DATA = [
  { key: 0, title: "네이버", value: "N" },
  { key: 1, title: "쿠팡", value: "C" },
  { key: 2, title: "기타", value: "E" },
];

const PRODUCT_TYPE_DATA = [
  { key: 0, title: "당일 구매", value: "SP" },
  { key: 1, title: "시간 구매", value: "TP" },
];

const TIME_DATA = [
  {
    key: 0,
    id: "startHour",
    placeholder: "12",
  },
  {
    key: 1,
    id: "startMin",
    placeholder: "00",
  },
  {
    key: 2,
    id: "endHour",
    placeholder: "14",
  },
  {
    key: 3,
    id: "endMin",
    placeholder: "30",
  },
];
interface Props {
  data: PlatformRegistrationData;
  setData: Dispatch<SetStateAction<PlatformRegistrationData>>;
  updateButton: (
    key: keyof PlatformRegistrationData,
    value: string | number
  ) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTimeCheckInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Category({
  data,
  setData,
  updateButton,
  handleInputChange,
  handleTimeCheckInputChange,
}: Props) {
  console.log(setData);
  return (
    <div className="shadow-lg shadow-slate-500">
      {/* 카테고리 */}
      <h2 className="text-xl font-bold border-b p-4">
        카테고리<span className="ml-2 text-red-500">*</span>
      </h2>
      <div className="flex flex-col justify-center ">
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 w-[100px]">
            플랫폼<span className="ml-2 text-red-500">*</span>
          </h3>

          {PLATFORM_DATA.map((item) => (
            <button
              key={item.key}
              className={`border w-[100px] h-[40px] rounded-lg ${
                data.platform === item.value && "bg-blue-500"
              } `}
              onClick={() => updateButton("platform", item.value)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 w-[100px]">
            상품가격<span className="ml-2 text-red-500">*</span>
          </h3>

          {PRODUCT_TYPE_DATA.map((item) => (
            <button
              key={item.key}
              className={`border w-[100px] h-[40px] rounded-lg ${
                data.productType === item.value && "bg-blue-500"
              } `}
              onClick={() => updateButton("productType", item.value)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 w-[100px]">
            판매 기간<span className="ml-2 text-red-500">*</span>
          </h3>
          <input
            className="text-center max-w-[140px] p-4 rounded-lg"
            type="text"
            placeholder="2024.11.11"
            onChange={handleInputChange}
            id="startDay"
          />{" "}
          ~{" "}
          <input
            className="text-center max-w-[140px] p-4 rounded-lg"
            type="text"
            placeholder="2024.12.12"
            onChange={handleInputChange}
            id="endDay"
          />
        </div>

        {data.productType === "TP" && (
          <div className="flex items-center gap-6 border-b p-4">
            <h3 className="font-bold mr-10 w-[100px]">
              구매 시간<span className="ml-2 text-red-500">*</span>
            </h3>
            <div className="flex items-center">
              {TIME_DATA.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-center"
                >
                  <input
                    type="text"
                    id={item.id}
                    placeholder={item.placeholder}
                    onChange={handleTimeCheckInputChange}
                    className="text-center max-w-[70px] p-4 rounded-lg mx-2"
                  />
                  {item.key === 1 && <div className="mx-2">~</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
