import { Main, Section, Title, Button, Client } from './styles'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Order from '../../assets/Order.svg'
import Trash from '../../assets/Trash.svg'
import { useState, useEffect } from 'react'

function Orders() {

    const [Clients, setClients] = useState([])
    const history = useHistory()

    useEffect(() => {
        async function fetchClients(){
            const {data: Clientes} = await axios.get('http://localhost:3001/users')

            setClients(Clientes)
        }

        fetchClients()

    }, [])


    async function deleteOrder(userId) {
        await axios.delete('http://localhost:3001/users/${userId}')

        const newclients = Clients.filter((client) => client.id !== userId)
        
        setClients(newclients)
    }

    function GobackPage() {
        history.goBack()
    }

    return (

        <Main>

            <img src={Order} alt="" />

            <Title>Pedidos</Title>

            <Section>               

                <ul>

                    {Clients.map(client => (
                        <Client key={client.id}>
                            <div className='DivP'>
                                <p className='Pedidos'>{client.order}</p>

                                <div>
                                    <p className='Nome'>{client.name}</p>
                                </div>

                            </div>

                            <button onClick={() => deleteOrder(client.id)}>
                                <img src={Trash} alt="trash-lixo-icon" />
                            </button>
                        </Client>
                    ))}

                </ul>

                

            </Section>

            <Button onClick={GobackPage}>Voltar</Button>

        </Main>

    )

}

export default Orders 