function a() {
    arr = [];
    for (var x = 7; x <= arr.length; x += 8) {
        for (var i = 0; i <= 63; i++) {
            if (i % 2 === 0) {
                arr[i] = "";
            } else arr[i] = "#";
        }
        console.log(arr);
    }
    arr[x] = (arr[x] + "\n");
    console.log(arr);
}

function checker() {
    var arr = [];
    for (var i = 0; i < 8; i++) {
        arr[i].push([]);
    }
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++)
            arr[j].push("# ");
    }
    console.log(arr);
}

checker()