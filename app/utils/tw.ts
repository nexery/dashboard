import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function (...inputsValue: ClassValue[]) {
  return twMerge(clsx(inputsValue));
}
