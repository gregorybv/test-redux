import "./App.css"
import Comments from "./Comments"
import Likes from "./Likes"
import Title from "./Title"
import Spin from "./Spin"

function App() {
  return (
    <div className='App'>
      <div className='wrap'>
        <Spin />
        <div className='card'>
          <div className='card-image'>
            <img src='./sea.jpg' alt='surfing' />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default App
