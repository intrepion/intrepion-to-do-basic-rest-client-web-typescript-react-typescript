import { Link, useParams } from "react-router-dom";

const User = (props: { onRemoveUser: any }) => {
  const { onRemoveUser } = props;

  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>

      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove
      </button>

      <Link to="/users">Back to Users</Link>
    </>
  );
};

export default User;
