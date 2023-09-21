// Функция для отправки сообщения
function send() {
    let username = document.getElementById('username').value;
    let message = document.getElementById('message').value;

    if (username == '' || message == '') {
        alert("Введите имя и сообщение");
    } else {
        // Сохраняем имя пользователя в localStorage
        localStorage.setItem('username', username);

        // Обновляем приветствие с именем пользователя
        const greeting = document.getElementById('greeting');
        greeting.innerText =`Привет ${username}!`;

        // Отображаем имя пользователя и его сообщение
        const resultDiv = document.getElementById('result');
        resultDiv.innerText =`${username}: ${message}`;

        // Очищаем поле с сообщением
        document.getElementById('message').value = '';
    }
}