import styled from "styled-components";



export const Navigation = styled.nav`
    border-left: 1px solid  rgba(255, 255, 255,0.5);
    max-width: 100%;
    font-size: 18px;
    display: flex;
    position: relative;
    align-items: center;
    

    ul {
        color : rgba(255, 255, 255,0.5);
        list-style-type: none;
        max-width: 100%;
        display: flex;
        align-items: center;
        
        li {
            font-family: "Poppins", sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            margin-right: 1rem;

            &:hover {
                cursor: pointer;
                color : #fff;
                
            }

            &:active {
                color: #9063CD;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }

    div {
        position: absolute;
        right: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-right: 2rem;

        .btn {
            width: 50px;
            height: 50px;
            border-radius: .5rem;
            border:none;

            img {
                max-width: 100%;
            }

            &:hover {
                cursor: pointer;
                background-color: #9063CD;
                
            }
        }
    }
`;


export const MobileNav = styled.div`
    width: 100%;
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Drop = styled.img`
    display: none;
    max-width: 50px;
    transition: all 0.2 ease-in-out;
    position: absolute;
    right: 1rem;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }


    @media (max-width: 768px) {
        display: block;
    }
`;


export const Menu = styled.ul`
    list-style-type: none;
    max-width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    border-radius: .5rem;
    background: #9063CD;
    border: none;
    color: #fff;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    align-items: center;
    gap: .2rem;
    transition: all .5s ease;

    &:hover {
        cursor: pointer;
        transform: translateY(-.3rem);
        background-color:#b79bdd;
    }

    &:active {
        transform: translateY(0);
    }
`