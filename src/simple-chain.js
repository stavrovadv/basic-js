const chainMaker = {
    chainArr: [],
    getLength() {
        return this.chainArr.length;
    },
    addLink(value) {
        if (value === undefined) value = '';
        this.chainArr.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (Number.isInteger(position) && this.chainArr[position] !== undefined) {
            this.chainArr.splice(position - 1, 1);
            return this;
        } else {
          this.chainArr.length = 0;
          throw new Error();
        }
    },
    reverseChain() {
        this.chainArr.reverse();
        return this;
    },
    finishChain() {
        let res = this.chainArr.join('~~');
        this.chainArr.length = 0;
        return res;
    }
};

module.exports = chainMaker;
