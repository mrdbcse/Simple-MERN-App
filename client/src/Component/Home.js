import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Heading from "./Heading";

const Home = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await axios.get("/api/users");
    console.log(res.data.users);
    setUsers(res.data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const allUsers =
    users.length > 0 &&
    users.map((user, index) => {
      return <Card key={index} name={user.name} stream={user.stream} />;
    });

  const message =
    users.length > 0
      ? `${users.length} students who have registered!`
      : "No Student Registered!";
  return (
    <>
      <div>
        <Heading
          title={message}
          description='Hurry up only few seats are available for addmissions!'
        />
        {allUsers}
      </div>
    </>
  );
};

export default Home;
