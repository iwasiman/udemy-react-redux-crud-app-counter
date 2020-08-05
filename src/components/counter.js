import React from 'react'
import CounterContext from '../contexts/counter'

// ステートレスコンポーネントなので関数型になる。
// TODO: => の横はなぜ{} でなく() なの？ React独自記法？
// <CounterContext.Consumer>の中が引数3つの無名関数。戻り値でJSXを返すだけの関数。
const Counter = () => (
  <CounterContext.Consumer>
    {
      ({count, increment, decrement}) => {
        return (
          <React.Fragment>
            <div>かうんと: {count}</div>
            <button onClick = {increment}>+1</button>
            <button onClick = {decrement}>-1</button>
          </React.Fragment>
        )
      }
    }
  </CounterContext.Consumer>
)

export default Counter
