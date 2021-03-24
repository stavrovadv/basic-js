module.exports = function countCats(matrix) {
    let count = 0;
    matrix.forEach(stringMatrix => {
        if (stringMatrix.includes('^^')) {
            for (let i = 0; i < stringMatrix.length; i++) {
                if (stringMatrix[i] === '^^') count++;
            }
        }
    });
    return count;
};
