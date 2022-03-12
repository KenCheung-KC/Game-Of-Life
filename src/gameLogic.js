export const copyArray = (cells) => {
    let copyArr = []
    for(let i=0; i<cells.length; i++) {
        const row = []
        for(let j=0; j<cells[i].length; j++) {
            const copiedCell = JSON.parse(JSON.stringify(cells[i][j]))
            row.push(copiedCell)
        }
        copyArr.push(row)
    }

    return copyArr
}

const calculateNeighbour = (cells, position) => {
    const { i, j } = position
    let neighbours = 0;
    for(let k=-1; k<2; k++) {
        for(let l=-1; l<2; l++) {
            if(k===0 && l===0) {
                continue;
            }
            if(cells[i+k][j+l].alive === true) {
                neighbours++;
            }
        }
    }

    return neighbours
}

const startGeneration = (cells, setCells) => {
    // const updatedCells = [...cells] // clone the array, this won't work, because the is an array of object. this only work for array of primitive type, e.g. [1, 2, 3]

    // 1. loop through all cells
    // 2. check the condition against each cell
    // 3. change its state (alive/dead)
    setCells(prevCells => {
        const updatedCells = copyArray(prevCells)
        // console.log("Game start!");
        // console.log('prevCells: ', prevCells)
        // console.log('updated cells: ', updatedCells)
        // 1. loop through all cells
        // 2. check the condition against each cell
        // 3. change its state (alive/dead)

        for(let i=0; i<=prevCells.length-1; i++) {
            for(let j=0; j<=prevCells[i].length-1; j++) {
                // ignore the cells at the edges
                if(i===0 || i===prevCells.length-1 || j===0 || j===prevCells[i].length-1) {
                    updatedCells[i][j].alive = false
                    continue;
                }
                const neighbours = calculateNeighbour(prevCells, { i, j })
                if(prevCells[i][j].alive === true && (neighbours < 2 || neighbours > 3)) {
                    updatedCells[i][j].alive = false
                }
                // if(prevCells[i][j].alive === true && (neighbours === 2 || neighbours === 3)) {
                //     updatedCells[i][j].alive = true
                // }
                // if(prevCells[i][j].alive === true && neighbours > 3) {
                //     updatedCells[i][j].alive = false
                // }
                if(prevCells[i][j].alive === false && neighbours === 3) {
                    updatedCells[i][j].alive = true
                }
            }
        }
        return updatedCells
    })
}

export default startGeneration;