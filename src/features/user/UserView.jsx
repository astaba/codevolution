import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const { loading, users, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {loading && <h4>Loading ...</h4>}
      {!loading && error ? <h4>{error}</h4> : null}
      {users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   usersData: state.users,
// });
// const mapDispatchToProps = (dispatch) => ({
//   launchGetUsers: () => dispatch(fetchUsers()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserView);
