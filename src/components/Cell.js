import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    background: ${props => props.alive ? 'blue' : 'black'};
    height: 20px;
    width: 20px;
    margin: 1px;
`

const Cell = (props) => {
    const { cell, updateCellStatus } = props
    const { id, alive } = cell

    return (
        <Wrapper alive={alive} onClick={() => updateCellStatus(id)} />
        
    )
}

export default Cell