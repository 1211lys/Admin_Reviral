"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const SNB_LIST = [
  {
    key: 0,
    title: "캠페인 관리",
    list: [
      {
        key: 0,
        title: "캠페인 등록",
        to: "/campaign/registration",
      },
      {
        key: 1,
        title: "캠페인 수정",
        to: "/campaign/edit",
      },
      {
        key: 2,
        title: "리뷰 검수",
        to: "/campaign/check",
      },
    ],
  },
  {
    key: 1,
    title: "정산 관리",
    list: [
      {
        key: 0,
        title: "진행비 입금 현황",
        to: "/management/status",
      },
      {
        key: 1,
        title: "포인트 전환 내역",
        to: "/management/conversion",
      },
      {
        key: 2,
        title: "포인트 지급 관리",
        to: "/management/paid",
      },
      {
        key: 3,
        title: "다계좌 이체",
        to: "/management/bank",
      },
    ],
  },
  {
    key: 2,
    title: "회원 관리",
    list: [
      {
        key: 0,
        title: "블랙리스트 추가/해제",
        to: "/user/black",
      },
      {
        key: 1,
        title: "블라인드 계정 등록",
        to: "/user/blind",
      },
    ],
  },
];

export default function Snb() {
  const router = useRouter();
  const pathname = usePathname();

  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
  });

  const handleClick = (to: string) => {
    router.push(to);
  };

  const toggleListVisibility = (key: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="border-r-2 h-screen min-w-[200px] fixed bg-black">
      <div className="mb-10">리바이럴 어드민</div>

      <ul>
        {SNB_LIST.map((item) => (
          <li key={item.key} className="mb-5 flex flex-col">
            <button
              onClick={() => toggleListVisibility(item.key)}
              className="w-full text-left mb-5 text-xl font-bold pl-4 flex items-center justify-between"
            >
              {item.title}
              <Image
                className={`${
                  openItems[item.key] ? "rotate-0" : "rotate-180"
                } transition-transform duration-200`}
                src="/images/arrow.png"
                width={24}
                height={24}
                alt="arrowImg"
              />
            </button>
            {openItems[item.key] && (
              <div className="pl-4 flex flex-col bg-gray-900">
                {item.list.map((subItem) => (
                  <button
                    key={subItem.key}
                    onClick={() => handleClick(subItem.to)}
                    className={`text-left p-1 ${
                      pathname === subItem.to ? "text-blue-400 font-bold" : ""
                    }`}
                  >
                    {subItem.title}
                  </button>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
