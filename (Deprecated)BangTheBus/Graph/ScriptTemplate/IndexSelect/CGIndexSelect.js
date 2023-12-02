const {BaseNode} = require('./BaseNode');
const Amaz = effect.Amaz;
const {clamp} = require('./GraphHelper');

class CGIndexSelect extends BaseNode {
  constructor() {
    super();
  }

  getOutput(index) {
    const len = this.inputs.length - 1;
    const itemIndex = clamp(Math.floor(this.inputs[0]()), 0, len - 1);
    return this.inputs[1 + itemIndex]();
  }
}

exports.CGIndexSelect = CGIndexSelect;
