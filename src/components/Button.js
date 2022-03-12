import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 20px;
    width: 20px;
    margin: 1px;
`

const Button = (props) => {
    const {onClickAction, buttonText} = props

    return (
        <Wrapper>
            <button onClick={onClickAction}>{buttonText}</button>
        </Wrapper>
    )
}

export default Button