
         let s="madam";
        // rev="";
        // for(i=s.length-1;i>=0;i--){
        //     rev+=i;
        // }
        // if(rev==s){
        //     console.log("palindrome");
            
        // }else{
        //     console.log("not palindrome");
            
        // }
r=s.split("").reverse().join("");
palin=(r==s)?"pallindrome":"not pallindrome";
console.log(palin);

// r=s.split("")
// rev=r.reverse()
// jo=rev.join("");
// palin=(jo==s)?"pallindrome":"not pallindrome";
// console.log(palin);


// let a=[1,6,4,8,10];
// b=Math.min(...a);
// console.log(b);
    