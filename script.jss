const flashcardsData = [
  {
    question: "Что такое фотосинтез?",
    answer: "Процесс создания органических веществ из неорганических при помощи света."
  },
  {
    question: "Как называется основной пигмент фотосинтеза?",
    answer: "Хлорофилл."
  },
  {
    question: "Что такое митоз?",
    answer: "Процесс деления клетки, при котором образуются две идентичные дочерние клетки."
  },
  {
    question: "Какой органоид отвечает за производство энергии в клетке?",
    answer: "Митохондрия."
  },
  {
    question: "Что такое эукариоты?",
    answer: "Организмы, клетки которых содержат ядро."
  }
];

const container = document.getElementById('flashcards-container');

flashcardsData.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.className = 'flashcard';
  cardElement.innerHTML = `
    <div class="flashcard-inner">
      <div class="flashcard-front">${card.question}</div>
      <div class="flashcard-back">${card.answer}</div>
    </div>
  `;
  
  cardElement.addEventListener('click', () => {
    cardElement.classList.toggle('flipped');
  });

  container.appendChild(cardElement);
});
