// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star25Icon(props: Star25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 7"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.638 0L5.68 2.67h3.37L6.324 4.323l1.04 2.67-2.726-1.65-2.726 1.65 1.041-2.67L.227 2.67h3.37L4.638 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star25Icon;
/* prettier-ignore-end */
