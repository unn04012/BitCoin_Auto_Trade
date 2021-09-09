const day = new Date();
currentDay = new Date(day.getFullYear(), day.getMonth(), day.getDate()).toISOString();
console.log(currentDay)
lastDay = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + (day.getDate() - 1);
console.log(new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1))

const offset = new Date().getTimezoneOffset() * 60000;
console.log(offset)
console.log(new Date(Date.now() - offset))
console.log(new Date(Date.now()))
// console.log(new Date(Date.now()-))

function getLastDay() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + (date.getDate() - 1)).slice(-2);

    return year + "-" + month + "-" + day + 'T00:00:00.000Z';
}
console.log(getLastDay())

