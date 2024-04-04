
// function countFactors(A) {
//   let count = 0;
//   for (let i = 1; i * i <= A; i++) {
//     if (A % i == 0) {
//       if (i * i == A) count += 1;
//       else count += 2;
//     }
//   }
//   return count;
// }

// // let a = countFactors(10);
// console.log(countFactors(10));

// document.getElementById("app").innerHTML = a;

// function reversearry(A) {
//   let n = A.length;
//   let a = [];
//   for (let i = n - 1; i >= 0; i--) {
//     a.push(A[i]);
//   }

//   return a;
// }

// console.log(reversearry([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function isPrime(A) {
//   if (A <= 1) return false; // 1 is not a prime number

//   for (let i = 2; i * i <= A; i++) {
//     if (A % i === 0) {
//       return 0; // A is divisible by i, so it's not a prime number
//     }
//   }

//   return 1; // If no divisor found, A is a prime number
// }

// console.log(isPrime(5));

// let aryy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let s = 2;
// let e = 6;

// reversearray(aryy, s, e);

// function reversearray(ar, s, e) {
//   let p1 = s;
//   let p2 = e;

//   while (p1 < p2) {
//     let t = ar[p1];
//     ar[p1] = ar[p2];
//     ar[p2] = t;
//     p1 = p1 + 1;
//     p2 = p2 - 1;
//   }
//   // console.log(ar);
// }

// function rotatektym(arr, k) {
//   let n = arr.length;

//   reversearray(arr, 0, n - 1);
//   reversearray(arr, 0, k - 1);
// //   reversearray(arr, k, n - 1);
// //   console.log(arr);
// // }

// // let arr = ["a1", "a2", "a3", "a4", "a5"];

// // console.log(arr.at(-2));

// // let ma = arr.map((a, i) => {
// //   console.log(a, i);
// // });

// // let k = 3;

// // data types

// // js - "asdsadas";

// var ch = "adgagagfg";

// var n = ch.length;

// var ac = 0;

// var gc = 0;

// for (var i = n - 1; i >= 0; i--) {
//   if (ch[i] == "g") {
//     gc = gc + 1;
//   } else if (ch[i] == "a") {
//     ac = ac + gc;
//   }
// }

// console.log(ac);

// for (var i = 0; i < n; i++) {
//   if (ch[i] == "a") {
//     for (var j = i + 1; j < n; j++) {
//       if (ch[j] == "g") {
//         ans = ans + 1;
//       }
//     }
//   }
// }

// console.log(ans);

// let recipientPhone = "9126408190";

// recipientPhone = `91${recipientPhone}`;

// console.log(recipientPhone, "hgfdghjn");

// var arr = [4, 2, 3, 9, 7, 10, 1, 2, 5, 78, 9, 346, 678];

// var n = arr.length;

// var lead = 1;

// var max = arr[0];

// for (var i = 1; i < n; i++) {
//   if (arr[i] > max) {
//     lead = lead + 1;
//     max = arr[i];
//   }
// }
// console.log(lead);
// for (var i = 1; i < n; i++) {
//   var max = arr[0];
//   for (var j = 0; j < i; j++) {
//     if (max < arr[j]) {
//       max = arr[j];
//     }
//   }
//   if (arr[i] > max) {
//     lead = lead + 1;
//   }
// }

// console.log(lead);

// 10^8

// 10^5

// 10^5 = n
// 10^5^2

// console.log(0.1 + 0.2 == 0.3);
// const serviceability = "NO".toLowerCase() === "yes";

// console.log(serviceability);

// let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
// var q = 6;
// var l = [4, 3, 1, 7, 3, 0];
// var r = [8, 7, 3, 7, 6, 4];

// for (var i = 0; i < q; i++) {
//   var sum = 0;
//   var s = l[i];
//   var e = r[i];
//   for (var j = s; j <= e; j++) {
//     sum = sum + arr[j];
//   }
//   console.log(sum);
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let count = 0;

// for (var i = 0; i <= a.length; i++) {
//   if (a[i] % 2 == 0) {
//     count++;
//   }
// }

// console.log(count);

