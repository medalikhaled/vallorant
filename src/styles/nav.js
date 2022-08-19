import styled from "styled-components";

export const NavContainer = styled.div`
    margin-right: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px) {
        padding: 0;
        margin: 0;
        width: fit-content;
    }
`;


export const Image = styled.img`
    max-width: 50px;
    max-height: 50px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    filter: opacity(0.5) drop-shadow(0 0 0 blue);

    &:hover {
        mix-blend-mode: hard-light;
        transform: scale(1.1);
    }
`;


