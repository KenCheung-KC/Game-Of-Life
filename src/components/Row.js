import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';

const Wrapper = styled.div`
    height: 20px;
    width: 90%;
    margin: 2px auto;
    background: green;
    display: flex;
`

// const Cell = styled.div`
//     background: ${props => props.alive ? 'blue' : 'black'};
//     height: 20px;
//     width: 20px;
//     margin: 1px;
// `

const Row = (props) => {
    const { updateCellStatus, cellInRow, rowNumber } = props
    // console.log('row props: ', props)
    console.log('cellInRow: ', cellInRow)
    // return (
    //     <div></div>
    // )
    return (
        <Wrapper>
            {cellInRow.map((cellInCol, index) => {
                return <Cell key={`row${rowNumber}col${index}`} cell={cellInCol} rowNumber={rowNumber} colNumber={index} updateCellStatus={updateCellStatus} />
            })}
        </Wrapper>
    )
}

export default Row