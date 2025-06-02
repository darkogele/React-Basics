import { useState } from "react";

export default function Player({ name, symbol, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);

    if (onEdit) {
      onEdit(name);
    }
  };

  let playerName = <span className="player-name">{name}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    buttonText = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{buttonText}</button>
      </span>
    </li>
  );
}
