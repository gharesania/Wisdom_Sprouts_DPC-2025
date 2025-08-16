function missingNumber(arr) 
{
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let num of arr) 
    {
        actualSum += num;
    }
    return expectedSum - actualSum;
}

// Test Case 1:
console.log(missingNumber([1, 2, 4, 5]));

// Test Case 2:
console.log(missingNumber([2, 3, 4, 5]));

// Test Case 3:
console.log(missingNumber([1, 2, 3, 4]));

// Test Case 4:
console.log(missingNumber([1]));
