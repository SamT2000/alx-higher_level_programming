
rts.converter = function (newBase) {
  return function (number) {
    return number.toString(newBase);
  };
};
