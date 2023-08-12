import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
 const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);

const dispatch = useDispatch();

  return (
    <div>
      <h2>IceCream View: {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock IceCreams</button>
    </div>
  );
};

// import React from "react";
// import { connect } from "react-redux";
// import {
//   ordered as iceCreamOrdered,
//   restocked as iceCreamRestocked,
// } from "./iceCreamSlice";

// const IceCreamView = ({ iceCream, onOrdered, onRestocked }) => {
//   return (
//     <div>
//       <h2>IceCream View: {iceCream}</h2>
//       <button onClick={() => onOrdered()}>Order IceCream</button>
//       <button onClick={() => onRestocked(5)}>Restock IceCreams</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   iceCream: state.iceCream.numOfIceCream,
// });
// const mapDispatchToProps = (dispatch) => ({
//   onOrdered: () => dispatch(iceCreamOrdered()),
//   onRestocked: (qty) => dispatch(iceCreamRestocked(qty)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamView);
