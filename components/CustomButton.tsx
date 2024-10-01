"use client"
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title, containerStyles, btnType, textStyles,rightIcon, handleClick}: CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <Image 
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        )}
    </button>
  )
}

export default CustomButton