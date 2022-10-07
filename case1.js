/* 
    Write a function that takes an object with two 
    properties and a string as arguments
    It should return the value of the property with 
    key equal to the value of the string
*/

function getKeyContent(obj, key){

    if(key in obj){
        return obj[key];
    }

    return false
}

console.log(getKeyContent({  continent: 'Asia',  country: 'Japan'}, 'continent'));

/*
    The first step in function checkKeyContent is check if there is the key in obj;
    If obj has this key the function return key's content;
    If obj does not have this key the funtion return false. So if the function's return is used to initiate a process and 
    the return is false the process does not happens
*/