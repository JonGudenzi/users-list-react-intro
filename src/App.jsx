import { useState, useEffect } from "react";
import UserItem from "./UserItem";

function App() {
  const [people, setPeople] = useState ([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setPeople(data))
      .catch(err => console.error("Fetch failed:", err));
  },[]);

  return (
    <ul>
      {people.map(person => (
        <UserItem key={person.id} person={person} />
      ))}
    </ul>
  );
}

export default App;
