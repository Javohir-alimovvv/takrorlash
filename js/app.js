// 1#
// {
//     51.
//     array ichidagi o’rtadagi sonni topadigan function tuzing 
//     Input: arr = [1, 2, 3, 4, 5] middleNumber = 3
//     Input arr = [1, 2, 3, 4] middleNumber = 2.5 o’rtadagi 2 ta sonning o’rta arifmetigi
// }

// function findMiddleNumber(arr) {
//     const length = arr.length;
//     if (length % 2 !== 0) {
//         return arr[Math.floor(length / 2)];
//     } else {
//         const mid1 = arr[length / 2 - 1];
//         const mid2 = arr[length / 2];
//         return (mid1 + mid2) / 2;
//     }
// }

// console.log(findMiddleNumber([1, 2, 6, 4, 5]));
// console.log(findMiddleNumber([1, 1, 5, 4]));   



// 1#
// {
//     52.
//     Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
//     let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
//     ];
// }


// let products = [
//     {id: 6, name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];

// products = products.filter(product => product.id !== 4)

// console.log(products);



// 3#
// {
// 53.
// Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring
// }

// {
//     function isAlphabetic(str) {
//         return /^[a-zA-Z]+$/.test(str);
//     }

//     // Misollar
//     console.log(isAlphabetic("HelloWorld"));
//     console.log(isAlphabetic("Hello123"));
//     console.log(isAlphabetic("HelloGuys"));

// }
// /^[a-zA-Z]+$/.test(str) formula


// 4#
// {
//     54.
//     Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
//     Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
//     Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}
// }


// function countWords(arr) {
//     return arr.reduce((acc, word) => {
//         acc[word] = (acc[word] || 0) + 1;
//         return acc;
//     }, {});
// }

// const animals = ['dog', 'dilshod', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'dilshod', 'rabbit'];
// const wordCount = countWords(animals);
// console.log(wordCount);


// 5#
// {
//     55.
//     String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map)
//     Input: "Hello world"
//     Outpu: [3, 9, 12]
// }

// function getWordsLengthArray(str) {
//     return str.split(" ").map(word => word.length);
// }

// const input = "Hello world";
// const wordLengths = getWordsLengthArray(input);
// console.log(wordLengths);



// 6#
// {
//     56.
//     Stringni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
//     Input: "salom dunyo"
//     Output: true
// }

// function hasSpace(str) {
//     return str.split("").some(text => text === " ");
// }

// const strTwo = "salom dunyo";
// const resalt = hasSpace(strTwo);
// console.log(resalt);



// 7#
// {
//     57.
//     Objectning kalit va qiymatlarining string ko'rinishidagi 
//     yig'indisidan iborat array qaytaring. (Object.entries, map, join)
//     Input: {a: 2, b: 5, c: 7}
//     Output: ['a2', 'b5', 'c7']
// }

// function keyArray(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value);
// }

// const input = {a: 2, b: 5, c: 7};
// const result = keyArray(input);
// console.log(result);



// 8#
// {
//     58.
//     Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham 
//     hisoblang. (reduce) 80 ≤ protcent exam dan o’tgan bo’ladi
//     const pupils = [
//     {name: "Elbek", protcent: 95,},
//     {name: "Zafar", protcent: 78,},
//     {name: "Aziz", protcent: 83,},
//     {name: "Jasur", protcent: 88,},
//     {name: "Bobur", protcent: 66,},
//     {name: "Kamron", protcent: 75,},
//     ];
// }

// ISHLOLMADIM


// 9#
// {
//     59.
//     var findMedianSortedArrays = function(nums1, nums2) {};
//     nums1 = [1,2], nums2 = [3,4]
//     result: 2.5
//     arraylar qushilib va sort lanib urtasidagi son topilsin
// }

// var findMedianSortedArrays = function (nums1, nums2) {
//     const mergedArray = nums1.concat(nums2);

//     mergedArray.sort((a, b) => a - b);

//     const length = mergedArray.length;
//     if (length % 2 === 0) {
//         return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
//     } else {
//         return mergedArray[Math.floor(length / 2)];
//     }
// };

// nums1 = [1, 2];
// nums2 = [3, 4];
// console.log(findMedianSortedArrays(nums1, nums2));


// 10#
// {
//     60.
//     var searchMatrix = function(matrix, target) {};
//     Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
//     Output: true
//     Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
//     Output: false
// }

// var searchMatrix = function (matrix, target) {
//     let resalt = false;
//     matrix.forEach((arr) => {
//         if (arr.includes(target)) {
//             resalt = true
//         }
//     })
//     return resalt
// }
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));















