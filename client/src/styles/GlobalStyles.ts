import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #f0f2f5;
    --shape: #FBFFF1;

    --red: #D90368;
    --blue: #3D52D5;
    --green: #00B843;
    
    --blue-light: #B4C5E4;
    --blue-dark: #090C9B;

    --purple: #502274;
    --purple-dark: #2E294E;
    --yellow: #FFD400;

    --text-title: #363f5f;
    --text-body: #3C3744;
 }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 97.5%;
    }
 }

 body {
    background: linear-gradient(90deg, rgba(216,164,251,1) 0%, rgba(255,178,178,1) 50%, rgba(255,229,191,1) 100%);
    height: 100vh;
    -webkit-font-smoothing: antialiased;
 }

 border-radius, input, textarea, button, p, table {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
 }

 h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
 }

 button {
    cursor: pointer;
 }

 [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
 }

 .react-modal-overlay {
   background: rgba(0, 0, 0, 0.5);
   position: fixed;
   top:0;
   bottom:0;
   left: 0;
   right:0;

   display: flex;
   align-items: center;
   justify-content: center;
 }
 .react-modal-content {
   width:100%;
   max-width: 50rem;
   background: var(--background);
   padding: 3rem;
   position: relative;
   border-radius: 0.25rem;
 }

 .react-modal-close {
   position: absolute;
   right: 1.5rem;
   top: 1.5rem;
   border: 0;
   background: transparent;

   transition: filter 0.2s;

   &:hover {
      filter: brightness(0.8)
   }
 }

`