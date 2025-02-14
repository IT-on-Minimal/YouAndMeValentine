function getWordForm(number, words) {
  if (number % 10 === 1 && number % 100 !== 11) {
    return words[0];
  } else if (
    number % 10 >= 2 &&
    number % 10 <= 4 &&
    (number % 100 < 10 || number % 100 >= 20)
  ) {
    return words[1];
  } else {
    return words[2];
  }
}

function showTimeTogether() {
  let startDate = new Date("2021-05-09"); // Дата начала отношений

  function updateTime() {
    let currentDate = new Date();
    let diff = currentDate - startDate;

    let totalDays = Math.floor(diff / (1000 * 60 * 60 * 24)); // Все дни подряд
    let years = Math.floor(totalDays / 365); // Годы
    let months = Math.floor((totalDays % 365) / 30); // Месяцы (приблизительно)
    let remainingDays = totalDays; // Оставляем полное число дней

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Склонение слов
    let yearWord = getWordForm(years, ["год", "года", "лет"]);
    let monthWord = getWordForm(months, ["месяц", "месяца", "месяцев"]);
    let dayWord = getWordForm(remainingDays, ["день", "дня", "дней"]);
    let hourWord = getWordForm(hours, ["час", "часа", "часов"]);
    let minuteWord = getWordForm(minutes, ["минута", "минуты", "минут"]);
    let secondWord = getWordForm(seconds, ["секунда", "секунды", "секунд"]);

    // Обновляем только числа (без повторения слов)
    document.getElementById("timeBox").style.display = "block";
    document.getElementById(
      "timeTogether"
    ).innerText = `${years} ${yearWord} ${months} ${monthWord}`;
    document.getElementById("days").innerText = `${remainingDays}`;
    document.getElementById("hours").innerText = `${hours}`;
    document.getElementById("minutes").innerText = `${minutes}`;
    document.getElementById("seconds").innerText = `${seconds}`;

    // Добавляем подписи к названиям (разово, чтобы не дублировать)
    document.getElementById("days-label").innerText = dayWord;
    document.getElementById("hours-label").innerText = hourWord;
    document.getElementById("minutes-label").innerText = minuteWord;
    document.getElementById("seconds-label").innerText = secondWord;
  }

  // Показываем время сразу после клика
  updateTime();

  // Запускаем обновление каждую секунду
  setInterval(updateTime, 1000);
}

function goToMemories() {
  window.location.href = "page3.html";
}
