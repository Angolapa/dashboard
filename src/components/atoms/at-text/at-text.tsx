import { AtTextProps } from "./at-text.types";

export const AtText = ({
  children,
  as: Component = "span",
  className = "",
  size = "md",
  weight = "normal",
  color,
}: AtTextProps) => {
  if (!children) return null;

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const classes = `${sizeClasses[size]} ${weightClasses[weight]} ${className}`.trim();

  return (
    <Component className={classes} {...(color && { style: { color } })}>
      {children}
    </Component>
  );
};
