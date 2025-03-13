import "./App.css";
import Banner from "./Componentes/Banner";
import React, { useState } from "react";
import Card from "./Componentes/Card";

// Vocabulary data
const vocabulary = [
  // JavaScript Básico
  { word: "function", translation: "função", category: "JavaScript" },
  { word: "variable", translation: "variável", category: "JavaScript" },
  { word: "string", translation: "texto", category: "JavaScript" },
  { word: "array", translation: "lista", category: "JavaScript" },
  { word: "object", translation: "objeto", category: "JavaScript" },
  { word: "loop", translation: "laço", category: "JavaScript" },
  { word: "if", translation: "se", category: "JavaScript" },
  { word: "else", translation: "senão", category: "JavaScript" },
  { word: "return", translation: "retornar", category: "JavaScript" },
  { word: "console", translation: "console", category: "JavaScript" },
  { word: "boolean", translation: "booleano", category: "JavaScript" },

  // Frontend Básico
  { word: "button", translation: "botão", category: "Frontend" },
  { word: "header", translation: "cabeçalho", category: "Frontend" },
  { word: "footer", translation: "rodapé", category: "Frontend" },
  { word: "navbar", translation: "barra de navegação", category: "Frontend" },
  { word: "sidebar", translation: "barra lateral", category: "Frontend" },
  { word: "menu", translation: "menu", category: "Frontend" },
  { word: "link", translation: "link", category: "Frontend" },
  { word: "image", translation: "imagem", category: "Frontend" },
  { word: "form", translation: "formulário", category: "Frontend" },
  { word: "label", translation: "etiqueta", category: "Frontend" },

  // More vocabulary items can be added here
];

function App() {
  const [score, setScore] = useState(0);

  const handleCorrectAnswer = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="app">
      <Banner />
      

      <div className="vocabulary-section">
        <div className="score-container">
          <span>Pontuação:</span>
          <span id="score">{score}</span>
        </div>

        <div id="cards" className="cards-container">
          {vocabulary.map((item, index) => (
            <Card
              key={index}
              item={item}
              onCorrectAnswer={handleCorrectAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
