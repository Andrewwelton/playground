/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var newArray = [];
    for(var i = 0; i < A.length; i++) {
        if(A[i] % 2) {
            newArray.push(A[i]);
        } else {
            newArray.unshift(A[i]);
        }
    }
    
    return newArray;
};