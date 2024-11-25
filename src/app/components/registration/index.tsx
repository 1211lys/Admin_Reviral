"use client";

import React from "react";
import Category from "./Category";
import { usePlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";
import ProductName from "./ProductName";
import Price from "./Price";
import ProductOption from "./ProductOption";

export default function Registration() {
  const {
    data,
    updateButton,
    handleInputChange,
    handleTimeCheckInputChange,
    updateOptions,
  } = usePlatformRegistrationData();
  return (
    <>
      <h1 className="text-3xl font-bold w-full border-b">캠페인 등록</h1>
      <div className="flex flex-col gap-10">
        <Category
          data={data}
          updateButton={updateButton}
          handleInputChange={handleInputChange}
          handleTimeCheckInputChange={handleTimeCheckInputChange}
        />

        <ProductName handleInputChange={handleInputChange} />
        <Price handleInputChange={handleInputChange} />
        <ProductOption
          data={data}
          updateButton={updateButton}
          updateOptions={updateOptions}
        />
      </div>
    </>
  );
}
