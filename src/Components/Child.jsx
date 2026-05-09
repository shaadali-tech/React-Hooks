import { useContext } from "react";
import { UserContext } from "./USerContext";

const Child = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>This is the Child Component</h2>
      {user && <p>Welcome, {user.name}!</p>}
    </div>
  );
};

export default Child;
