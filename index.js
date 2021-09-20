var sudoku = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9], // row = 1 || col = 2
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,5,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
];
var sudoku2 = [
    [0,1,0,0,0,0,0,3,2],
    [0,0,3,0,0,0,0,0,0], // row = 1 || col = 2
    [0,0,2,0,4,0,0,0,5],
    [9,0,0,1,0,0,0,0,0],
    [0,0,0,2,5,3,0,0,0],
    [1,0,7,4,0,0,0,0,0],
    [0,0,0,0,0,5,4,0,0],
    [8,6,0,0,0,0,7,0,0],
    [0,0,0,0,6,0,0,1,0]
];

inSudoku = (arr) => {
    for(let d = 0; d < 9 ; d++){
        if(d % 3 == 0 && d != 0 ){
            console.log("- - - - - - - - - - -");
        }
        let tam = "";
        for(c = 0 ; c < 9; c++){
            if(c % 3 == 0 && c != 0){
                tam = tam + "| "
                tam = tam + `${arr[d][c]} `;
            }else if(c == 8){
                tam = tam + `${arr[d][c]}`;
                console.log(tam);
            }else {
                tam = tam + `${arr[d][c]} `;
            };
        };
    };
}

// searchClearCell = (arr) => {
//     for(let i = 0; i < 9 ; i++){
//         for(let j = 0; j < 9; j++){
//             if(arr[i][j] == 0){
//                 console.log( `[${i} ${j}]`)
//             }
//         }
//     }
// }

checkValid = (arr, value, row, col) => {
    for(let i = 0 ; i < 9 ; i++){
        if(arr[row][i] == value && i != col){
            return false;
        }
    }
    for(let j = 0; j < 9; j++){
        if(arr[j][col] == value && j != row){
            return false;
        }
    }
    let tempRow = row - row % 3;
    let tempCol = col - col % 3;
    for(let i = 0; i < 3 ; i++){
        for(let j = 0; j < 3 ; j++){
            if(arr[i + tempRow][j + tempCol] == value && i+tempRow != row && j+tempCol != col){
                return false;
            }
        }
    }
    return true;
}

// checkSudoku = (sudoku) => {
//     for(let i = 0; i < 9 ; i++){
//         for(let j = 0 ; j < 9; j++){
//             if(!checkValid(sudoku, sudoku[i][j], i, j )){ // neu o do sai
//                 return false
//             }
//         }
//     }
//     return true
// }

solve = () => {
    for(let i = 0 ; i < 9 ; i++){
        for(let j = 0; j < 9; j++){
            if(sudoku2[i][j] == 0){
                for(let k = 1; k <= 9; k++){
                    if(checkValid(sudoku2, k , i, j )){
                        sudoku2[i][j] = k;
                        solve();
                        sudoku2[i][j] = 0;
                    }
                }
                return; 
            }
        }
    }
    inSudoku(sudoku2);
}
solve()