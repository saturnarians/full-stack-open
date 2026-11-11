import React from 'react'
function Part(props) {
  console.log('Part.jsx props:', props);

  return (
    <div>
        {props.part} {props.exercises}
    </div>
  )
}

export default Part