// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star29Icon(props: Star29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 7"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 0l.898 2.418h2.906l-2.35 1.495.897 2.419L4 4.837 1.649 6.332l.898-2.419L.196 2.418h2.906L4 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star29Icon;
/* prettier-ignore-end */
