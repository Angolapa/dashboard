import { InputHTMLAttributes } from "react";

export interface AtImputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "underline";
  fullWidth?: boolean;
}
