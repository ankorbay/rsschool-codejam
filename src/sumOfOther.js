function sumOfOther(array){
    const newArr = [];
    let sumOfAll = 0;
    const len = array.length;
    for (let i = 0; i < len; i++){
        sumOfAll+=array[i];  
    }
    for (let i = 0; i < len; i++){
        newArr[i]=sumOfAll-array[i];
    }
    return newArr;
}