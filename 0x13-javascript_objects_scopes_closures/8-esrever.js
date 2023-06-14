
rts.esrever = function (list) {
  const newList = [];
  const listLength = list.length;
  for (let index = 0; index < listLength; index++) {
    newList.push(list.pop());
  }
  return newList;
};
