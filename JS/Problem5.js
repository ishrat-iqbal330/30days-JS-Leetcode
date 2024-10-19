let map = function(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i], i);
    }
    return newArray;
};

// Example usage:
const arr = [1, 2, 3, 4];
const fn = (value, index) => value * index;
const result = map(arr, fn);
console.log(result);
