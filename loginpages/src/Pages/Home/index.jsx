import { Main, Section, Title, Labelp, Labeli, Button } from './styles'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import BurgerImage from '../../assets/Burger1.svg'
import { useState, useRef } from 'react'

function Home() {

    const [Clients, setClients] = useState([])
    const history = useHistory()
    const name = useRef()
    const order = useRef()

    async function NewOrder() {

        const {data: newOrder} = await axios.post('http://localhost:3001/users', {
            name: name.current.value, 
            order: order.current.value
        })

        console.log(newOrder)

        setClients([... Clients, newOrder])

        name.current.value = ""
        order.current.value = ""

        history.push('/pedidos')

    }


    return (

        <Main>

            <img src={BurgerImage} alt="" />

            <Title>Faça seu pedido!</Title>

            <Section>

                <Labelp>Pedido</Labelp>
                <Labeli ref={order}></Labeli>

                <Labelp>Nome do Cliente</Labelp>
                <Labeli ref={name}></Labeli>

                <Button onClick={NewOrder}>Novo Pedido</Button>

            </Section>

        </Main>

    )

}

export default Home 