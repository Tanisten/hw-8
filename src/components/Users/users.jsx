import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../UI/card/card"

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Card>
      <Items>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
    </Items>
    </Card>
  );
};
const Items = styled.ul`
list-style: none;

`