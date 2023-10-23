import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { User } from "../types/UserTypes";
import { LoginButton } from "../Styles";

type LoginProps = {
  users: User[]; // Provide the list of available users
};

const Login: React.FC<LoginProps> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(""); // Store the selected user ID
  const { currentUser, setCurrentUser } = useUser();

  const handleLogin = () => {
    if (selectedUser) {
      // Perform the login action using the selected user ID
      console.log(`Logged in as user ID: ${selectedUser}`);
      const selectedUserObject = users.find(
        (user) => user.id === Number(selectedUser)
      );
      if (selectedUserObject) {
        setCurrentUser(selectedUserObject);
      }
    } else {
      // Handle the case where no user is selected
      console.log("Please select a user to log in.");
    }
  };

  return (
    <div id="login">
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        id="userSelect"
      >
        <option value="">Select a user</option>
        {users.map((user: User) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <LoginButton onClick={handleLogin}>Login</LoginButton>
      {currentUser && <Navigate to="/" state={currentUser} replace={true} />}
    </div>
  );
};

export default Login;
