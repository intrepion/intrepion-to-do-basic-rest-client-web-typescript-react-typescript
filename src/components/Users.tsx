import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = (props: { users: any }) => {
  const { users } = props;

  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("name") || "";

  const handleSearch = (event: { target: { value: any } }) => {
    const name = event.target.value;

    if (name) {
      setSearchParams({ name: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h2>Users</h2>

      <input type="text" value={searchTerm} onChange={handleSearch} />

      <ul>
        {users
          .filter((user: { fullName: string }) =>
            user.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .map(
            (user: {
              id: Key | null | undefined;
              fullName:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.fullName}</Link>
              </li>
            )
          )}
      </ul>

      <Outlet />
    </>
  );
};

export default Users;
