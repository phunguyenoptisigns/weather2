// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse37Icon(props: Ellipse37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"7.068"}
        cy={"7.068"}
        r={"7.068"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse37Icon;
/* prettier-ignore-end */
