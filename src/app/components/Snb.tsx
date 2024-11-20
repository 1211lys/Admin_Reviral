"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SNB_LIST = [
  {
    key: 0,
    title: "a",
    to: "/",
  },
  {
    key: 1,
    title: "b",
    to: "/",
  },
  {
    key: 2,
    title: "c",
    to: "/",
  },
  {
    key: 3,
    title: "다계좌 이체",
    to: "/bank",
  },
];

export default function Snb() {
  const router = useRouter();

  const handleClick = (to: string) => {
    router.push(to);
  };
  return (
    <div className="p-5 border-r-2 h-screen min-w-[200px] fixed">
      <div className="mb-10">리바이럴 어드민</div>

      <ul>
        {SNB_LIST.map((item) => (
          <li key={item.key} className="mb-5">
            <button className="w-full" onClick={() => handleClick(item.to)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
