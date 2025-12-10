"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth,
  className,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    primary: "bg-primary text-white px-5 h-11 shadow-md hover:bg-primary-dark",
    outline:
      "border border-primary text-primary px-5 h-11 bg-white hover:bg-primary/5",
    ghost: "text-text-secondary px-3 h-9 hover:bg-black/5",
  };

  return (
    <button
      className={clsx(base, variants[variant], fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
