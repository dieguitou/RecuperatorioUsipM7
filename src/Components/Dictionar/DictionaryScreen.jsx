import React, { useState } from "react";
import DictionaryModal from "./DictionaryModal";
//elim
import DeleteWordModal from "./DeleteWordModal";
import TranslateWordModal from "./TranslateWordModal"; 
import { useDispatch, useSelector  } from "react-redux";
import { addWord, removeWord  } from "./dictionarySlice";
//
import "./styles.css";
const DictionaryScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const dispatch = useDispatch();
  //selector
  const words = useSelector((state) => state.dictionary.words);

  const handleAddWord = (word) => {
    dispatch(addWord(word));
    setIsOpen(false);
  };
  const handleDeleteWord = (word) => {
    dispatch(removeWord(word));
    setIsDeleteOpen(false);
  };

  return (
    <div className="dictionary-info">
      <h1>Dictionary USIP</h1>
      <p>
        Este <strong>módulo (diccionario)</strong> corresponde al recuperatorio del
        <span className="highlight"> modulo-7</span> ReactJS.
        <br />
        <strong>URL:</strong>{" "}
        <a href="https://github.com/dieguitou/SEGUNDAINSTACIA-M7.git" target="_blank" rel="noopener noreferrer">
        https://github.com/dieguitou/SEGUNDAINSTACIA-M7.git
        </a>
      </p>
      <button onClick={() => setIsOpen(true)}>Agregar Palabra</button>
      <DictionaryModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleAddWord} />
      <button onClick={() => setIsDeleteOpen(true)}>Eliminar Palabra</button>
      <DeleteWordModal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} onSubmit={handleDeleteWord} />
      <button onClick={() => setIsTranslateOpen(true)}>Traducir Palabra</button>
      <TranslateWordModal isOpen={isTranslateOpen} onClose={() => setIsTranslateOpen(false)} words={words} />
    </div>
  );
};

export default DictionaryScreen;
