function findSubarray(arr) 
{
    let n = arr.length;
    let result = [];

    for (let i = 0; i < n; i++) 
    {
        let sum = 0;
        for (let j = i; j < n; j++) 
        {
            sum += arr[j];
            if (sum === 0) 
            {
                result.push([i, j]);
            }
        }
    }
    return result;
}

console.log(findSubarray([4, -1, -3, 1, 2, -1]));

console.log(findSubarray([1, 2, 3, 4]));

console.log(findSubarray([0, 0, 0]));

console.log(findSubarray([-3, 1, 2, -3, 4, 0]));

console.log(findSubarray([1, -1, 2, -2, 3, -3]));
