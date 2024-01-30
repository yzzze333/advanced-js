const element = document.getElementById('element');
const NewYear = new Date('01/01/2025').getTime();
const epoch = new Date(0);
function countdownNewYear() {
    const now = new Date().getTime();
    const between = new Date(NewYear - now);
    const months = between.getMonth() - epoch.getMonth();
    const days = between.getDate() - epoch.getDate();
    const hours = Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((between % (1000 * 60)) / 1000);
    element.innerText = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
};
setInterval(countdownNewYear, 1000);