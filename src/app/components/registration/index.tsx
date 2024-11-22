"use client";

import React from "react";
import Category from "./Category";
import { usePlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";

export default function Registration() {
  const {
    data,
    setData,
    updateButton,
    handleInputChange,
    handleTimeCheckInputChange,
  } = usePlatformRegistrationData();
  return (
    <>
      <h1 className="text-3xl font-bold w-full border-b">캠페인 등록</h1>
      <div>
        <Category
          data={data}
          setData={setData}
          updateButton={updateButton}
          handleInputChange={handleInputChange}
          handleTimeCheckInputChange={handleTimeCheckInputChange}
        />
      </div>
    </>
  );
}
