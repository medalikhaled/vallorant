import styled from "styled-components";


export const CardContainer = styled.div`
    border: 2px solid #d3d3d3;
    background-color: rgba(21, 25,42,0.9);
    border-radius: 1.25rem;
    padding: .7rem;
    transition: all .2s ease-in-out;
    z-index: 1; 

    h2 {
        font-family: "VALORANT" ;
        color: #eee;
        z-index: 999; 
    }
    
    &:hover {
        cursor: pointer;
        border: 2px solid #9063CD;

        &::after {
            content: "";
            position: absolute;
            border-radius: 1.25rem;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 0%, #9063CD 100%);
            z-index: 50; 
        }

        h2 {
            color: #fff;
            z-index: 999;
        }
    }

    @media (max-width: 768px) {
        padding: 0rem;    
    }

`;

export const CardsContainer = styled.div`
    font-family: "Poppins", sans-serif;
    color: #fff;
    width: 90%;
    margin: 0 auto;
    

    h1 {
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        text-align: center; 
        padding: 10px 0px;
        width: 80%;
        h1 {
            margin-bottom: 10px;
        }
    }


`

export const Image = styled.img`
    max-width: 100%;
`;


export const RestContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
` 