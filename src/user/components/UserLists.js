import React from "react";
import "./UserLists.css";
import UserItem from "./UserItem";
export default function UserLists(props) {
  if (props.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found.</h2>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          place={user.image}
          placeCount={user.place}
        />
      ))}
    </ul>
  );
}
