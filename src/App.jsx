import { useState, useEffect } from "react";
import UserItem from "./UserItem";

const SEARCH_KEY = "react-users-search";

function PracticeMessage({ term, count }) {
  return (
    <p>
      Practice: "{term}" — {count} result{count === 1 ? "" : "s"}
    </p>
  );
}

function App() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load saved search term on first render
  useEffect(() => {
    const savedTerm = localStorage.getItem(SEARCH_KEY);
    if (savedTerm) {
      setSearchTerm(savedTerm);
    }
  }, []);

  // Save search term whenever it changes
  useEffect(() => {
    localStorage.setItem(SEARCH_KEY, searchTerm);
  }, [searchTerm]);

  // Fetch users on first render
  useEffect(() => {
  async function loadUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setPeople(data);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  }
  loadUsers();
}, []);

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function getMessage() {
    if (searchTerm === "") {
      return "Start typing to search users.";
    } else {
      return `Searching for: ${searchTerm}`;
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p>{filteredPeople.length} users found</p>
      <p>You typed: {searchTerm}</p>
      <p>{getMessage()}</p>
      <PracticeMessage term={searchTerm} count={filteredPeople.length} />

      {filteredPeople.length === 0 && <p>No users found.</p>}

      <ul>
        {filteredPeople.map((person) => (
          <UserItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}

export default App;
