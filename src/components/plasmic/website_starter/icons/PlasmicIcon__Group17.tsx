// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group17Icon(props: Group17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        transform={"matrix(.6585 -.75258 .6585 .75258 2 10.963)"}
        stroke={"currentColor"}
        strokeWidth={"1.681"}
        d={"M0-.84h8.932"}
      ></path>

      <path
        transform={"scale(.93127 1.0643) rotate(-45 15.177 -8.66)"}
        stroke={"currentColor"}
        strokeWidth={"1.681"}
        d={"M0-.84h8.932"}
      ></path>

      <path
        transform={"scale(.93127 1.0643) rotate(-45 22.801 -5.502)"}
        stroke={"currentColor"}
        strokeWidth={"1.681"}
        d={"M0-.84h8.932"}
      ></path>

      <path
        transform={"scale(.93127 1.0643) rotate(-45 22.982 -20.315)"}
        stroke={"currentColor"}
        strokeWidth={"1.681"}
        d={"M0-.84h8.932"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
