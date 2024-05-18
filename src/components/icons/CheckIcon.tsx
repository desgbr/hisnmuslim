import * as React from "react";
const CheckIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{"Check"}</title>
    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="Check">
        <rect
          id="Rectangle"
          fillRule="nonzero"
          x={0}
          y={0}
          width={24}
          height={24}
        />
        <circle
          id="Oval"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          cx={12}
          cy={12}
          r={9}
        />
        <path
          d="M8.5,12.5 L10.151,14.5638 C10.3372,14.7965 10.6843,14.8157 10.895,14.605 L15.5,10"
          id="Path"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
);
export default CheckIcon;
