"use client";

import React from "react";

interface Props {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Price({ handleInputChange }: Props) {
  return (
    <div className="shadow-lg shadow-slate-500">
      {/* {판매가} */}
      <h2 className="text-xl font-bold border-b p-4">
        판매가<span className="ml-2 text-red-500">*</span>
      </h2>
      <div className="flex flex-col justify-center ">
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            상품가격<span className="ml-2 text-red-500">*</span>
          </h3>
          <div className="flex items-center">
            <input
              type="number"
              id="campaignPrice"
              placeholder="숫자만 입력"
              onChange={handleInputChange}
              className="p-2"
            />
            <p className="border h-[40px] w-[40px] flex items-center justify-center bg-white text-black">
              원
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            지급 포인트<span className="ml-2 text-red-500">*</span>
          </h3>
          <div className="flex items-center">
            <input
              type="number"
              id="reviewPoint"
              placeholder="숫자만 입력"
              onChange={handleInputChange}
              className="p-2"
            />
            <p className="border h-[40px] w-[40px] flex items-center justify-center bg-white text-black">
              원
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
