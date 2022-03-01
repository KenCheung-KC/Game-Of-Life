import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Row from './Row';
import Button from './Button'
import startGeneration from '../gameLogic'

const Wrapper = styled.div`
    background: red;
    height: 650px;
    width: 450px;
    margin: 50px auto;
    padding: 10px;
`

class Cell {
    constructor(id){
        this.id = id
        this.alive = false
    }

    switchStatus() {
        this.alive = !this.alive
    }
}

const intializeCells = (numberOfRow, numberOfColumn) => {
    var cells = []
    for(let i=0; i<numberOfRow; i++) {
        const row = []
        for(let j=0; j<numberOfColumn; j++){
            const cell = new Cell(i*numberOfRow + j)
            row.push(cell)
        }
        cells.push(row)
    }

    return cells
}

const GameBoard = (props) => {
    var numberOfRow = 5
    var numberOfColumn = 5
    const [cells, setCells] = useState(intializeCells(numberOfRow, numberOfColumn))
    // console.log('game board cells: ', cells)

    const updateCellStatus = (id) => {
        const updatedCells = [...cells]
        updatedCells.forEach(row => {
            row.forEach(col => {
                if(col.id === id) {
                    col.switchStatus()
                }
            })
        })
        // console.log('updated cells: ', updatedCells)
        setCells(updatedCells)
        console.log('asdasd: ', cells)
    }
    
    return (
        <Wrapper>
            {console.log('aaabbb: ', cells)}
            {cells.map((cellInRow, index) => {
                return <Row key={`row${index}`} cellInRow={cellInRow} rowNumber={index} updateCellStatus={updateCellStatus} />
            })}
            <Button onClickAction={() => startGeneration(cells, setCells)}/>
            {/* <Button onClickAction={startGeneration(cells)}/> */}
        </Wrapper>
    )
}


export default GameBoard