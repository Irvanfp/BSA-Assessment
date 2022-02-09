let diagonalArray = [
    [11,2,4,2],
    [4,5,6,2],
    [10,8,12,2],
    [1,1,1,1]
    ]
  
    
  let pointA=0
  let pointB=0
  
  for(i=0;i<diagonalArray.length;i++){
  pointA +=diagonalArray[i][diagonalArray.length-i-1]
  pointB +=diagonalArray[i][i]
  }
  
  console.log(pointA+pointB)