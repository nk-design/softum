let myArray = [1, 2, 3, 0]; //Array of integers	
let maxproduct = 0;	//variable where I will save the result of production
let i = 0;	//just var for the loop
for (i=0;i<myArray.length;i++){ //loop itself
	let product = myArray[i] * myArray[i+1];	//production itself
	if (product > maxproduct) {	//comparison of old and new result of production,biggest one will be written in the var
		maxproduct = product; //biggest one is written in var here
	}
}
document.getElementById("result1").innerHTML=("adjacentElementsProduct(myArray) = " + maxproduct); //outputs the result

    
function xoReferee(data){

    //Checking rows
    i=0;
    while (i<3){
        line=data[i];
        if (line=="XXX"){return "X"};
        if (line=="OOO"){return "O"};
        i+=1;
    }

    //Checking collumns
    j=0;
    while (j<3){
        column= data[0][j] +  data[1][j] +  data[2][j];
        if (column=="XXX"){return "X"};
        if (column=="OOO"){return "O"};
        j+=1;
	}

    // Checking diagonals
    d1=data[0][0] +  data[1][1] +  data[2][2];
    d2=data[2][0] +  data[1][1] +  data[0][2];
    console.log("D1: " + d1 + " - D2: " + d2);
    diagonals=[d1,d2];
    k=0;

    //Checking the winner
    while (k<2){
        diagonal=diagonals[k];
        if (diagonal=="XXX"){return "X"};
        if (diagonal=="OOO"){return "O"};
        k+=1;
	}
    return "D";
 }

 document.getElementById("result2").innerHTML="The winner is -" + xoReferee(["XXX","XOX","OOX"]); //outputs the result
