import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([])



  const getClickCoords = (event) => {
    // from: https://stackoverflow.com/a/29296049/14198287
    var e = event.target;
    var dim = e.getBoundingClientRect();
    var x = event.clientX - dim.left;
    var y = event.clientY - dim.top;
    return [x, y];
  };



  function handleUndo() {

  }



  function handleClick(e) {


    let [x, y] = getClickCoords(e)

    setCount([...count, {
      x: e.clientX,
      y: e.clientY
    }])
    console.log(count)
  }



  function handleUndo() {

    console.log('undoing')
    const newArray = [...count].slice(0, -1)
    setCount(newArray)


  }
  return (
    <>
      <div className='all' onClick={(e) => handleClick(e)}>
        {
          count.map((d, index) => (
            <div key={index} style={{
              position: 'absolute',
              backgroundColor: 'red',
              borderRadius: '50%',
              transform: `translate(${d.x}px, ${d.y}px)`,
              left: -10,
              top: -10,
              width: 20,
              height: 20,
            }}
            ></div>
          ))
        }
      </div >
      <button onClick={() => handleUndo()} >Undo</button>
    </>
  )
}

export default App
