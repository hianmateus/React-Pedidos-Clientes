import styled from 'styled-components'

export const Main = styled.div`
    
    min-heightheight: 896px;
    width: 414px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 25px 0;

`

export const Section = styled.div`
    
    width: 100%;
    padding: 0 36px;
    display: flex;
    flex-direction: column;

`

export const Title = styled.h1`
    
    color: #FFF;
    margin-bottom: 76px;

`

export const Button = styled.button`
    
    width: 342px;
    height: 68px;
    padding: 0px 113px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.12);
    color: white;
    font-size: 17px;
    font-weight: 900;
    margin-top: 95px;
    cursor: pointer;

`

export const Client = styled.li`
    width: 342px;
    height: 101px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;

    .DivP{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .Pedidos{
        color: #fff;
        opacity: 0.7;
    }

    .Nome{
        color: #fff;
        font-weight: 700;
        font-size: 20px;
    }

    button{
        height: 30px;
        background: transparent;
        cursor: pointer;
    }


`