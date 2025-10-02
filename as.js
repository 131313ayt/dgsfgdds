<script>
// Проверяем наличие нашего флага в localStorage
if (!localStorage.getItem('hackedByIsebella')) {
    // Устанавливаем флаг
    localStorage.setItem('hackedByIsebella', 'true');

    // Создаем красную плашку с текстом
    const hackDiv = document.createElement('div');
    hackDiv.id = 'isebellaHackedNotice'; // Уникальный ID
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

    // Сохраняем код в sessionStorage как резервную копию
    sessionStorage.setItem('hackedByIsebellaBackup', hackDiv.outerHTML);

    // Мониторим изменения страницы
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && !document.getElementById('isebellaHackedNotice')) {
                // Если плашка была удалена, восстанавливаем её
                const backupCode = sessionStorage.getItem('hackedByIsebellaBackup');
                if (backupCode) {
                    const restoredDiv = document.createElement('div');
                    restoredDiv.innerHTML = backupCode;
                    document.body.prepend(restoredDiv);
                }
            }
        }
    });

    // Начинаем наблюдение за body
    observer.observe(document.body, { childList: true, subtree: true });
} else {
    // Если уже был взломан, проверяем наличие плашки
    if (!document.getElementById('isebellaHackedNotice')) {
        const backupCode = sessionStorage.getItem('hackedByIsebellaBackup');
        if (backupCode) {
            const restoredDiv = document.createElement('div');
            restoredDiv.innerHTML = backupCode;
            document.body.prepend(restoredDiv);
        }
    }
}
</script>
