let nums = [10, 20, 30, 40, 5];
function getMin(nums) {
    let min = nums.reduce((res, el) => {
        if (res < el) {
            return res;
        } else {
            return el;
        }
    })

    return min;
}

console.log(getMin(nums));