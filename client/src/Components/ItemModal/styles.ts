import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;


    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const ModalInfo = styled.div`
    align-self: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        align-self: start;
        color: var(--blue);
        margin-bottom: 1rem;
    }
`

export const ContactButton = styled.a`
    display: flex;
    align-items: center;
    color: white;
    border: none;
    background-color: var(--green);
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 0.75rem;
    text-decoration: none;

    h5 {
        font-weight: 600;
        font-size: 1rem;
        margin: 0 0.5rem;
    }
`