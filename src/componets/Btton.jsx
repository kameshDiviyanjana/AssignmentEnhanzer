import { Input } from 'postcss'
import React from 'react'

const Btton = (props,ref) => {
  return (
    <div ref={ref}>
      <button className={props.sty} id={props.hxlass}>{props.name}</button>

    </div>
  )
}

export default React.forwardRef(Btton)
