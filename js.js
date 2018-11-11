function minArray(arr) {
    if (arr.length == 0) {
        return "Empty";
    }
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

var arr1 = [-4, -3, -7, 3, 4, 9, 6];
var arr2 = [];
var arr3 = [5, 6, 18, -4, -2, -1, 8, 9];
var arr4 = [0, 0, 0, 0, 0];
var min1 = minArray(arr1);
var min2 = minArray(arr2);
var min3 = minArray(arr3);
var min4 = minArray(arr4);
alert("Min value of array 1 is: " + min1);
alert("Min value of array 2 is: " + min2);
alert("Min value of array 3 is: " + min3);
alert("Min value of array 4 is: " + min4);

