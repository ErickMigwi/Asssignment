import React from 'react'
import './content.css'
import { data } from './data'
export default function Content({data}) {
  return (
    <div id='grid'>
      <div id='left'>
        <h4>{data.h4}</h4>
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
      </div>
      <div id='right'>
        <h3>{data.h3}</h3>
      </div>
    </div>
  )
}
