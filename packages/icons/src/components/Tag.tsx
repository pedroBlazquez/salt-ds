import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type TagIconProps = IconProps;

export const TagIcon = forwardRef<SVGSVGElement, TagIconProps>(function TagIcon(
  props: TagIconProps,
  ref
) {
  return (
    <Icon
      data-testid="TagIcon"
      aria-label="tag"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="m7.414 1-6 6L5 10.586l6-6V1H7.414ZM12 5l-7 7-5-5 7-7h5v5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM8.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
        clipRule="evenodd"
      />
    </Icon>
  );
});
