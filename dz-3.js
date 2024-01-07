const date = '2009-01-08';

function checkAge(bornTime) {
    const bornDate = new Date(bornTime);
    const nowDate = new Date();
    if (((nowDate.getFullYear()) - bornDate.getFullYear()) > 14) {
        if (bornDate.getMonth() <= nowDate.getMonth()) {
            if (bornDate.getDate() <= nowDate.getDate()){
                return true
            };
        };
    };
    return false
};

console.log(checkAge(date))