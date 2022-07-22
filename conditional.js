/** Klasifikasi level untuk karakter dalam sebuah game terdiri dari detail berikut
 * 
 * Interval                Status
 * Lebih dari 100          Expert
 * Antara 70 dan 100       Pro
 * Antara 50 dan 70        Normal
 * Antara 30 dan 50        Basic
 * Kurang dari 30          Beginner
 * 
 * Proses klasifikasi tersebut adalah jika power dari sebuah karakter
 * 75 maka resultnya : "Character is Pro"
 */

// var level = 71;

// if(level > 100){
//     console.log("Expert")
// } else if(level > 70 && level <=100){
//     console.log("Pro")
// } else if(level > 50  && level <=70){
//     console.log("Normal")
// } else if(level > 30 && level <=50){
//     console.log("Basic")
// } else if(level <31 && level >=0){
//     console.log("Beginner")
// } else {
//     console.log("masukkan level antara 0 - 100")
// }

/**
 * Vending maching memberikan minuman input string
 * 
 * Jika minuman kosong, maka tampilkan "Input minuman"
 * Jika minuman diinput "Sweet Tea" , maka tampilkan "You choose Sweet Tea, thanks"
 * Jika minuman diinput "Plain Tea" , maka tampilkan "You choose Plain Tea, thanks"
 * Jika minuman diinput "Boba" , maka tampilkan "You choose Boba, thanks"
 * Jika minuman diinput "Milk Coffee" , maka tampilkan "You choose Milk Coffee, thanks"
 * Jika minuman diinput "Choco Ice" , maka tampilkan "You choose Choco Ice, thanks"
 * Jika minuman diinput salah, tampilkan "minuman is not defined"
 */

// var minuman = "Choco Ice";

// switch (minuman) {
//     case 'Sweet Tea':
//         console.log("You choose Sweet Tea, thanks")
//         break;
//     case 'Plain Tea':
//         console.log("You choose Plain Tea, thanks")
//         break;
//     case 'Boba':
//         console.log("You choose Boba, thanks")
//         break;
//     case 'Milk Coffee':
//         console.log("You choose Milk Coffee, thanks")
//         break;
//     case 'Choco Ice':
//         console.log("You choose Choco Ice, thanks")
//         break;
//     default:
//         if (minuman === "") {
//             console.log("Input minuman")
//         } else {
//             console.log("minuman is undefined")
//         }
//         break;
// }

/**
 * Study Case 3 - Nested Conditional
 * 
 * Pilihan Coupon Code untuk Cash back e-commerce
 * 
 * a. FreeOngkir
 * Jika pembelian lebih dari atau sama dengan 50.000, ada potongan 10%
 * Jika pembelian antara 30.000 dan 50.000, ada potongan 5%
 * Jika pembelian kurang dari 30.000, ada potongan 2.5%
 * 
 * b. Free15%
 * Jika pembelian lebih dari atau sama dengan 30.000, ada potongan 15%
 * Jika pembelian kurang dari 30.000, ada potonga 0%
 * 
 */


//  var pembelian = 30000;
//  var coupon = "Free15%";
 
//  switch (coupon) {
//      case 'FreeOngkir':
//          if (pembelian >= 50000) {
//              var total = pembelian * 0.9
//              console.log("Total pembelian anda Rp " + total)
//          } else if (pembelian >= 30000 && pembelian < 50000) {
//              var total = pembelian * 0.95
//              console.log("Total pembelian anda Rp " + total)
//          } else {
//              var total = pembelian * 0.975
//              console.log("Total pembelian anda Rp " + total)
//          }
//          break;
//      case 'Free15%':
//          if (pembelian >= 30000) {
//              var total = pembelian * 0.85
//              console.log("Total pembelian anda Rp " + total)
//          } else {
//              var total = pembelian * 1
//              console.log("Total pembelian anda Rp " + total)
//              break;
//          }
//  }