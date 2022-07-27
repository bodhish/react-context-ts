import { useState, createContext, useContext } from "react";
import "./App.css";

type UserContextType = {
  username: string;
  updateUsername: (username: string) => void;
};

const UserContext = createContext<UserContextType | null>(null);

function User() {
  const { username } = useContext(UserContext) as UserContextType;

  return (
    <div>
      Username: {username}
      <UsernameEditor />
    </div>
  );
}

function UsernameEditor() {
  const { username, updateUsername } = useContext(
    UserContext
  ) as UserContextType;

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => updateUsername(e.target.value)}
      />
    </div>
  );
}

function Root() {
  const [username, setUsername] = useState<string>("owais");
  const [otherUsername, setOtherUsername] = useState<string>("calvin");

  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider
          value={{ username: username, updateUsername: setUsername }}
        >
          <User />
        </UserContext.Provider>
        <UserContext.Provider
          value={{ username: otherUsername, updateUsername: setOtherUsername }}
        >
          <User />
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default Root;
