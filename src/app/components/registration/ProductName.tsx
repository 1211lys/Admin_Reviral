import React from "react";

interface Props {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductName({ handleInputChange }: Props) {
  return (
    <div className="shadow-lg shadow-slate-500">
      {/* {상품명} */}
      <h2 className="text-xl font-bold border-b p-4">
        상품명<span className="ml-2 text-red-500">*</span>
      </h2>
      <div className="flex flex-col justify-center ">
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            상품명<span className="ml-2 text-red-500">*</span>
          </h3>
          <input
            type="text"
            id="productName"
            placeholder="상품명을 입력해주세요"
            onChange={handleInputChange}
            className="w-full p-2"
          />
        </div>

        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            상품 링크 주소<span className="ml-2 text-red-500">*</span>
          </h3>
          <input
            type="text"
            id="productLink"
            placeholder="상품 링크 주소를 입력해주세요. (https 주소가 아닌 주소는 입력할 수 없습니다.)"
            onChange={handleInputChange}
            className="w-full p-2"
          />
        </div>
      </div>
    </div>
  );
}
