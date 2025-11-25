import { useState } from "react";

function UserItem({ person }) {
    const [showInfo, setShowInfo] = useState(false);

    return <li>{person.name} |{" "}
        <a href={`mailto:${person.email}`}>{person.email}</a>
        {" - "}
        {person.company.name}
        <button onClick={() => setShowInfo(prev => !prev)}>
            {showInfo ? "X" : "More info"}
        </button>
        {showInfo && (
            <p className="extra-info">
                Phone: {person.phone}<br />
                Website: {person.website}<br />
                {person.company.catchPhrase}
            </p>
        )}

    </li>;
}

export default UserItem;
