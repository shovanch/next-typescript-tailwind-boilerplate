/* // eslint-disable

export type CardProps = {
  variant: "elevation" | "outlined";
  classes?: string;
  children?: React.ReactNode;
  onClick?: () => {};
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({
  onClick,
  variant = "elevation",
  children,
  classes,
  ...rest
}: CardProps): JSX.Element {
  return (
    <div
      className={[
        classes,
        "rounded-xl p-2",
        `${variant === "elevation" ? "shadow-md" : "border-2 border-solid"}`,
      ].join(" ")}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
}
 */
import React, { FC, HTMLAttributes } from "react";

// export interface CardProps extends HTMLAttributes<HTMLDivElement> {
//   variant: "elevation" | "outlined";
//   classes?: string;
// }

export type CardProps = {
  variant: "elevation" | "outlined";
  classes?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const Card: FC<CardProps> = ({
  variant = "elevation",
  children,
  classes,
  onClick,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={[
        classes,
        "rounded-xl p-2",
        `${variant === "elevation" ? "shadow-md" : "border-2 border-solid"}`,
      ].join(" ")}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
