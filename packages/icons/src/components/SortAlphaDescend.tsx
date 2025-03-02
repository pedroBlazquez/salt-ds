import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type SortAlphaDescendIconProps = IconProps;

export const SortAlphaDescendIcon = forwardRef<
  SVGSVGElement,
  SortAlphaDescendIconProps
>(function SortAlphaDescendIcon(props: SortAlphaDescendIconProps, ref) {
  return (
    <Icon
      data-testid="SortAlphaDescendIcon"
      aria-label="sort alpha descend"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="m3.753 12.015-.489-1.388h-1.91l-.49 1.388H0l1.86-5.018h.909l1.856 5.018h-.872Zm-.7-2.092-.476-1.367a59.593 59.593 0 0 1-.267-.868 7.035 7.035 0 0 1-.085.314 74.22 74.22 0 0 0-.164.554l-.478 1.367h1.47Z"
        clipRule="evenodd"
      />
      <path d="M4.092 4.997H.5v-.564L3.043.697H.579V0h3.445v.56L1.48 4.3h2.611v.697ZM9 1v8.105l1.6-1.597.708.706-2.8 2.795L5.7 8.206l.708-.706L8 9.089V1h1Z" />
    </Icon>
  );
});
