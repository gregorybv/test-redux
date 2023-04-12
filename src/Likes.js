import { connect } from "react-redux"

function Likes(props) {
  // console.log(props)
  return (
    <div className='button-controls'>
      <button onClick={props.onIncremntLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecremntLikes}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  // console.log("mapStateToProps >", state)
  const { likesReducer } = state
  return {
    likes: likesReducer.likes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncremntLikes: () => {
      // console.log("click")
      const action = { type: "INCREMENT" }
      dispatch(action)
    },
    onDecremntLikes: () => {
      // console.log("click decrement")
      const action = { type: "DECREMENT" }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
