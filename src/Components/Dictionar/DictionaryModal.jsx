import React, { useState } from "react";
//
import "./styles.css";
const DictionaryModal = ({ isOpen, onClose, onSubmit }) => {
  const [word, setWord] = useState({ es: "", en: "", pt: "" });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.es && word.en && word.pt) {
      onSubmit(word);
      setWord({ es: "", en: "", pt: "" });
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Traductor USIP</h2>
        <form onSubmit={handleSubmit}>
          <label>Español:</label>
          <input
            type="text"
            value={word.es}
            onChange={(e) => setWord({ ...word, es: e.target.value })}
            required
          />
          <label>Inglés:</label>
          <input
            type="text"
            value={word.en}
            onChange={(e) => setWord({ ...word, en: e.target.value })}
            required
          />
          <label>Portugués:</label>
          <input
            type="text"
            value={word.pt}
            onChange={(e) => setWord({ ...word, pt: e.target.value })}
            required
          />
          <button type="submit">Agregar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default DictionaryModal;
