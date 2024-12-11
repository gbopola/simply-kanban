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
          <p className="text-error font-medium text-md absolute right-[15px] top-[11px]">
            Can't be empty
          </p>
        )}
      </div>
    );
  }
);

const inputVariants = cva(
  "block w-full rounded border-0 py-2.5 px-3.5 ring-1 text-md ring-inset ring-input text-black dark:text-white font-medium placeholder:text-[#bfbfc4] placeholder:dark:text-[#606169] focus:ring-primary focus:ring-2 focus:outline-0 transition bg-white dark:bg-dark-grey",
  {
    variants: {
      variant: {
        default: "dark:ring-input-dark",
        error: "ring-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default Input;
