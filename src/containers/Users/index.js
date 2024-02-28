import React, {useState,useEffect} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'


import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { TiTrash } from "react-icons/ti";

import {Container,Header,Logo,ContainerItens,H1,Image,User,Button} from "./style";
import comboBurguer from '../../assets/burguer-pronto.png'
import iconBurguer from '../../assets/logo-country.png'


function Users(){
    const [orders, setUsers] = useState([]);
    const history = useHistory()

    useEffect(() => {
        async function fetchUsers(){
            const {data: newOrders} = await axios.get('http://localhost:3001/order');
            setUsers(newOrders);
        }
        fetchUsers()
    }, [])

   
    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3001/order/${orderId}`);
        
        const newOrders = orders.filter((order) => order.id !== orderId);
        
        setUsers(newOrders);
    } 

    function gobackPage(){
    history.push('/');
}
    return(
    <Container>
    <Header>
    <div>
    <Logo>
    <img src={iconBurguer} alt="burger-logo" />
    </Logo>
    </div>
    <ul>
    <li style={{ borderBottom: '2px solid #F2BB13' }}>Cardápio</li>
    <li>Lanches</li> 
    <li>Bebidas</li>  
    <li> <FaSearch /></li> 
    <li><FaUser/></li>  
    <li><FaShoppingCart /></li>         
    </ul>
    </Header>
    
   <ContainerItens>
    <Image alt="burguer-image" src={comboBurguer}></Image>
    <H1>Lista de pedidos</H1> 
    <h2>Promoções por tempo limitado</h2>
    </ContainerItens>

    <ul>
        {orders.map((user) => (
         <User key={user.id}>
         <p>{user.name}</p> <p>{user.order}</p>
         <button onClick={() => deleteOrder(user.id)}><TiTrash/></button>
         </User>     
        ))}
    
    </ul>
    <Button onClick={gobackPage}>Voltar</Button>
    </Container>   
)};

export default Users;