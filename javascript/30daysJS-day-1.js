//Arithmetic Operators

function getArea(length, width) {
  length = parseFloat(length);
  width = parseFloat(width);

  if (length > 0 && length < 1001) {
    if (width > 0 && length < 1001) {
      let area = (length * width).toFixed(3);
    }
  }
}
getArea(10, 20);

function getPerimeter(length, width) {
    return length + width


};
