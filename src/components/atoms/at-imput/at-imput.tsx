import { forwardRef } from "react";

import { AtImputProps } from "./at-imput.type";

export const AtImput = forwardRef<HTMLInputElement, AtImputProps>(
  (
    {
      label,
      error,
      helperText,
      size = "md",
      variant = "outline",
      fullWidth = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    };

    const variantClasses = {
      outline:
        "border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
      filled: "border-0 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500",
      underline: "border-0 border-b-2 border-gray-300 rounded-none focus:border-blue-500",
    };

    const baseClasses =
      "w-full transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50";

    const errorClasses = error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "";

    const inputClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${errorClasses} ${className}`;

    return (
      <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            className={`text-sm font-medium ${error ? "text-red-600" : "text-gray-700"} ${disabled ? "opacity-50" : ""}`}
          >
            {label}
          </label>
        )}

        <input ref={ref} disabled={disabled} className={inputClasses} {...props} />

        {error && <span className="text-sm text-red-600">{error}</span>}

        {helperText && !error && <span className="text-sm text-gray-500">{helperText}</span>}
      </div>
    );
  }
);

AtImput.displayName = "AtImput";
