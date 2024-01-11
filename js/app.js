function getGreeting(hour) {
    if (hour >= 6 && hour <= 12) {
        return "Доброе утро";
    } else if (hour >= 13 && hour <= 17) {
        return "Добрый день";
    } else if (hour >= 18 && hour <= 23) {
        return "Добрый вечер";
    } else if (hour >= 0 && hour <= 7) {
        return "Доброй ночи";
    } else {
        return "Привет";
    }
}

let currentHour = (new Date()).getHours();
let greeting = getGreeting(currentHour);
console.log(greeting);