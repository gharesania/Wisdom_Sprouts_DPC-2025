function mergeArrays(arr1, arr2) 
{
    let m = arr1.length;
    let n = arr2.length;

    let i = m - 1;
    let j = 0;

    while (i >= 0 && j < n) 
    {
        if (arr1[i] > arr2[j]) 
        {
            [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
        }
        i--;
        j++;
    }

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    return [arr1, arr2];
}

// Test Case 1:
let [a1, a2] = mergeArrays([1, 3, 5], [2, 4, 6]);
console.log(a1, a2);

// Test Case 2:
[a1, a2] = mergeArrays([10, 12, 14], [1, 3, 5]);
console.log(a1, a2);

// Test Case 3:
[a1, a2] = mergeArrays([2, 3, 8], [4, 6, 10]);
console.log(a1, a2);

// Test Case 4:
[a1, a2] = mergeArrays([1], [2]);
console.log(a1, a2);
