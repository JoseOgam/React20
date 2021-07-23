import { connect } from "react-redux";
import './App.css'

function App(props) {
  console.log(props)
  let handleInc = (evt) => {
    evt.preventDefault()
    props.dispatch({
      type: "INCREMENT"
    })
  }
  let handleDec = (evt) => {
    evt.preventDefault()
    props.dispatch({
      type: "DECREMENT"
    })
  }
  return (
    <div className="App">
      <div className="backgroundS">
          <button onClick={handleInc}>Increase</button>
        <button onClick={ handleDec }>Decrease</button>
        <p>{props.count}</p>
    </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps) (App);
