import React, { useState } from "react";

const TranslateWordModal = ({ isOpen, onClose, words }) => {
  const [inputWord, setInputWord] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [translation, setTranslation] = useState("");

  if (!isOpen) return null;

  const handleTranslate = (e) => {
    e.preventDefault();

    // console.log("pasa");
    const wordFound = words.find(
      (word) => word.es === inputWord || word.en === inputWord || word.pt === inputWord
    );

    if (wordFound) {
      let translatedWord = "";

      switch (selectedLanguage) {
        case "es":
          translatedWord = wordFound.es;
          break;
        case "en":
          translatedWord = wordFound.en;
          break;
        case "pt":
          translatedWord = wordFound.pt;
          break;
        default:
          translatedWord = "Idioma no válido";
      }

      setTranslation(translatedWord);
    } else {
      setTranslation("Palabra no encontrada en el diccionario.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Traductor USIP</h2>
        <p>Que palabra desea traducir en el diccionario.<br />Agregue su palabra y después el idioma de traducción.</p>
        
        <form onSubmit={handleTranslate}>
          <label>Palabra a traducir:</label>
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
            required
          />

          <label>Idioma de traducción:</label>
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="pt">Portugués</option>
          </select>

          <textarea className="translation-output" readOnly value={translation}></textarea>

          <button type="submit">Traducir</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </div>
  );
};

export default TranslateWordModal;
