let lenArray, transformNum, inputedStr, outputedStr;
let array = [];

function showArray() {                
    
    let inputNum = $("#inputForm").val();
    let nums = inputNum.split(" ");
    
    lenArray = parseInt(nums[0]);
    transformNum = parseInt(nums[1]);        
    inputedStr = "Inputed Array: ";
    outputedStr = "Transformed Array: ";
    
    for (let i = 1 ; i <= lenArray ; i++) {
        inputedStr += i + " "; 
        array.push(i);       
    }    
    document.getElementById("inputed").innerHTML = inputedStr;

    console.log(array);
    
    for (let i = 0; i < transformNum ; i++) {
        let theRemovedElement = array.shift();
        array.push(theRemovedElement);
        console.log(theRemovedElement, array);
    }

    for (let i = 0 ; i < lenArray ; i++) {
        outputedStr += array[i] + " ";
    }
    document.getElementById("outputed").innerHTML = outputedStr;

}

$("#btn").click(function () {
    showArray();
});

$("#btn2").click(function () {
    window.location.reload();
});