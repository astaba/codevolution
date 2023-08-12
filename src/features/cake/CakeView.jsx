import React, {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
const numOfCake = useSelector((state) => state.cake.numOfCake);

const dispatch = useDispatch();
const onOrdered = useCallback(() => dispatch(ordered()));
const onRestocked = useCallback(() => dispatch(restocked(5)));

  return (
    <div>
      <h2>Cake View: {numOfCake}</h2>
      <button onClick={onOrdered}>Order Cake</button>
      <button onClick={onRestocked}>Restock Cakes</button>
    </div>
  );
};

// import React from "react";
// import { connect } from "react-redux";
// import {
//   ordered as cakeOrdered,
//   restocked as cakeRestocked,
// } from "./cakeSlice";

// const CakeView = ({ cake, onOrdered, onRestocked }) => {
//   return (
//     <div>
//       <h2>Cake View: {cake}</h2>
//       <button onClick={() => onOrdered()}>Order Cake</button>
//       <button onClick={() => onRestocked(5)}>Restock Cakes</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   cake: state.cake.numOfCake,
// });
// const mapDispatchToProps = (dispatch) => ({
//   onOrdered: () => dispatch(cakeOrdered()),
//   onRestocked: (qty) => dispatch(cakeRestocked(qty)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CakeView);