// let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
// var q = 6;
// var l = [4, 3, 1, 7, 3, 0];
// var r = [8, 7, 3, 7, 6, 4];

// var prefixsum = [];

// for (var i = 1; i <= arr.length; i++) {
//   prefixsum[0] = arr[0];
//   prefixsum[i] = prefixsum[i - 1] + arr[i];
// }

// for (var i = 0; i < q; i++) {
//   var sum = 0;
//   var s = l[i];
//   var e = r[i];
//   if (s == 0) {
//     sum = prefixsum[e];
//   } else {
//     sum = prefixsum[e] - prefixsum[s - 1];
//   }
//   console.log(sum);
// }

// tim - n2

// for (var i = 0; i < q; i++) {
//   var sum = 0;
//   var s = l[i];
//   var e = r[i];
//   for (var j = s; j <= e; j++) {
//     sum = sum + arr[j];
//   }
//   console.log(sum);
// }

// equilibrium index
// giv arr counr no equilibrium index
// let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];

// var prefixsum = [];
// for (var i = 1; i <= arr.length; i++) {
//   prefixsum[0] = arr[0];
//   prefixsum[i] = prefixsum[i - 1] + arr[i];
// }

// py

// arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
// prefixsum = [];

// for (i in range(1, arr.length + 1)) {
//   prefixsum[0] = arr[0];
//   prefixsum[i] = prefixsum[i - 1] + arr[i];
// }

// arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1]
// prefix_sum = [0] * (len(arr) + 1)
// for i in range(1, len(arr) + 1):
//     prefix_sum[i] = prefix_sum[i - 1] + arr[i - 1]

// print(prefix_sum)
// Prefix sum
// 2....eqilibrium index of given array
// equilibrium means sum of left and  sum of rigth should same

// forumula -- sum[0,i-1] left == sum[i+1,n-1]   right
// sum [l,r] = presum[r]-presum[l-1]
// sum [i+1,n-1] = presum[n-1]-presum[i+1-1]

// let arr = [-3, 2, 4, -1];

// var prefix_sum = [];

// prefix_sum[0] = arr[0];

// console.log(prefix_sum);

// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//   var left;
//   if (i == 0) {
//     left = 0;
//   } else {
//     left = prefix_sum[i - 1];
//   }
//   var right = prefix_sum[arr.length - 1] - prefix_sum[i];

//   if (left == right) {
//     count = count + 1;
//   }
// }
// console.log(count, "Sa");

// console.log(prefix_sum);

// n bulbs
// given n bulb and ther initial state each bulb has switch
// if we click switch everyb bulb right side and current should be flipped
//find count how many time we switch

// constraint 10^5

// initial state off fliiped even tymes final stte off
// initial state on  fliiped odd  tymes final stte off

// bulb[i] = 0 is off
// bulb[i] = 1 is on

// var bulbarr = [0, 1, 1, 0, 1, 0];
// var c = 0;

// for (var i = 0; i < bulbarr.length; i++) {
//   if (bulbarr[i] == 1 && c % 2 == 1) {
//     c = c + 1;
//   } else if (bulbarr[i] == 0 && c % 2 == 0) {
//     c = c + 1;
//     bulbarr[i] = 1;
//   }
// }

// console.log(c, bulbarr);

// subarray

// [4, 1, 2, 3, -1, 6, 9, 8, 12];

// 2,3,-1 = yes
// 4,2  = no
// 1,2,6= no
// -1,6,9 = yes
// 8=yes

// var arr = [4, 1, 2, 3, -1, 6, 9, 8, 12];

// var s = 4;
// var e = 7;

// for (var i = s; i <= e; i++) {
//   console.log(arr[i]);
// }
// tc= o(n)

// 2,8,-1,4ssioj

// sub array

// a = 4,2,10,3,12,-2,15
// s=1

// a(1,1) = 2
// a(1,2) = 2,10
// a(1,3) = 2,10,3
// a(1,4) = 2,10,3,12
// a(1,5) = 2,10,3,12,-2
// a(1,6) = 2,10,3,12,-2,15

// a= 4,2,10,3
// 4*4+1/2=10

