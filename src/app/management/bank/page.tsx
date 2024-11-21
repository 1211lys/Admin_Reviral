"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";

interface BankItem {
  userKey: number;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  money: number;
  depositAccount: string;
  withdrawalAccount: string;
}

const BANK_LIST: BankItem[] = [
  {
    userKey: 0,
    bankName: "국민은행",
    bankCode: "031",
    accountNumber: "123123132",
    money: 11232323,
    depositAccount: "리바이럴",
    withdrawalAccount: "리바이럴",
  },
  {
    userKey: 1,
    bankName: "국민은행",
    bankCode: "031",
    accountNumber: "123123132",
    money: 11232323,
    depositAccount: "리바이럴",
    withdrawalAccount: "리바이럴",
  },
  {
    userKey: 2,
    bankName: "국민은행",
    bankCode: "031",
    accountNumber: "123123132",
    money: 11232323,
    depositAccount: "리바이럴",
    withdrawalAccount: "리바이럴",
  },
  {
    userKey: 3,
    bankName: "국민은행",
    bankCode: "031",
    accountNumber: "123123132",
    money: 11232323,
    depositAccount: "리바이럴",
    withdrawalAccount: "리바이럴",
  },
  {
    userKey: 4,
    bankName: "국민은행",
    bankCode: "031",
    accountNumber: "123123132",
    money: 11232323,
    depositAccount: "리바이럴",
    withdrawalAccount: "리바이럴",
  },
];

export default function Page() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // 전체 선택 / 해제
  const handleAllCheck = (isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems(BANK_LIST.map((item) => item.userKey)); // 전체 선택
    } else {
      setSelectedItems([]); // 전체 해제
    }
  };

  // 개별 선택 / 해제
  const handleItemCheck = (userKey: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, userKey]);
    } else {
      setSelectedItems((prev) => prev.filter((key) => key !== userKey));
    }
  };

  const downloadExcel = () => {
    // 오늘 날짜 가져오기
    const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd 형식

    // 선택된 항목만 필터링
    const filteredData = BANK_LIST.filter((item) =>
      selectedItems.includes(item.userKey)
    ).map((item) => [
      item.bankCode,
      item.accountNumber,
      item.money,
      item.depositAccount,
      item.withdrawalAccount,
    ]);

    // 데이터 워크시트 생성 (헤더 없이)
    const worksheet = XLSX.utils.aoa_to_sheet(filteredData);

    // 워크북 생성
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Banks");

    // 파일 생성 및 다운로드
    XLSX.writeFile(workbook, `${today}.xlsx`);
  };

  return (
    <div className="min-w-[1200px] p-10">
      <button
        onClick={downloadExcel}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-10"
        disabled={selectedItems.length === 0}
      >
        다운로드
      </button>
      <div className="grid grid-cols-6 text-center items-center text-xl border-b p-3 border-t border-r border-l border-red-500">
        <div className="border-r border-red-500 ">
          <input
            type="checkbox"
            className="w-8 h-8 "
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={selectedItems.length === BANK_LIST.length}
          />
        </div>
        <div className="border-r border-red-500 w-[200px] m-w-[200px]">
          입금기관
        </div>
        <div className="border-r border-red-500 w-[200px] m-w-[200px]">
          입금계좌번호
        </div>
        <div className="border-r border-red-500 w-[200px] m-w-[200px]">
          이체금액(원)
        </div>
        <div className="border-r border-red-500 w-[200px] m-w-[200px]">
          입금계좌메모
        </div>
        <div className="">출금계좌메모</div>
      </div>

      {BANK_LIST.map((item) => (
        <div
          key={item.userKey}
          className="text-center grid grid-cols-6 items-center w-full border-b border-r border-l p-3 border-red-500"
        >
          <div className="border-r border-red-500 w-[200px] m-w-[200px]">
            <input
              type="checkbox"
              className="w-8 h-8 "
              checked={selectedItems.includes(item.userKey)}
              onChange={(e) => handleItemCheck(item.userKey, e.target.checked)}
            />
          </div>
          <div className="border-r border-red-500 w-[200px] m-w-[200px] ">
            {item.bankName}
          </div>
          <div className="border-r border-red-500 w-[200px] m-w-[200px]">
            {item.accountNumber}
          </div>
          <div className="border-r border-red-500 w-[200px] m-w-[200px]">
            {item.money}
          </div>
          <div className="border-r border-red-500 w-[200px] m-w-[200px]">
            {item.depositAccount}
          </div>
          <div className="">{item.withdrawalAccount}</div>
        </div>
      ))}
    </div>
  );
}
