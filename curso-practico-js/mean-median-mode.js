//mean

const getMean = (arr) => arr.reduce((a, b) => a + b) / arr.length;

// median
const getMedian = (list) => {
    list.sort((a, b) => a - b);
    const isEven = () => list.length % 2 === 0;

    if (isEven()) {
        const middleIndex = list.length / 2;
        const secondMiddleIndex = middleIndex - 1;
        const values = [list[middleIndex], list[secondMiddleIndex]];
        return getMean(values);
    }
    if (!isEven()) {
        const middleValue = Math.floor(list.length / 2);
        return list[middleValue];
    }
};
//mode
const getMode = (array) => {
    const sortedArray = array.sort((a, b) => a - b);
    const arrayMode = {};
    sortedArray.map(function(e) {
        if (arrayMode[e]) {
            arrayMode[e]++;
        } else {
            arrayMode[e] = 1;
        }
    });
    console.log(arrayMode);
    console.log(sortedArray);
    const listArray = Object.entries(arrayMode).sort((a, b) => a[1] - b[1]);
    console.log(listArray);
    const mode = listArray[listArray.length - 1];
    console.log(mode);
    console.log(listArray.length);
};