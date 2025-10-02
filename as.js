<script>
// Проверяем, был ли скрипт уже выполнен
if (!localStorage.getItem('hackedByIsebella')) {
    // Устанавливаем флаг в localStorage
    localStorage.setItem('hackedByIsebella', 'true');

    // Создаем красную плашку с текстом
    const hackDiv = document.createElement('div');
    hackDiv.style.position = 'fixed';
    hackDiv.style.top = '0';
    hackDiv.style.left = '0';
    hackDiv.style.width = '100%';
    hackDiv.style.backgroundColor = 'red';
    hackDiv.style.color = 'white';
    hackDiv.style.fontSize = '2rem';
    hackDiv.style.textAlign = 'center';
    hackDiv.style.padding = '15px';
    hackDiv.style.zIndex = '9999';
    hackDiv.textContent = 'Взлом by isebella';

    // Добавляем плашку на страницу
    document.body.prepend(hackDiv);

    // Показываем всплывающее окно
    alert('Взлом by isebella');
} else {
    // Если скрипт уже выполнялся, просто добавляем плашку
    const existingHackDiv = document.querySelector('div[style*="Взлом by isebella"]');
    if (!existingHackDiv) {
        const hackDiv = document.createElement('div');
        hackDiv.style.position = 'fixed';
        hackDiv.style.top = '0';
        hackDiv.style.left = '0';
        hackDiv.style.width = '100%';
        hackDiv.style.backgroundColor = 'red';
        hackDiv.style.color = 'white';
        hackDiv.style.fontSize = '2rem';
        hackDiv.style.textAlign = 'center';
        hackDiv.style.padding = '15px';
        hackDiv.style.zIndex = '9999';
        hackDiv.textContent = 'Взлом by isebella';
        document.body.prepend(hackDiv);
    }
}
</script>
