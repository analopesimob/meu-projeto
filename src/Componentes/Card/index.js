import React, { useState } from "react";
import "./card.css";

const VocabularyCard = ({ item, onCorrectAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState({ message: "", status: "hidden" });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleVerify = () => {
    const cleanUserAnswer = userAnswer.toLowerCase().trim();
    const correctAnswer = item.translation.toLowerCase();

    if (cleanUserAnswer === "") {
      setResult({
        message: "⚠️ Por favor, digite uma tradução.",
        status: "warning",
      });
      return;
    }

    if (cleanUserAnswer === correctAnswer) {
      setResult({
        message: "✅ Correto!",
        status: "success",
      });
      setIsDisabled(true);
      onCorrectAnswer();
    } else {
      setResult({
        message: `❌ Incorreto. A resposta correta é: ${item.translation}`,
        status: "error",
      });
      setIsDisabled(true);
    }
  };

  const pronounceWord = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Desculpe, seu navegador não suporta a API de síntese de fala.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <div className="vocabulary-card">
      <div className="card-header">
        <div className="word">{item.word}</div>
        <button
          className="pronunciation-btn"
          onClick={() => pronounceWord(item.word)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
            <path d="M10.943 1.764A.5.5 0 0 1 11.5 2v12a.5.5 0 0 1-.943.236l-3-4a.5.5 0 0 1 0-.472l3-4a.5.5 0 0 1 .443-.236z" />
          </svg>
        </button>
      </div>

      <div className="input-group">
        <input
          type="text"
          className={isDisabled ? "input-disabled" : ""}
          placeholder="Digite a tradução..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isDisabled}
        />
        <button
          className={`verify-btn ${isDisabled ? "btn-disabled" : ""}`}
          onClick={handleVerify}
          disabled={isDisabled}
        >
          Verificar
        </button>
      </div>

      {result.status !== "hidden" && (
        <div className={`result-message ${result.status}`}>
          {result.message}
        </div>
      )}

      <div className="category-tag">{item.category}</div>
    </div>
  );
};

export default VocabularyCard;
