// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 17.142a1.44 1.44 0 011.428-1.429h2.857a1.44 1.44 0 011.429 1.429 1.44 1.44 0 01-1.429 1.428H1.428C.648 18.57 0 17.923 0 17.142zm29.998 1.428h2.857c.78 0 1.428-.647 1.428-1.428 0-.781-.647-1.429-1.428-1.429h-2.857a1.44 1.44 0 00-1.429 1.429c0 .78.648 1.428 1.429 1.428zM15.713 1.428v2.857a1.44 1.44 0 001.429 1.429 1.44 1.44 0 001.428-1.429V1.428C18.57.648 17.923 0 17.142 0a1.44 1.44 0 00-1.429 1.428zm0 28.57v2.857c0 .78.648 1.428 1.429 1.428.78 0 1.428-.647 1.428-1.428v-2.857c0-.781-.647-1.429-1.428-1.429a1.44 1.44 0 00-1.429 1.429zM5.028 7.048l2.02 2.018a1.437 1.437 0 002.018 0 1.437 1.437 0 000-2.019L7.047 5.028a1.437 1.437 0 00-2.019 0c-.552.553-.571 1.467 0 2.02zm20.19 20.188l2.018 2.02a1.437 1.437 0 002.02 0 1.437 1.437 0 000-2.02l-2.02-2.019a1.437 1.437 0 00-2.019 0 1.437 1.437 0 000 2.02zm2.018-22.208l-2.019 2.02a1.437 1.437 0 000 2.018 1.437 1.437 0 002.02 0l2.018-2.019a1.437 1.437 0 000-2.019 1.403 1.403 0 00-2.019 0zM7.047 25.218l-2.019 2.018a1.437 1.437 0 000 2.02 1.437 1.437 0 002.02 0l2.018-2.02a1.437 1.437 0 000-2.019 1.437 1.437 0 00-2.019 0zm19.618-8.076c0 5.256-4.267 9.523-9.523 9.523-5.257 0-9.523-4.267-9.523-9.523 0-5.257 4.266-9.523 9.523-9.523 5.256 0 9.523 4.266 9.523 9.523z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
