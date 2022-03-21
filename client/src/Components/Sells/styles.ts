import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7rem 0;
`

export const ItemsContainer = styled.div`    
    display: grid;
    background-color: var(--shape);
    border-radius: 1rem;
    justify-items: center;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    column-gap: 2rem;
    row-gap: 4rem;
    margin: 0 8rem;
    padding: 4rem;

    @media (max-width: 1200px) {
        padding: 1rem;
    }
`

export const ItemButton = styled.button`
    border: none;
    background-color: transparent;
    height: 350px;
    width: 300px;
    border-radius: 1rem;
    color: var(--text-body);
    &:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    h2 {
        padding: 0.5rem;
    }
    h4 {
        font-weight: 500;
    }
`