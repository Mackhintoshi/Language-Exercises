function createMultiplicationTable(min,max){
    //loop for each rows
    let number_of_columns = (max-min)+ 2;
    for(let i = min;i <= max;i++){
        let row = "";
        //loop for each cell in row
        for(let j = min; j <= number_of_columns; j++){
            //the cell value increments by multiplying itself by the current value of i
            row = row + "|"+(j*i);
        }
        console.log(row);
    }
}

