"use client";

import { PlatformRegistrationData } from "@/hooks/usePlatformRegistrationData";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import React, { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  setData: Dispatch<SetStateAction<PlatformRegistrationData>>;
}

const TiptapEditor = ({ setData }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "요청사항을 입력해주세요.",
      }),
    ],
    content: "</br>",
  });

  useEffect(() => {
    if (!editor) return;

    const handleUpdate = () => {
      const currentContent = editor.getHTML(); // 에디터의 현재 HTML 콘텐츠 가져오기
      console.log("Current content:", currentContent);

      // sellerRequest에 에디터 내용 반영
      setData((prevData) => ({
        ...prevData,
        sellerRequest: currentContent,
      }));
    };

    editor.on("update", handleUpdate);

    return () => {
      editor.off("update", handleUpdate); // 이벤트 핸들러 정리
    };
  }, [editor, setData]);

  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-2 w-full">
      <EditorContent
        editor={editor}
        className="tiptap text-base leading-7 h-full"
      />
    </div>
  );
};

export default TiptapEditor;
