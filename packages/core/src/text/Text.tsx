import {
  makePrefixer,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../utils";
import { clsx } from "clsx";
import { ElementType, forwardRef, ReactElement } from "react";

import "./Text.css";

export type TextProps<T extends ElementType> = PolymorphicComponentPropWithRef<
  T,
  {
    /**
     * Applies disabled styling when true
     */
    disabled?: boolean;
    /**
     * Apply text truncation by mentioning number of rows to be displayed
     */
    maxRows?: number;
    /**
     * Match styling to another text component's style
     */
    styleAs?:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "label"
      | "display1"
      | "display2"
      | "display3";
    /**
     * Change text color palette
     */
    variant?: "primary" | "secondary";
  }
>;

type TextComponent = <T extends ElementType = "div">(
  props: TextProps<T>
) => ReactElement | null;

const withBaseName = makePrefixer("saltText");

export const Text: TextComponent = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      children,
      className,
      disabled = false,
      maxRows,
      style,
      styleAs,
      variant = "primary",
      ...restProps
    }: TextProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = as || "div";

    const textStyles = { "--text-max-rows": maxRows, ...style };

    return (
      <Component
        className={clsx(withBaseName(), className, {
          [withBaseName("disabled")]: disabled,
          [withBaseName("lineClamp")]: maxRows,
          [withBaseName(styleAs || "")]: styleAs,
          [withBaseName(variant)]: variant,
        })}
        {...restProps}
        ref={ref}
        style={textStyles}
      >
        {children}
      </Component>
    );
  }
);
