"use client";

import React from "react";
import Category from "./Category";
import { usePlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";
import ProductName from "./ProductName";
import Price from "./Price";
import ProductOption from "./ProductOption";
import SaveButton from "./SaveButton";

export default function Registration() {
  const {
    data,
    setData,
    updateButton,
    handleInputChange,
    handleTimeCheckInputChange,
    addOption,
    removeOption,
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

        <ProductName handleInputChange={handleInputChange} setData={setData} />
        <Price handleInputChange={handleInputChange} />
        <ProductOption
          data={data}
          setData={setData}
          updateButton={updateButton}
          addOption={addOption}
          removeOption={removeOption}
        />
        <SaveButton data={data} />
      </div>
    </>
  );
}
