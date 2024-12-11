"use client";
import { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

// Define the variant-based styles using cva
const checkboxStyles = cva(
  "col-start-1 row-start-1 appearance-none cursor-pointer rounded-sm border border-input dark:border-input-dark checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  {
    variants: {
      color: {
        primary: "checked:border-primary checked:bg-primary bg-dark-grey",
        secondary: "checked:border-secondary checked:bg-secondary", // Add more colors as needed
      },

      disabled: {
        true: "opacity-50 cursor-not-allowed", // Disable style
      },
    },
    defaultVariants: {
      color: "primary",
      disabled: false,
    },
  }
);

export default function Checkbox({
  label,
  color = "primary",
  size = "medium",
  disabled = false,
}: {
  label: string;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <fieldset className="bg-light-grey dark:bg-very-dark-grey p-3 hover:bg-[#d8d7f1] hover:dark:bg-[#39395b] transition rounded">
      <legend className="sr-only">Notifications</legend>
      <div className="space-y-5">
        <div className="flex gap-4 items-center">
          <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                aria-describedby="offers-description"
                checked={checked}
                onChange={() => setChecked(!checked)}
                disabled={disabled}
                className={cn(checkboxStyles({ color }))}
              />
              <svg
                fill="none"
                viewBox="0 0 14 14"
                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-[:checked]:opacity-100"
                />
                <path
                  d="M3 7H11"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-[:indeterminate]:opacity-100"
                />
              </svg>
            </div>
          </div>
          <div className="text-xs">
            <label
              htmlFor="offers"
              className={cn("font-bold text-black dark:text-white", {
                "line-through opacity-50": checked,
              })}
            >
              {label}
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
