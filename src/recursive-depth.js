module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deep = 1;
    arr.forEach(elem => {
      if(Array.isArray(elem)){
        deep = Math.max(deep, 1 + this.calculateDepth(elem));
      }
    });
    return deep;
  }
};