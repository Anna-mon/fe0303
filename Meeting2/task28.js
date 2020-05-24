function isSimple( n ) {
    for (let k = 2; k < n ; k++) {
        if (n % k === 0) {
            return false;
        }
    }

    return true;
    
};

function getSimple(n) {
    let m = 1;

    do {
        if (isSimple(m)) {
            console.log(m);
        }

        m++;
    } while (m <= n);
};

getSimple(n = prompt('Введите значение',));
    