function floodFill(canvas, startXY, newColor) {
    if (startXY.length != 2) {
        console.log("Invalid starting array");
        return;
    }
    var x = startXY[0];
    var y = startXY[1];
    if (x < 0 || x >= canvas[0].length || y < 0 || y >= canvas.length) {
        console.log("Invalid starting position")
        return;
    }
    var oldColor = canvas[y][x];

    return floodFillHelper(canvas, x, y, oldColor, newColor);
}

function floodFillHelper(canvas, x, y, oldColor, newColor) {
    if (x < 0 || x >= canvas[0].length || y < 0 || y >= canvas.length) {
        return canvas;
    } else {

        if (canvas[y][x] != oldColor) {
            return canvas;
           
        }
        canvas[y][x] = newColor;
        floodFillHelper(canvas, x - 1, y, oldColor, newColor);
        floodFillHelper(canvas, x + 1, y, oldColor, newColor);
        floodFillHelper(canvas, x, y - 1, oldColor, newColor);
        floodFillHelper(canvas, x, y + 1, oldColor, newColor);
    }
}

var newCanvas = [[1, 2, 1, 1, 1, 3, 1, 2], [2, 2, 1, 2, 1, 2, 2, 3], [1, 2, 1, 1, 1, 2, 3, 4], [1, 1, 2, 1, 2, 3, 2, 1], [2, 1, 1, 2, 3, 3, 1, 1]];
console.log(newCanvas);
console.log(floodFill(newCanvas, [2, 2], 9));

