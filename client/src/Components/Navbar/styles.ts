import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 5rem;
    background: var(--purple-dark);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;

    @media (max-width: 600px) {
        height: 7rem;
        padding: 0 1rem;
    }

    label {
        width: 20rem;
        height:2.5rem;
        display: flex;
        align-items: center;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 1.25rem;
        padding: 0rem 1rem;

        @media (max-width: 600px) {
            margin-top: 1rem;
            height:5rem;
            width: 15rem;
        }
    }
`

export const Search = styled.input`
    width: 90%;
    margin: 0 1rem;
    background: var(--shape);
    color: var(--text-body);
    border: none;
    outline: none;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media (max-width: 600px) {
        padding: 0 1rem;
    }
`

export const Button = styled.button`
    font-size: 1.25rem;
    font-weight: 500;
    border: none;
    color: var(--shape);
    background-color: transparent;
    margin: 0 1rem;
    
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80%;
    border-bottom: 3px solid transparent;
    @media (max-width: 600px) {
        margin-top: 1rem
    }
`

export const MobileDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        height: 5rem;
    }
`

export const LogoButton = styled.button`
    border: none;
    background-color: transparent;
    margin: 0 1rem;
    min-width: 120px;
`