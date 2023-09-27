import axios from "axios";
import { useQuery } from "react-query";

const RQDependentQueries = ({ email }) => {
  const {
    data: user,
    status: userStatus,
    error: userError,
  } = useQuery({
    queryKey: ["users", email],
    queryFn: () => {
      return axios.get("http://localhost:4000/users/" + email);
    },
    select: (response) => response.data,
  });

  const channelId = user?.channelId;

  const {
    data: channel,
    status: channelStatus,
    error: channelError,
  } = useQuery({
    queryKey: ["channels", channelId],
    queryFn: () => {
      return axios.get("http://localhost:4000/channels/" + channelId);
    },
    select: (response) => response.data,
    enabled: !!channelId,
  });

  const courses = channel?.courses;

  return (
    <>
      <h2>RQDependentQueries</h2>
      {
        {
          loading: <h3>User is loading...</h3>,
          error: <h3>User ERROR: {userError?.message}</h3>,
          success: <h3>{user?.name}</h3>,
        }[userStatus]
      }
      {
        {
          loading: <h4>Channel is loading...</h4>,
          error: <h4>Channel ERROR: {channelError?.message}</h4>,
          success: (
            <ul>
              {(courses || []).map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          ),
        }[channelStatus]
      }
    </>
  );
};

export default RQDependentQueries;
