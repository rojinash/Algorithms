function floodFill(canvas, y, x, newColor) {
  original = canvas[y][x]; // Save the original color before changing it!
  canvas[y][x] = newColor; // Change to newColor

  if (x + 1 < canvas[y].length && canvas[y][x + 1] == original) { // Right
    floodFill(canvas, y, x + 1, newColor);
  }
  if (y + 1 < canvas.length && canvas[y + 1][x] == original) { // Down
    floodFill(canvas, y + 1, x, newColor);
  }
  if (x - 1 >= 0 && canvas[y][x - 1] == original) { // Left
    floodFill(canvas, y, x - 1, newColor);
  }
  if (y - 1 >= 0 && canvas[y - 1][x] == original) { // Up
    floodFill(canvas, y - 1, x, newColor);
  }
  return;
}

canvas = [
  [1, 1, 1, 1, 1, 1, 2, 2],
  [1, 1, 1, 1, 1, 1, 2, 2],
  [2, 2, 3, 3, 3, 1, 2, 2],
  [1, 1, 1, 1, 1, 1, 2, 2],
  [2, 2, 3, 3, 3, 1, 2, 2],
  [2, 2, 3, 3, 3, 1, 2, 2],
  [2, 2, 3, 3, 3, 1, 2, 2],
  [2, 2, 3, 3, 3, 1, 2, 2],
  [1, 1, 1, 1, 1, 1, 2, 2],
]

// Print the Canvas

output = "";

for (var i = 0; i < canvas.length; ++i) {
  for (var j = 0; j < canvas[i].length; ++j) {
    output += canvas[i][j];
  }
  output += "\n";
}

console.log(output);

floodFill(canvas, 1, 1, 3);

output = "";

for (var i = 0; i < canvas.length; ++i) {
  for (var j = 0; j < canvas[i].length; ++j) {
    output += canvas[i][j];
  }
  output += "\n";
}

console.log(output);
