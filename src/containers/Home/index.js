import React, {useState,useRef} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';


import {Container,Header,Logo,ContainerItens,H1,Image,InputLabel,Input,Button} from "./style";
import comboBurguer from '../../assets/burguer-tomate.png';
import iconBurguer from '../../assets/logo-country.png'


function Home(){

    const [orders, setUsers] = useState([]);
    const inputName = useRef();
    const inputOrder = useRef();
    const history = useHistory();

    
    async function addNewUser(){
        const {data: orderNew} = await axios.post('http://localhost:3001/order', {
            name:  inputName.current.value,
            order: inputOrder.current.value,
        });

        setUsers([...orders, orderNew]);
    
        history.push('/order');
    
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
    <H1>Faça seu pedido!</H1> 
    <h2>Promoções por tempo limitado</h2>

    <InputLabel>Nome</InputLabel> 
    <Input ref={inputName} placeholder ='Nome'/>
    
    <InputLabel>Pedido</InputLabel>   
    <Input ref={inputOrder} placeholder ='Pedido'/>
    
    <Button onClick={addNewUser}>Novo pedido</Button>
    </ContainerItens>
   

    </Container>   
);

}

export default Home;