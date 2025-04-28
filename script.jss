document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h2').textContent;
        const description = card.querySelector('p').textContent;
        alert(`Вы кликнули на карточку: ${title}\nОписание: ${description}`);
    });
});
