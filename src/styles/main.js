import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';


export const Video = styled.video`
    position: fixed;
    width: 100%;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
`;

export const MainContainer = styled.div`
    background-color: rgba(21, 25,42,0.8);
    border-radius: 1.25rem;
    width: 97vw;
    overflow: hidden;

    min-height: 97vh;
    padding: 2rem;
    max-height: fit-content;
    /* overflow: hidden; */
    display: flex;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
        width: 100vw;
        height: fit-content;
        min-height: 100vh;
        border-radius: 0rem;
    }
`;

export const Container = styled.div`
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    display: grid;
    place-content: center;
`;




/* -------------- Global Styles --------------- */

export const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  position: relative;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


`;