window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Отримуємо змінні зі Storyline
var player = GetPlayer();
var userName = player.GetVar("UserName");  // Змінна для імені користувача
var testResult = player.GetVar("q1_result");  // Змінна для результату тесту

// URL вашого веб-додатка Google Apps Script
var scriptUrl = "https://script.google.com/macros/s/AKfycbwZgc5lCJL1EdzpmfSbAiofNcXQLXKTPLSY8fbdXMfaDSFq7ai3CXaDxyIPDHJtK4MA/exec";

// Формуємо запит із параметрами
var fullUrl = scriptUrl + "?userName=" + encodeURIComponent(userName) + "&testResult=" + encodeURIComponent(testResult);

// Використовуємо fetch() для надсилання даних
fetch(fullUrl, {
    method: "GET",  // Метод запиту
})
.then(() => {
    console.log("Дані успішно надіслані на електронну пошту!");
})
.catch(error => {
    console.error("Помилка надсилання даних:", error);
});

}

};
