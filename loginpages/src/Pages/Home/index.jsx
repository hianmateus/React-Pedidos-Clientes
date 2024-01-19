import { Main, Section, Title, Labelp, Labeli, Button, Client } from './styles'

import BurgerImage from '../../assets/Burger1.svg'
import Trash from '../../assets/Trash.svg'
import { useState } from 'react'

function Home() {

    const [Clients, setClients] = useState([])

    function NovoPedido() {
        setClients([{ id: Math.random(), Cliente: "João", Pedido: "1 Coca-Cola, 1 X-Salada" }])
        console.log(Clients)
    }

    return (



        <Main>

            <img src={BurgerImage} alt="" />

            <Title>Faça seu pedido!</Title>

            <Section>

                <Labelp>Pedido</Labelp>
                <Labeli></Labeli>

                <Labelp>Nome do Cliente</Labelp>
                <Labeli></Labeli>

                <Button onClick={NovoPedido}>Novo Pedido</Button>

                <ul>
                    {Clients.map(client => {
                            <Client key={client.id}>
                                <div className='DivP'>
                                    <p className='Pedidos'>{client.Pedido}</p>

                                    <div>
                                        <p className='Nome'>{client.Cliente}</p>
                                    </div>

                                </div>

                                <button>
                                    <img src={Trash} alt="trash-lixo-icon" />
                                </button>
                            </Client>
                        })}

                </ul>

            </Section>

        </Main>

    )

}

export default Home 