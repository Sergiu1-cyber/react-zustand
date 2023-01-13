import React from 'react'
import {useCountStore} from '../store/count'

export default function Counter() {

  function CountRender() {
    const count = useCountStore((state) => state.counter)
    return <h3>Count:</h3>
  }

  return (
    <div>
      <CountRender />
    </div>
  )
}