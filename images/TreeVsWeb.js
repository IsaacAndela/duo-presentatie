import React from 'react'
import { Svg } from '../Components'

export const TreeVsWeb = props => (
  <Svg width={1440} height={1024} viewBox="0 0 1440 1024" {...props}>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(79 257)">
        <circle cx={140} cy={381} r={70} className="fill" />
        <circle cx={70} cy={591} r={70} className="fill" />
        <circle cx={233} cy={70} r={70} className="fill" />
        <circle cx={345} cy={284} r={70} className="fill" />
        <circle cx={456} cy={521} r={70} className="fill" />
        <circle cx={257} cy={591} r={70} className="fill" />
        <path
          className="stroke"
          strokeWidth={30}
          d="M233 70l112 214M233 70l-93 311m117 210L140 381M70 591l70-210m316 140L345 284"
          strokeLinecap="square"
        />
      </g>
      <g transform="translate(750 317)">
        <circle cx={70} cy={259} r={70} className="fill" />
        <circle cx={213} cy={513} r={70} className="fill" />
        <circle cx={518} cy={279} r={70} className="fill" />
        <circle cx={473} cy={545} r={70} className="fill" />
        <circle cx={353} cy={70} r={70} className="fill" />
        <circle cx={283} cy={279} r={70} className="fill" />
        <path
          className="stroke"
          strokeWidth={30}
          d="M70 259l403 286M70 259l143 254m305-234l-45 266M283 279l190 266M283 279l70-209m165 209L353 70m-70 209l-70 234"
          strokeLinecap="square"
        />
      </g>
      <text className="fill" fontSize={60} fontWeight="bold">
        <tspan x={101} y={188}>
          {'Boom is hierarchisch'}
        </tspan>
      </text>
      <text className="fill" fontSize={60} fontWeight="bold">
        <tspan x={812} y={117}>
          {'In een web (graph) '}
        </tspan>
        <tspan x={812} y={188}>
          {'kan alles met alles '}
        </tspan>
        <tspan x={812} y={259}>
          {'connecties hebben'}
        </tspan>
      </text>
    </g>
  </Svg>
)
