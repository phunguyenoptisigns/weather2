// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group703IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group703Icon(props: Group703IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 31"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.984 7.273a5.23 5.23 0 00-2.655.714c-.786.464-1.398 1.125-1.76 1.899a3.784 3.784 0 00-.272 2.445c.185.82.64 1.574 1.308 2.166.668.592 1.52.995 2.447 1.158.927.164 1.887.08 2.76-.24a4.701 4.701 0 002.145-1.559 3.896 3.896 0 00.805-2.351c-.001-1.122-.505-2.198-1.4-2.99-.897-.794-2.111-1.24-3.378-1.242zm0 6.348c-.473 0-.934-.124-1.327-.357a2.195 2.195 0 01-.88-.95 1.892 1.892 0 01-.136-1.222c.092-.41.32-.787.653-1.083.335-.296.76-.498 1.224-.58.463-.08.944-.039 1.38.121.437.16.81.432 1.072.78.263.348.403.756.403 1.175 0 .561-.253 1.099-.7 1.495a2.557 2.557 0 01-1.69.62z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M22.166 3.367c-2.27-2.01-5.3-3.204-8.507-3.351-3.206-.148-6.36.761-8.853 2.552C2.313 4.358.656 6.904.158 9.712c-.5 2.809.194 5.681 1.946 8.063l9.027 12.273c.201.273.476.498.8.653a2.44 2.44 0 001.053.236c.368 0 .73-.08 1.054-.236.323-.155.598-.38.799-.653l9.027-12.273c1.626-2.21 2.344-4.847 2.035-7.47-.31-2.624-1.627-5.073-3.733-6.938zm-.304 13.253l-8.878 12.07-8.878-12.07C1.388 12.927 1.97 7.982 5.492 4.864A10.778 10.778 0 018.929 2.83a11.795 11.795 0 014.055-.714c1.392 0 2.77.242 4.055.714a10.778 10.778 0 013.438 2.034c3.52 3.118 4.103 8.063 1.385 11.757z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group703Icon;
/* prettier-ignore-end */