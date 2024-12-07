import React from "react";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "error";
  isInvalid?: boolean;
  type?: "text" | "email" | "password";
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, isInvalid = false, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          type={type}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? `${props.id}-error` : undefined}
          className={cn(inputVariants({ variant }), className)}
        />
        {variant === "error" && (
          <p className="text-error font-medium text-[13px] absolute right-[15px] top-[12px]">
            Can't be empty
          </p>
        )}
      </div>
    );
  }
);

const inputVariants = cva(
  "block w-full rounded border-0 py-3 px-3.5 ring-1 text-[13px] ring-inset ring-[#e0e3e8] text-black font-medium placeholder:text-[#bfbfc4] focus:ring-primary focus:ring-2 focus:outline-0 transition",
  {
    variants: {
      variant: {
        default: "",
        error: "ring-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default Input;
