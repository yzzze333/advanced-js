const date = '2009-01-08';

function checkAge(bornTime) {
    const bornDate = new Date(bornTime);
    const nowDate = new Date();
    if (((nowDate.getFullYear()) - bornDate.getFullYear()) < 14) return false;
    if (bornDate.getMonth() > nowDate.getMonth()) return false;
    if (bornDate.getDate() > nowDate.getDate()) return false;
    return true;
};

console.log(checkAge(date));