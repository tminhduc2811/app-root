import './App.css'
import Button from 'designSystem/Button'

function App() {

  return (
    <>
      <div>
        <Button onClick={() => console.log('btn clicked!')}>Primary Button</Button>
      </div>
    </>
  )
}

export default App
