"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import { cva } from "class-variance-authority";
import Label from "../Label";
import { cn } from "@/utils/cn";

// CVA Definitions
const dropdownStyles = {
  button: cva(
    "inline-flex w-full justify-between gap-x-1.5 rounded ring-1 ring-inset px-3 py-2 text-md font-medium focus:outline-0 transition",
    {
      variants: {
        intent: {
          default:
            "bg-white dark:bg-dark-grey text-black dark:text-white ring-input dark:ring-input-dark focus:ring-primary",
        },
        size: {
          small: "text-sm py-1",
          medium: "text-md py-2",
          large: "text-lg py-3",
        },
      },
      defaultVariants: {
        intent: "default",
        size: "medium",
      },
    }
  ),
  menu: cva(
    "absolute right-0 z-10 w-full mt-2 origin-top py-2 rounded-md bg-white dark:bg-very-dark-grey transition focus:outline-none",
    {
      variants: {
        position: {
          top: "origin-top",
          bottom: "origin-bottom",
        },
      },
      defaultVariants: {
        position: "top",
      },
    }
  ),
  menuItem: cva(
    "block w-full px-4 py-1 text-left text-md font-medium text-medium-grey transition data-[focus]:text-black dark:data-[focus]:text-white data-[focus]:outline-none"
  ),
};

// Component
interface SelectDropdownProps {
  options: string[];
  label?: string;
  intent?: "default" | "danger";
  size?: "small" | "medium" | "large";
  menuPosition?: "top" | "bottom";
  onChange?: (selected: string) => void;
}

export default function SelectDropdown({
  options,
  label = "Options",
  size = "medium",
  menuPosition = "top",
  onChange,
}: SelectDropdownProps) {
  const [currOption, setOption] = useState(options[0]);

  const handleChange = (option: string) => {
    setOption(option);
    onChange?.(option);
  };

  return (
    <Menu as="div" className="relative text-left">
      <Label htmlFor="options">{label}</Label>
      <div>
        <MenuButton className={cn(dropdownStyles.button({ size }))}>
          {currOption}
          <HiChevronDown
            aria-hidden="true"
            className="-mr-1 size-5 text-primary"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={cn(dropdownStyles.menu({ position: menuPosition }))}
      >
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option}>
              <button
                onClick={() => handleChange(option)}
                className={cn(dropdownStyles.menuItem())}
              >
                {option}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
