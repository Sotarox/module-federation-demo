import React, { useEffect, useState } from "react";

const UserCardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=6")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white shadow">
      {users.map(user => (
        <div key={user.id} className="rounded-lg border p-4 bg-blue-50">
          <h3 className="text-lg font-bold">{user.firstName} {user.lastName}</h3>
          <p className="text-sm text-gray-700">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCardList;