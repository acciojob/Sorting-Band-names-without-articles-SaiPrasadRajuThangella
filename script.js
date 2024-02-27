let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let regex = /\bthe\b|\ban\b|\ba\b/gi
let articlelessarray =[];
let mp={};
for(let i in arr){
    let articlelessitem=arr[i].replace(regex,"").trim();
    articlelessarray.push(articlelessitem)
    mp[articlelessitem]=arr[i];
}

articlelessarray.sort();

let ans=[]
for(let j=0;j<articlelessarray.length;j++){
    ans.push(mp[articlelessarray[j]]);
}

console.log(ans);
