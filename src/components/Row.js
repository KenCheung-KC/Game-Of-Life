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

const Row = (props) => {
    const { updateCellStatus, cellInRow, rowNumber } = props

    return (
        <Wrapper>
            {cellInRow.map((cellInCol, index) => {
                return <Cell key={10*rowNumber+index} cell={cellInCol} rowNumber={rowNumber} colNumber={index} updateCellStatus={updateCellStatus} />
            })}
        </Wrapper>
    )
}

export default Row