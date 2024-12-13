"use client";

import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const words = ["Criar,", "Explorar,", "Expandir,", "Conquistar."];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100; // velocidade de digitação
    const deletingSpeed = 100; // velocidade de apagamento
    const pauseTime = 1000; // tempo de pausa quando termina de digitar

    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Digitando
          if (text !== currentWord) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            // Palavra completa, aguarda antes de começar a apagar
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Apagando
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          } else {
            setText(currentWord.slice(0, text.length - 1));
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="flex justify-center mt-12">
      <p className="text-white text-4xl font-mono">
        {text}
        <span className="animate-pulse">_</span>
      </p>
    </div>
  );
};

export default TypingAnimation;
