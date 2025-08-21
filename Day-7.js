function trapWater(height) 
{
    let n = height.length;
    let water = 0;

    for (let i = 0; i < n; i++) 
    {
        let leftMax = 0;
        for (let j = 0; j <= i; j++) 
        {
            leftMax = Math.max(leftMax, height[j]);
        }

        let rightMax = 0;
        for (let j = i; j < n; j++) 
        {
            rightMax = Math.max(rightMax, height[j]);
        }

        water += Math.min(leftMax, rightMax) - height[i];
    }

    return water;
}

console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trapWater([4,2,0,3,2,5]));
console.log(trapWater([1,1,1]));
console.log(trapWater([5]));
console.log(trapWater([2,0,2]));
console.log(trapWater([0,0,0,0]));
console.log(trapWater([1,2,3,4,5]));
console.log(trapWater([5,4,3,2,1]));
