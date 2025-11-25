import { useState, useEffect } from "react";
import UserItem from "./UserItem";

function App() {
  const [people, setPeople] = useState ([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setPeople(data))
      .catch(err => console.error("Fetch failed:", err));
  },[]);

  const filteredPeople = people.filter(person =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase())
);

   return (
    <>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
<p>{filteredPeople.length} users found</p>

      <ul>
        {filteredPeople.map((person) => (
          <UserItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}

export default App;
