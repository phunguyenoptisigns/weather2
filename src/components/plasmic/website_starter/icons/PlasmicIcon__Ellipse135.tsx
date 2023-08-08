// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse135IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse135Icon(props: Ellipse135IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 100"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"50"}
        cy={"50"}
        r={"46"}
        stroke={"currentColor"}
        strokeWidth={"8"}
        strokeDasharray={"2 2"}
      ></circle>
    </svg>
  );
}

export default Ellipse135Icon;
/* prettier-ignore-end */