// s= 0
// a(0,0) =4
// a(0,1) = 4,2
// a(0,2) = 4,2,10
// a(0,3) =,4, 2,10,3
// s=1
// a(1,1) = 2
// a(1,2) = 2,10
// a(1,3) = 2,10,3

// s=2
// a(2,2) = 10
// a(2,3) = 10,3
// s=3
// a(3,3) = 3

// sub count =10

// a= 4,2,10,3

// 4+3+2+1=10

// arr(0,0)

// arr(0,1)
// arr(0,2)
// arr(0,3)....
// arr(0,n-1)

// given an array print all subarray

// 10power2

// var abc = [2, 8, -1, 4];

// for (var i = 0; i < abc.length; i++) {
//   for (var j = i; j < abc.length; j++) {
//     for (var k = i; k <= j; k++) {
//       console.log(abc[k]);
//     }
//   }
// }

// given an array print all subarray sum

// var abc = [2, 8, -1, 4];

// var prefixsum = [];
// for (var i = 1; i <= abc.length; i++) {
//   prefixsum[0] = abc[0];
//   prefixsum[i] = prefixsum[i - 1] + abc[i];
// }

// console.log(prefixsum);

// for (var i = 0; i < abc.length; i++) {
//   for (var j = i; j < abc.length; j++) {
//     if (i == 0) {
//       var sum = prefixsum[j];
//     } else {
//       var sum = prefixsum[j] - prefixsum[i - 1];
//     }
//     console.log(sum);
//   }
// }

// for (var i = 0; i < abc.length; i++) {
//   for (var j = i; j < abc.length; j++) {
//     var sum = 0;
//     for (var k = i; k <= j; k++) {
//       console.log(abc[k]);
//       sum = sum + abc[k];
//     }
//   }
// }

// Apr-one
// GIVEN AN array all Subarry sums starting index 3

// var arr = [3, 8, 4, 7, 9, 4, 3, 2, 10, 6];
// var sum = 0;

// for (var i = 3; i < arr.length; i++) {
//   sum = sum + arr[i];
//   console.log(sum);
// }

// 10power2
// 4thques gc

// given an arr print all sums of subarray sums
// constarin =  10power 3
// var totalsum = 0;
// for (var i = 0; i < arr.length; i++) {
//   var sum = 0;
//   for (var j = i; j < arr.length; j++) {
//     sum = sum + arr[j];
//     totalsum = totalsum + sum;
//     console.log(sum);
//   }
// }
// console.log(totalsum);
// var arr = [3, -2, 4, -1, 2, 6];
// var n = arr.length;

// var totalsum = 0;

// for (var i = 0; i < n; i++) {
//   var count = (i + 1) * (n - i);
//   totalsum = totalsum + count * arr[i];
// }

// console.log(totalsum);

// prefix and subarry

// max subarray
// given array return max subarray sum sum

// var arr = [3,2,-6,8,2,-9,4]
// eg : 8 to 2  =  10 is max subarrar5

// constraint  = 10power5
// eg : 2,4,-1,3 =  8 s is of subarrar5

// idea;
// useing 3 loops n3
// using prefix sum n2
// optimised n2

// var arr = [-3, 6, -2, 4, -5, 2, 4, -6];
// kadenes algorthim

// var sum = 0;
// var max = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (sum < 0) {
//     sum = 0;
//   }

//   sum = sum + arr[i];

//   if (max < sum) {
//     max = sum;
//   }
// }
// console.log(max);

// var arr = [0, 0, 0, 0, 0, 0, 0];
// var q = 5;
// var s = [2, 0, 3, 5, 3];
// var v = [6, -1, 2, 4, 3];

// for (var i = 0; i < q; i++) {
//   var st = s[i];
//   var val = v[i];
//   arr[st] = arr[st] + val;
// }
// console.log(arr, "SASAS");

//  var prefixsum = [];

// for (var i = 1; i < arr.length; i++) {
//   prefixsum[0] = arr[0];
//   prefixsum[i] = prefixsum[i - 1] + arr[i];
// }

// console.log(prefixsum, "SASAS");
// for (var i = 1; i <= arr.length; i++) {
//   arr[0] = arr[0];
//   arr[i] = arr[i - 1] + arr[i];
// }
