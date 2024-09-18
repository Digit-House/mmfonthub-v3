import type { Font } from "@/types/font";
import { convertText } from "@/utils/fontCovert";
import type React from "react";

interface FontCardProps {
  font: Font;
  typeText: string;
  fontSize: number;
}

const FontCard: React.FC<FontCardProps> = ({ font, typeText, fontSize }) => {
  const fontStyle = {
    fontFamily: `${font.fileName}`,
    fontSize: `${fontSize}px`,
    lineHeight: `${fontSize + 20}px`,
    margin: "10px 0",
  };
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-20 ">
      <div className="flex flex-col py-8 lg:py-12 b-line">
        <div className="flex w-full justify-between items-center">
          <h4 className="text-xl lg:text-2xl  xl:text-3xl font-bold">
            {font.nameEn}
          </h4>
          <p className="text-xl lg:text-2xl xl:text-3xl font-[400]">
            {font.fontStyle.split(",").length} STYLES
          </p>
        </div>
        <div className="min-h-32 pt-8">
          <h1
            className="text-[40px]"
            style={{
              ...fontStyle,
            }}
          >
            {convertText(font, typeText)}
          </h1>
        </div>
        <small className="text-lg lg:text-2xl font-semibold">
          BY {font.createdBy || "UNKNOW"}
        </small>
      </div>
    </div>
  );
};

export default FontCard;
