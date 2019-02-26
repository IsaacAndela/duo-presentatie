import React from 'react'
import { Svg } from '../Components'

export const NodesAndEdges = props => (
  <Svg width={1440} height={1024} viewBox="0 0 1440 1024" {...props}>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(314 178)">
        <circle cx={743} cy={70} r={70} className="fill" />
        <circle cx={70} cy={70} r={70} className="fill" />
        <path
          className="stroke"
          strokeWidth={30}
          d="M743 70H70"
          strokeLinecap="square"
        />
      </g>
      <g transform="translate(314 443)">
        <circle cx={743} cy={70} r={70} className="fill" />
        <circle cx={70} cy={70} r={70} className="fill" />
        <path
          className="stroke"
          strokeWidth={30}
          d="M743 70H70"
          strokeLinecap="square"
        />
        <path className="fill" d="M438.625 70l-66 60.625V9.375z" />
      </g>
      <g transform="translate(314 708)">
        <circle cx={743} cy={70} r={70} className="fill" />
        <circle cx={70} cy={70} r={70} className="fill" />
        <path
          className="stroke"
          strokeWidth={30}
          d="M743 70H70"
          strokeLinecap="square"
        />
        <g className="fill">
          <path d="M524.625 70l-66 60.625V9.375zM287.625 70l66-60.625v121.25z" />
        </g>
      </g>
      <text className="fill" fontSize={60} fontWeight="bold">
        <tspan x={331} y={141}>
          {'Node'}
        </tspan>
      </text>
      <text className="fill" fontSize={60} fontWeight="bold">
        <tspan x={661.467} y={349}>
          {'Edge'}
        </tspan>
      </text>
      <text className="fill" fontSize={60} fontWeight="bold">
        <tspan x={509.123} y={626.5}>
          {'Edge met richting'}
        </tspan>
      </text>
      <text className="fill" fontSize={60} fontWeight="bold">
        <tspan x={416.179} y={904}>
          {'Edge met twee richtingen'}
        </tspan>
      </text>
    </g>
  </Svg>
)
