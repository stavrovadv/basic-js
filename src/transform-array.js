module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let res = [];
    let removed = new Array(arr.length).fill(false);
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        switch (arr[i]) {
          case '--discard-next': {
            i++;
            removed[i] = true;
            break;
          }
          case '--discard-prev': {
            if (res.length > 0 && !removed[i - 1]) {
              removed[i - 1] = true;
              res.pop();
            }
            break;
          }
          case '--double-next': {
            if (arr[i + 1] !== undefined) res.push(arr[i + 1]);
            break;
          }
          case '--double-prev': {
            if (res.length > 0 && !removed[i - 1]) {
              res.push(res[res.length - 1]);
            }
            break;
          }
          default:
            res.push(arr[i]);
            break;
        }
      } else res.push(arr[i]);
    }
    return res;
  } else throw new Error();
};
