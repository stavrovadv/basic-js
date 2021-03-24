module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let res = {
        turns: '',
        seconds: ''
    };
    res.turns = Math.pow(2, disksNumber) - 1;
    res.seconds = Math.floor(3600 * res.turns / turnsSpeed);
    return res;
};
