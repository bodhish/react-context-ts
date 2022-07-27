import React, { useState } from "react";
import "./App.css";

type UsernameEditorProps = {
  username: string;
  updateUsername: (username: string) => void;
};

function User({ username, updateUsername }: UsernameEditorProps) {
  return (
    <div>
      Username: {username}
      <UsernameEditor username={username} updateUsername={updateUsername} />
    </div>
  );
}

function UsernameEditor({ username, updateUsername }: UsernameEditorProps) {
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

function App() {
  const [username, setUsername] = useState("owais");
  const [otherUsername, setOtherUsername] = useState("calvin");
  return (
    <div className="App">
      <header className="App-header">
        <User username={username} updateUsername={setUsername} />
        <User username={otherUsername} updateUsername={setOtherUsername} />
      </header>
    </div>
  );
}

export default App;
