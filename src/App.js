import "./App.css"
import { useSelector } from "react-redux"
import Comments from "./Comments"
import Likes from "./Likes"
import Title from "./Title"
import Spin from "./Spin"
import surfing from "./assets/sea.jpg"

function App() {
  const error = useSelector((state) => state.appReducer.error)

  return (
    <div className='App'>
      <div className='wrap'>
        <Spin />
        <div className='card'>
          {error && <div className='error-message'>{error}</div>}
          <div className='card-image'>
            <img src={surfing} alt='surfing' />
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
