"use client";

import { PlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";
import React from "react";
import Image from "next/image";

const OPTION_TYPE_DATA = [
  { key: 0, title: "조합형", value: "CT" },
  { key: 1, title: "단독형", value: "ST" },
];

interface Props {
  data: PlatformRegistrationData;
  updateButton: (
    key: keyof PlatformRegistrationData,
    value: string | number
  ) => void;
  updateOptions: (action: "add" | "remove") => void;
}

export default function ProductOption({
  data,
  updateButton,
  updateOptions,
}: Props) {
  return (
    <div className="shadow-lg shadow-slate-500">
      {/* 상품 옵션 */}
      <h2 className="text-xl font-bold border-b p-4">
        상품 옵션<span className="ml-2 text-red-500">*</span>
      </h2>
      <div className="flex flex-col justify-center ">
        {/* 옵션 구성타입 */}
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            옵션 구성타입<span className="ml-2 text-red-500">*</span>
          </h3>
          {OPTION_TYPE_DATA.map((item) => (
            <button
              key={item.key}
              className={`border min-w-[110px] h-[40px] rounded-lg ${
                data.platform === item.value && "bg-blue-500"
              } `}
              onClick={() => updateButton("optionType", item.value)}
            >
              {item.title}
            </button>
          ))}
        </div>
        {/* 옵션 개수 */}
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            옵션명 개수<span className="ml-2 text-red-500">*</span>
          </h3>
          <div className="flex gap-4 items-center">
            <button className="border min-w-[110px] h-[40px] flex justify-center items-center">
              <div>{data.options.length}개</div>
            </button>
            <button
              onClick={() => updateOptions("add")}
              className="w-[40px] h-[40px] flex items-center justify-center relative"
            >
              <Image src="/images/plus.png" width={36} height={36} alt="plus" />
            </button>
            <button
              onClick={() => updateOptions("remove")}
              className="w-[40px] h-[40px] flex items-center justify-center relative"
            >
              <Image
                src="/images/minus.png"
                width={36}
                height={36}
                alt="minus"
              />
            </button>
          </div>
        </div>
        {/* 옵션 입력 */}

        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            옵션 입력<span className="ml-2 text-red-500">*</span>
          </h3>

          <div className="flex flex-col ">
            <div className=" flex gap-10 text-center mb-5">
              <h1 className="min-w-[200px]">옵션명</h1>
              {data.optionType === "CT" && (
                <>
                  <h1 className="min-w-[200px]">하위 옵션 값</h1>
                  <h1 className="min-w-[200px]">추가 금액</h1>
                </>
              )}
              <h1 className="min-w-[200px]">모집 인원</h1>
            </div>
            <div>
              {data.options.map((item) => (
                <div className="mb-10" key={item.key}>
                  <div className="flex gap-10">
                    <input
                      type="text"
                      id="optionName"
                      placeholder="상품명을 입력해주세요"
                      className="w-full p-2 min-w-[200px]"
                    />
                    {data.optionType === "CT" && (
                      //여기부터 다시 작업
                      <div className="flex flex-col gap-10">
                        <div className="flex gap-10">
                          <input
                            key={`addAmount`}
                            type="string"
                            placeholder="심플형 디자인"
                            className="w-full p-2 min-w-[200px]"
                          />

                          <input
                            key={`optionList`}
                            type="string"
                            placeholder="추가 금액을 입력해주세요"
                            className="w-full p-2 min-w-[200px]"
                          />
                          <input
                            type="text"
                            id="userCount"
                            placeholder="상품명을 입력해주세요"
                            className="w-full p-2 min-w-[200px]"
                          />
                        </div>
                      </div>
                    )}
                    {data.optionType === "ST" && (
                      <input
                        type="text"
                        id="userCount"
                        placeholder="상품명을 입력해주세요"
                        className="w-full p-2 min-w-[200px]"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {data.optionType === "CT" && (
            <button className="w-[40px] h-[40px] flex items-center justify-center relative">
              <Image
                src="/images/minus.png"
                width={36}
                height={36}
                alt="minus"
              />
            </button>
          )}
          {data.optionType === "CT" && (
            <button className="w-[40px] h-[40px] flex items-center justify-center relative">
              <Image src="/images/plus.png" width={36} height={36} alt="plus" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
