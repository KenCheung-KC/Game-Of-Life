import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Row from './Row';
import Button from './Button'
import Dropdown from './Dropdown_Menu'
import startGeneration from '../gameLogic'
import { copyArray } from '../gameLogic';

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

    // switchStatus() {
    //     this.alive = !this.alive
    // }
}

const intializeCells = (numberOfRow, numberOfColumn) => {
    var cells = []
    for(let i=0; i<numberOfRow; i++) {
        const row = []
        for(let j=0; j<numberOfColumn; j++){
            // const cell = new Cell(i*numberOfRow + j)
            const cell = {
                id: i*numberOfRow + j,
                alive: false
            }
            row.push(cell)
        }
        cells.push(row)
    }

    return cells
}

const GameBoard = (props) => {
    var numberOfRow = 20
    var numberOfColumn = 20
    const initialCells = intializeCells(numberOfRow, numberOfColumn)
    const [cells, setCells] = useState(initialCells)
    const [intervalId, setIntervalId] = useState(0)
    const [isRunning, setIsRunnning] = useState(false)
    // console.log('game board cells: ', cells)

    const updateCellStatus = (id) => {
        const updatedCells = [...cells]
        updatedCells.forEach(row => {
            row.forEach(col => {
                if(col.id === id) {
                    // col.switchStatus()
                    col.alive = !col.alive
                }
            })
        })
        console.log('updated cells: ', updatedCells)
        setCells(updatedCells)
    }
    
    // useEffect(() => {
    //     console.log('use effect cells: ', cells)
    // }, [cells])

    const handleClick = () => {
        setIsRunnning(prevState => !prevState)
        if(intervalId) {
            clearInterval(intervalId)
            setIntervalId(0)
            return
        }
        const newIntervalId = setInterval(() => {
            startGeneration(cells, setCells)
        }, 100)
        setIntervalId(newIntervalId)
    }

    const generateRandomCells = () => {
        setCells(prevCells => {
            const updatedCells = copyArray(prevCells)
            for(let i=0; i<prevCells.length; i++) {
                for(let j=0; j<prevCells[i].length; j++) {
                    const randomNumber = Math.floor(Math.random()*2 + 1)
                    if(randomNumber%2 === 0) {
                        updatedCells[i][j].alive = true
                    } else {
                        updatedCells[i][j].alive = false
                    }
                }
            }
            return updatedCells
        })
    }

    const clearCells = () => {
        setCells(initialCells)
    }

    return (
        <Wrapper>
            {cells.map((cellInRow, index) => {
                return <Row key={`row${index}`} cellInRow={cellInRow} rowNumber={index} updateCellStatus={updateCellStatus} />
            })}
            <Button onClickAction={handleClick} buttonText={isRunning ? 'Stop' : 'Start'} />
            <Button onClickAction={generateRandomCells} buttonText={'Random'} />
            <Button onClickAction={clearCells} buttonText={'Clear'} />
            {/* <Dropdown /> */}
            {/* <Button onClickAction={() => startGeneration(cells, setCells)} buttonText={'Start'} /> */}
            {/* <Button onClickAction={() => clearInterval()} buttonText={'Stop'}/> */}
        </Wrapper>
    )
}


export default GameBoard