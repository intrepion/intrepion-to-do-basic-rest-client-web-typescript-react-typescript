import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import NoMatch from "./NoMatch";
import User from "./User";
import Users from "./Users";

const App = () => {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ]);

  const handleRemoveUser = (userId: string) => {
    setUsers((state) => state.filter((user) => user.id !== userId));

    navigate("/users");
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />}>
          <Route
            path=":userId"
            element={<User onRemoveUser={handleRemoveUser} />}
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
