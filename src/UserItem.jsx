function UserItem({ person }) {
  return <li>{person.name} |{" "}
   <a href={`mailto:${person.email}`}>{person.email}</a>
   {" - "}
   {person.company.name}
 </li>;
}

export default UserItem;
