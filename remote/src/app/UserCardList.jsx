import React, { useEffect, useState } from "react";

const UserCardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=6")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        padding: "1.5rem",
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            borderRadius: "0.5rem",
            border: "1px solid #e5e7eb",
            padding: "1rem",
            backgroundColor: "#eff6ff", // Tailwind bg-blue-50
          }}
        >
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
            }}
          >
            {user.firstName} {user.lastName}
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#374151",
            }}
          >
            {user.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserCardList;