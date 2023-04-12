import { connect } from "react-redux"

function Likes(props) {
  // console.log(props)
  return (
    <div className='button-controls'>
      <button onClick={props.onIncremntLikes}>❤ {props.likes}</button>
      <button>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  // console.log("mapStateToProps >", state)
  return {
    likes: state.likes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncremntLikes: () => {
      // console.log("click")
      const action = { type: "INCREMENT" }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
