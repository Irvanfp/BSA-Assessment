let test1 = "tamat"

let test1Array = "false"


for(i=0;i<(test1.length)/2;i++){
  if(test1[i]==test1[test1.length-i-1]){
    test1Array = "true"
  }
}

console.log(test1Array)
