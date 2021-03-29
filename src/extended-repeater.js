module.exports = function repeater(str, options) {
  if (typeof str !== 'string' && str !== undefined) str = String(str);
  if (typeof options.addition !== 'string' && options.addition !== undefined) options.addition = String(options.addition);
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;

  let arrStrRepeat = [];
  for (let outer = 0; outer < options.repeatTimes; outer++) {
    let arrAdditionalRepeat = [];
    for (let inner = 0; inner < options.additionRepeatTimes; inner++) {
      arrAdditionalRepeat.push(options.addition);
    }
    arrStrRepeat.push(str + arrAdditionalRepeat.join(options.additionSeparator));
  }
  return arrStrRepeat.join(options.separator);
};
  