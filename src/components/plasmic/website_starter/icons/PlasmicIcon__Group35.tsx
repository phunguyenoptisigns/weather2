// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group35Icon(props: Group35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M33.658 9.339C32.475 4.005 27.205 0 20.873 0 15.846 0 11.48 2.536 9.306 6.246 4.07 6.741 0 10.684 0 15.462c0 5.117 4.68 9.277 10.437 9.277h22.612c4.801 0 8.697-3.464 8.697-7.731 0-4.082-3.566-7.39-8.088-7.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group35Icon;
/* prettier-ignore-end */
