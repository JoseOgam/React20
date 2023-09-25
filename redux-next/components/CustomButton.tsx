"use client";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        onClick={handleClick}
        className={`custom-btn ${containerStyles}`}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
