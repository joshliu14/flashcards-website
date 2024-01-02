import React from "react";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
const Test = (props) => {
  return <div>Test</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  const isEmpty = state.firebase.profile.isEmpty;
  return { test: "1234", hello: "world", isEmpty: isEmpty };
};

// export default firebaseConnect(["/flashcards"])(connect(mapStateToProps)(Test));
export default compose(
  firebaseConnect(["/flashcards"]),
  connect(mapStateToProps)
)(Test);
