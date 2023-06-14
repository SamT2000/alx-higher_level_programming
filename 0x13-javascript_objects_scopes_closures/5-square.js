t Rectangle = require('./4-rectangle');

// Class that inherits from Rectangle class
class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
