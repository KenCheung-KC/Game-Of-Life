const startGeneration = (cells, setCells) => {
    const updatedCells = [...cells]
    console.log("Game start!");
    console.log('cells: ', cells)
    // updatedCells[0][0].alive = !updatedCells[0][0].alive
    // setCells(updatedCells)

    // 1. loop through all cells
    // 2. check the condition against each cell
    // 3. change its state (alive/dead)
    for(let i=0; i<=updatedCells.length-1; i++) {
        for(let j=0; j<=updatedCells[i].length-1; j++) {
            // console.log('i: ', i, ' j: ', j)
            if(i===0 || i===updatedCells.length-1 || j===0 || j===updatedCells[i].length-1) {
                updatedCells[i][j].alive = false
                continue;
            }
            let neighbours = 0
            for(let k=-1; k<2; k++) {
                for(let l=-1; l<2; l++) {
                    if(k===0 && l===0) {
                        continue;
                    }
                    console.log('count i: ', i+k, ', count j: ', j+l)
                    if(cells[i+k][j+l].alive === true) {
                        neighbours++;
                    }
                }
            }
            console.log('i: ', i, ' j: ', j, ' neighbours: ', neighbours)
            // neighbours > 0 && console.log('neighbours: ', neighbours)
            if(cells[i][j].alive === true && neighbours < 2) {
                updatedCells[i][j].alive = false
                console.log('a')
            }
            if(cells[i][j].alive === true && (neighbours === 2 || neighbours === 3)) {
                updatedCells[i][j].alive = true
                console.log('b')
            }
            if(cells[i][j].alive === true && neighbours > 3) {
                updatedCells[i][j].alive = false
                console.log('c')
            }
            if(cells[i][j].alive === false && neighbours === 3) {
                updatedCells[i][j].alive = true
                console.log('d')
            }
        }
    }
    console.log('after game logic: ', updatedCells)
    setCells(updatedCells)
}

export default startGeneration;