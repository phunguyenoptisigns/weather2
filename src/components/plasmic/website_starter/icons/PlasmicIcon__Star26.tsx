// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star26Icon(props: Star26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 5"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3 0l.674 1.727h2.18L4.09 2.795l.673 1.728L3 3.455 1.237 4.523l.673-1.728L.147 1.727h2.18L3 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star26Icon;
/* prettier-ignore-end */
