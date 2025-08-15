function sortArray(arr) 
{
    let count0 = 0, count1 = 0, count2 = 0;

    // Counting occurrences of 0, 1, and 2
    for (let num of arr) 
    {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    // Overwriting array with sorted order
    let index = 0;
    while (count0 > 0) 
    {
        arr[index++] = 0;
        count0--;
    }
    while (count1 > 0) 
    {
        arr[index++] = 1;
        count1--;
    }
    while (count2 > 0) 
    {
        arr[index++] = 2;
        count2--;
    }

    return arr;
}

// Test case 1:
console.log(sortArray([0, 1, 2, 1, 0, 2, 1, 0])); 

// Test case 2:
console.log(sortArray([2, 2, 2, 2]));

// Test case 3:
console.log(sortArray([0, 0, 0, 0]));

// Test case 4:
console.log(sortArray([1, 1, 1, 1])); 

// Test case 5:
console.log(sortArray([2, 0, 1]));

// Test case 6:
console.log(sortArray([]));
