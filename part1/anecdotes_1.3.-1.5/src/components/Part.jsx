import React from 'react'
function Part(props) {

  console.log('Part.jsx props:', props);

  return (
    <div>
        {props.name} {props.exercises}
    </div>
  )
}

export default Part