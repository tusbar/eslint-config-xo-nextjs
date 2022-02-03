import {useState} from 'react'

export const App = () => {
  const [state] = useState()

  return (
    <div>
      React does not have to be in scope.

      {state}
    </div>
  )
}
