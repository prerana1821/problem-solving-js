// let size = 8;
function chessBoard(size) {
    for (i = 1; i <= size; i++) {
        var str = '';
        for (j = 1; j <= size; j++) {
            // str = str + "# ";
            if ((i + j) % 2 == 0) {
                str = str + " ";
            } else {
                str = str + "# ";
            }
        }
        console.log(str);
        str = str + '\n';
    }
}

chessBoard(8);