import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type AddDocumentIconProps = IconProps;

export const AddDocumentIcon = forwardRef<SVGSVGElement, AddDocumentIconProps>(
  function AddDocumentIcon(props: AddDocumentIconProps, ref) {
    return (
      <Icon
        data-testid="AddDocumentIcon"
        aria-label="add document"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="M6 5H5v2H3v1h2v2h1V8h2V7H6V5Z" />
        <path
          fillRule="evenodd"
          d="M1 12V0h8l2 2v10H1Zm9-1V4H7V1H2v10h8Zm0-8.586V3H8V1h.586L10 2.414Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);
