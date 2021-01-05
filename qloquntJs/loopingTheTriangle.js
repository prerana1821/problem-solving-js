function loopATrianle(num) {
    for (i = 1; i <= num; i++) {
        var str = '';
        for (j = 1; j <= i; j++) {
            str = str + "#";
        }
        console.log(str);
    }
}