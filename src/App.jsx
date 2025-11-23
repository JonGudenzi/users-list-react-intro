import { useState } from "react";
import UserItem from "./UserItem";

function App() {
  const [people, setPeople] = useState ([
    { id: 1, name: "Leanne Graham" },
    { id: 2, name: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch" }
  ]);

  return (
    <ul>
      {people.map(person => (
        <UserItem key={person.id} person={person} />
      ))}
    </ul>
  );
}

export default App;
