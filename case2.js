/*
    Write a function that takes two objects as arguments
    Unfortunately, the property 'b' in the second object has the wrong key
    It should be named 'd' instead
    Merge both objects and correct the wrong property name
    Return the resulting object
    It should have the properties 'a', 'b', 'c', 'd', and 'e'
function
*/

function concatObjects(obj1, obj2){
    
    if(obj2.b){
        obj2.d = obj2.b;
        delete obj2.b;
    }

    return Object.assign(obj1, obj2);
}

console.log(concatObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));