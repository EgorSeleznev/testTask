const arr = [[1, 2, 3], [3, 2, 1, 6, 4, 5, 8], [1, 9, 4]];


// 1 вариант решения
for (let i = 0; i < arr.length; i++) {
    arr[i].sort();
}


// 2 вариант решения 
arr.map(item => item.sort());
arr.forEach(item => item.sort());

console.log(arr);