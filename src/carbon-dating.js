const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let age = false;
    let isCorrectFormat = (typeof sampleActivity === 'string' && (!isNaN(sampleActivity) || !isNaN(parseFloat(sampleActivity))));
    if (isCorrectFormat && +sampleActivity > 0 && +sampleActivity < MODERN_ACTIVITY) {
        age = Math.ceil(Math.log10(MODERN_ACTIVITY / +sampleActivity) / (Math.log10(2) / HALF_LIFE_PERIOD));
    }
    return age;
};
