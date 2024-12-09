import React, { Dispatch, SetStateAction } from "react";
import TiptapEditor from "../common/Tiptap";
import { PlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";

interface Props {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setData: Dispatch<SetStateAction<PlatformRegistrationData>>;
}

export default function productTitle({ handleInputChange, setData }: Props) {
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
            id="productTitle"
            placeholder="상품명을 입력해주세요"
            onChange={handleInputChange}
            className="w-full p-2"
          />
        </div>

        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            상품 주소<span className="ml-2 text-red-500">*</span>
          </h3>
          <input
            type="text"
            id="campaignLink"
            placeholder="상품 주소를 입력해주세요. (https 주소가 아닌 주소는 입력할 수 없습니다.)"
            onChange={handleInputChange}
            className="w-full p-2"
          />
        </div>
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            상품 이미지<span className="ml-2 text-red-500">*</span>
          </h3>
          <input
            type="text"
            id="campaignImgUrl"
            placeholder="상품 이미지 주소를 입력해주세요. (https 주소가 아닌 주소는 입력할 수 없습니다.)"
            onChange={handleInputChange}
            className="w-full p-2"
          />
        </div>
        <div className="flex gap-6 items-center border-b p-4">
          <h3 className="font-bold mr-10 min-w-[110px]">
            상품 요청사항<span className="ml-2 text-red-500">*</span>
          </h3>

          <TiptapEditor setData={setData} />
        </div>
      </div>
    </div>
  );
}
