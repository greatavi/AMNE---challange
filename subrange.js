/*validating input to the given constraints*/
function validations(input, n, k) {
    if ((input.length === 0) || (input.length > 200000)) {
        throw "Error ! input length not not within constraints " + input.length;
    }
    else if (n > 200000) {
        throw "Error ! n value is out of range ";
    }
    else if (input.length < n) {
        throw "Error ! input length is less than n ";
    }
    else if ((k.length > input) || (k.length < 1) || (k.length > 200000)) {
        throw "Error ! check window length";
    }
    else {
        return true;
    }
}
/*Calculates the subrange*/
function subRange(input, n, k) {
    var firstWindowStart = 0;
    var lastWindowStart = n - k;
    var arr = [];
    if (input.length === 1) {
        return [0];
    }
    if (validations(input, n, k)) {
        for (var i = firstWindowStart; i <= lastWindowStart; i++) {
            if (input[i] > 1000000) {
                throw "Error ! The input value " + input[i] + " is greater than 1,000,000";
            }
            else {
                var windowResult = processWindow(i, i + k, input);
                arr.push(processWindow(i, i + k, input));
            }
        }
        return arr;
    }
    else {
        return false;
    }
}
/*Calculates possible number of sub ranges for a given size
 * eg: a sequence of size 3 [1,2,3] has 3 possible sub ranges
 * [1,2] , [1,2,3] , [2,3]
 * */
function calculateSubRangeCount(count) {
    return (count * (count + 1)) / 2;
}
/*processes the windows from the index - start to end*/
function processWindow(start, end, input) {
    var increasing = 0;
    var decreasing = 0;
    var increasingResult = 0;
    var decreasingResult = 0;
    var finalResult;
    for (i = start; i < end - 1; i++) {
        if (input[i] < input[i + 1]) {
            increasing = increasing + 1;
            decreasingResult = decreasingResult + calculateSubRangeCount(decreasing);
            decreasing = 0;
        }
        else if (input[i] === input[i + 1]) {
            continue;
        }
        else {
            decreasing = decreasing + 1;
            increasingResult = increasingResult + calculateSubRangeCount(increasing);
            increasing = 0;
        }
    }
    increasingResult += calculateSubRangeCount(increasing);
    decreasingResult += calculateSubRangeCount(decreasing);
    finalResult = (increasingResult) - (decreasingResult);
    return finalResult;
}