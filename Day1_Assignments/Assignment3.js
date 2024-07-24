let arr = [1,2,3,4,5];
console.log("Size of the array : " + arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr.length - i);
}


let n= [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var e=0;
var o=0;
for (let i = 0; i < n.length; i++) {

    if(n[i]%2==0)
    {
        e=e+n[i];
    }
    else{
        o=o+n[i];
    }
}

let eo= [e,o];

for (let i = 0; i < eo.length; i++) {
    console.log(eo[i]);
}

let index=2;
let v=10;
arr.splice(index,0,v);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
