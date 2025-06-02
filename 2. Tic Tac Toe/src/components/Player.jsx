import { useState } from "react";

export default function Player({ initialName, symbol, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);

    // if (onEdit) {
    //   onEdit(name);
    // }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value); 
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    buttonText = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{buttonText}</button>
      </span>
    </li>
  );
}
