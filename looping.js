/**
 * SOAL 1
 * 
 * Faktor merupakan deretan angka yang membentuk suatu angka tertentu.
 * 
 * var num = 10;
 * 
 * Results
 * 1,2,5,10
 */



/**
 * SOAL 2
 * 
 * Print Segitiga
 * 
 * var num = 5;
 * 
 * Result:
 * #
 * #X
 * #X#
 * #X#X
 * #X#X#
 */

var num = 5;
var temp = '';
var chara1 = "#"
var chara2 = "X"

for (var i = 1; i < num; i++) {
    for (var j = 1; j <= i; j++) {
        temp += chara1
    }

    for ( var i = 2; < num; i++){
        for (var j = 2; j <= i; j++)
        temp += chara2
    }
    console.log(temp)
    temp = ""
}

/**
 * SOAL 3
 * Print Sebuah Kotak
 * 
 * var input = 5;
 * 
 * //Result 
 * #####
 * #   #
 * #   #
 * #   #
 * #####
 */

