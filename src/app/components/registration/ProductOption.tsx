"use client";

import { PlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

const OPTION_TYPE_DATA = [
  { key: 0, title: "단독형", value: "SINGLE" },
  { key: 1, title: "조합형", value: "MULTI" },
];

interface Props {
  data: PlatformRegistrationData;
  setData: Dispatch<SetStateAction<PlatformRegistrationData>>;
  updateButton: (
    key: keyof PlatformRegistrationData,
    value: string | number
  ) => void;
  addOption: () => void;
  removeOption: (key: number) => void;
}

export default function ProductOption({
  data,
  setData,
  updateButton,
  addOption,
  removeOption,
}: Props) {
  const [isClient, setIsClient] = useState(false);

  // 클라이언트에서만 동작하도록 하는 useEffect
  useEffect(() => {
    setIsClient(true); // 클라이언트에서만 실행
  }, []);

  const addSubOption = (optionKey: number) => {
    setData((prevData) => {
      const updatedOptions = prevData.options.map((option) =>
        option.key === optionKey
          ? {
              ...option,
              subOption: [
                ...option.subOption,
                {
                  key: Date.now(), // 클라이언트에서만 동작하도록 수정 필요
                  subOptionTitle: "",
                  addPrice: "",
                  recruitPeople: "",
                },
              ],
            }
          : option
      );
      return { ...prevData, options: updatedOptions };
    });
  };

  const removeSubOption = (optionKey: number, subOptionKey: number) => {
    setData((prevData) => {
      const updatedOptions = prevData.options.map((option) => {
        if (option.key === optionKey) {
          if (option.subOption.length <= 1) {
            return option;
          }

          return {
            ...option,
            subOption: option.subOption.filter(
              (sub) => sub.key !== subOptionKey
            ),
          };
        }
        return option;
      });

      return { ...prevData, options: updatedOptions };
    });
  };

  if (!isClient) {
    return null; // 클라이언트에서만 렌더링하도록 처리
  }

  return (
    <div className="shadow-lg shadow-slate-500">
      <h2 className="text-xl font-bold border-b p-4">
        상품 옵션<span className="ml-2 text-red-500">*</span>
      </h2>
      <div className="flex flex-col justify-center">
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            옵션 구성타입<span className="ml-2 text-red-500">*</span>
          </h3>
          {OPTION_TYPE_DATA.map((item) => (
            <button
              key={item.key}
              className={`border min-w-[110px] h-[40px] rounded-lg ${
                data.optionType === item.value && "bg-blue-500"
              }`}
              onClick={() => updateButton("optionType", item.value)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            옵션명 개수<span className="ml-2 text-red-500">*</span>
          </h3>
          <div className="flex gap-4 items-center">
            <button className="border min-w-[110px] h-[40px] flex justify-center items-center">
              <div>{data.options.length}개</div>
            </button>
            <button
              className="w-[40px] h-[40px] flex items-center justify-center relative"
              onClick={addOption}
            >
              <Image src="/images/plus.png" width={36} height={36} alt="plus" />
            </button>
            <button
              className="w-[40px] h-[40px] flex items-center justify-center relative"
              onClick={() => removeOption(data.options.length - 1)}
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

        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            옵션 입력<span className="ml-2 text-red-500">*</span>
          </h3>
          <div className="flex flex-col ">
            {data.options.map((option) => (
              <div key={option.key} className="mb-10 ">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="옵션명"
                    className="p-4 h-[40px]"
                    value={option.optionTitle}
                    onChange={(e) => {
                      const updatedOptions = data.options.map((opt) =>
                        opt.key === option.key
                          ? { ...opt, optionTitle: e.target.value }
                          : opt
                      );
                      setData((prevData) => ({
                        ...prevData,
                        options: updatedOptions,
                      }));
                    }}
                  />
                  {data.optionType === "SINGLE" && (
                    <input
                      type="text"
                      placeholder="모집인원"
                      className="p-4 h-[40px]"
                      value={option.recruitPeople}
                      onChange={(e) => {
                        const updatedOptions = data.options.map((opt) =>
                          opt.key === option.key
                            ? { ...opt, recruitPeople: e.target.value }
                            : opt
                        );
                        setData((prevData) => ({
                          ...prevData,
                          options: updatedOptions,
                        }));
                      }}
                    />
                  )}
                  <div>
                    {data.optionType === "MULTI" &&
                      option.subOption.map((sub, index) => (
                        <div key={sub.key} className="flex gap-4 mb-4">
                          <input
                            type="text"
                            placeholder="하위 옵션명"
                            className="p-4 h-[40px]"
                            value={sub.subOptionTitle}
                            onChange={(e) => {
                              const updatedOptions = data.options.map((opt) =>
                                opt.key === option.key
                                  ? {
                                      ...opt,
                                      subOption: opt.subOption.map((s) =>
                                        s.key === sub.key
                                          ? {
                                              ...s,
                                              subOptionTitle: e.target.value,
                                            }
                                          : s
                                      ),
                                    }
                                  : opt
                              );
                              setData((prevData) => ({
                                ...prevData,
                                options: updatedOptions,
                              }));
                            }}
                          />
                          <div className="flex gap-4">
                            <div className="flex items-center">
                              <input
                                type="number"
                                placeholder="추가금액"
                                className="p-4 h-[40px]"
                                value={sub.addPrice}
                                onChange={(e) => {
                                  const updatedOptions = data.options.map(
                                    (opt) =>
                                      opt.key === option.key
                                        ? {
                                            ...opt,
                                            subOption: opt.subOption.map((s) =>
                                              s.key === sub.key
                                                ? {
                                                    ...s,
                                                    addPrice: Number(
                                                      e.target.value
                                                    ),
                                                  }
                                                : s
                                            ),
                                          }
                                        : opt
                                  );
                                  setData((prevData) => ({
                                    ...prevData,
                                    options: updatedOptions,
                                  }));
                                }}
                              />
                              <p className="border h-[40px] w-[40px] flex items-center justify-center bg-white text-black">
                                원
                              </p>
                            </div>

                            <input
                              type="text"
                              placeholder="모집인원"
                              className="p-4 h-[40px]"
                              value={sub.recruitPeople}
                              onChange={(e) => {
                                const updatedOptions = data.options.map((opt) =>
                                  opt.key === option.key
                                    ? {
                                        ...opt,
                                        subOption: opt.subOption.map((s) =>
                                          s.key === sub.key
                                            ? {
                                                ...s,
                                                recruitPeople: Number(
                                                  e.target.value
                                                ),
                                              }
                                            : s
                                        ),
                                      }
                                    : opt
                                );
                                setData((prevData) => ({
                                  ...prevData,
                                  options: updatedOptions,
                                }));
                              }}
                            />
                            <div key={sub.key} className="flex gap-4">
                              {index === option.subOption.length - 1 && (
                                <>
                                  <button
                                    className="w-[40px] h-[40px] flex items-center justify-center"
                                    onClick={() => addSubOption(option.key)}
                                  >
                                    <Image
                                      src="/images/plus.png"
                                      width={36}
                                      height={36}
                                      alt="add sub-option"
                                    />
                                  </button>
                                  <button
                                    className="w-[40px] h-[40px] flex items-center justify-center"
                                    onClick={() =>
                                      removeSubOption(option.key, sub.key)
                                    }
                                  >
                                    <Image
                                      src="/images/minus.png"
                                      width={36}
                                      height={36}
                                      alt="remove sub-option"
                                    />
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
