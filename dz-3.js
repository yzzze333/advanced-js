const date = '2022-01-01';

function checkAge(bornTime) {
    const bornDate = new Date(bornTime);
    if (((new Date().getFullYear()) - bornDate.getFullYear()) > 14) {
        return true
    }
    return false
};

console.log(checkAge(date))