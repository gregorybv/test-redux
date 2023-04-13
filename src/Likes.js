import { connect } from "react-redux"
import { incrementLikes, decrementLikes } from "./redux/actions"

function Likes(props) {
  return (
    <div className='button-controls'>
      <button onClick={props.onIncremntLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecremntLikes}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  const { likesReducer } = state
  return {
    likes: likesReducer.likes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncremntLikes: () => dispatch(incrementLikes()),
    onDecremntLikes: () => dispatch(decrementLikes()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
