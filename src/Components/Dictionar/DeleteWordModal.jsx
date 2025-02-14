import React, { useState } from "react";
import "./styles.css";

const DeleteWordModal = ({ isOpen, onClose, onSubmit }) => {
  const [word, setWord] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.trim() !== "") {
      onSubmit(word);
      setWord("");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Eliminar Palabra</h2>
        <p>
        Que palabra deseas eliminar del diccionario
        puedes escribir tu palabra en
        <br />
        <strong>ESPAÑOL,INGLES o PORTUGUES </strong>{" "}
      </p>
        <form onSubmit={handleSubmit}>
          <label>Palabra en cualquier idioma:</label>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
          />
          <button type="submit">Eliminar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default DeleteWordModal;