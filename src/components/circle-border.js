import React from 'react'

const CircleBorder = ({ color, className }) => (
  <svg
    className={className}
    width="100%"
    viewBox="0 0 178 178"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      opacity="0.4"
      cx="88.7139"
      cy="89.166"
      r="87.5"
      stroke={color || '#B6B6B6'}
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeDasharray="6 14"
    />
  </svg>
)

export default CircleBorder
