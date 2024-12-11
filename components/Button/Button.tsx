import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { LuLoader } from "react-icons/lu";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "lg";
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  className,
  variant,
  size,
  disabled = false,
  loading = false,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {loading && <LuLoader className="mr-2 h-4 w-4 animate-spin" />}
      {props.children}
    </button>
  );
}

const buttonVariants = cva(
  "inline-flex justify-center items-center font-bold text-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors disabled:opacity-25 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary hover:bg-primary-hover focus-visible:outline-primary",
        secondary:
          "bg-secondary hover:bg-secondary-hover text-primary ring-primary focus-visible:outline-primary",
        destructive:
          "bg-error hover:bg-error-hover focus-visible:outline-error",
      },
      size: {
        sm: "px-3.5 py-2.5 rounded-[20px]",
        lg: "px-6 py-3 text-[15px] rounded-3xl",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);
