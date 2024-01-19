import styled from 'styled-components'

export const Main = styled.div`
    
    height: 896px;
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

export const Labelp = styled.p`
    
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
    margin-left: 20px;
    opacity: 0.8;

`

export const Labeli = styled.input`
    
    height: 65px;
    width: 342px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    margin-bottom: 42px;
    padding-left: 20px;
    opacity: 0.8;

    color: #FFF;
    font-size: 18px;
    font-weight: 300;

`

export const Button = styled.button`
    
    width: 342px;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    background-color: #D93856;
    color: white;
    font-size: 17px;
    font-weight: 900;
    margin-top: 15px;
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