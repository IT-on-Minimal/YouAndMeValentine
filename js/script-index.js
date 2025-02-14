let password = ""; // Буфер ввода пароля
const correctPassword = "0509"; // Установленный пароль

function pressKey(value) {
  if (password.length < 6) {
    // Ограничение длины пароля
    password += value;
    document.getElementById("passwordInput").value = "*".repeat(
      password.length
    );
  }
}

function checkPassword() {
  if (password === correctPassword) {
    alert("Пароль верный! Переход на следующую страницу...");
    window.location.href = "page2.html"; // Перенаправление на 2-ю страницу
  } else {
    alert("Неверный пароль! Попробуйте снова.");
    password = "";
    document.getElementById("passwordInput").value = "";
  }
}
