function getNumbersDeletedBy(n, k) {
    let m = 1;

    while (m <= n) {
        if (m % k === 0) {
            console.log(m);
        }

        m++;
    }
};

getNumbersDeletedBy(n = prompt('Введите значение n',), k = prompt('Введите значение k',) );