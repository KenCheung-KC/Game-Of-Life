import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 20px;
    width: 20px;
    margin: 1px;
`

const Button = (props) => {
    const {onClickAction} = props

    return (
        <Wrapper>
            <button onClick={onClickAction}>Start</button>
        </Wrapper>
    )
}

export default Button