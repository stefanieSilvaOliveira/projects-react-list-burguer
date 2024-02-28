import styled from 'styled-components';
import breakpoints from '../../breakpoints';

export const Container = styled.div`  
           background-color: #000;
           height: 100vh;
           overflow: hidden;
`;

export const Header = styled.div`
        
          display: flex;
          justify-content: space-between;
          background: #000;

          ul{
            display: flex;
            list-style: none;
            margin-right: 40px;
            
          }

          li{
            
            font-size: 13px;
            font-weight: 300px;
            color: #fff;
            margin: 25px 20px 40px 25px;
            cursor: pointer;
          }

          @media ${breakpoints.sm} {
            ul{
            display: flex;
            list-style: none;
           
          }

          li{
            font-size: 13px;
            font-weight: 300px;
            color: #fff;
            margin: 25px 10px 25px 10px;
            cursor: pointer;
          }
          }
`;

export const Logo = styled.div` 
       img{
        width: 100px;
        height: 70px;
        cursor: pointer;
       }
       
`;


export const ContainerItens = styled.div`
        
         background-color: #000;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: center;
        

        h2{
        color: #fff;
        margin-top: 10px;
        font-size: 12px;
        font-weight: 300;
        cursor: pointer;
      }

      @media ${breakpoints.sm} {
            font-size: 13px;
           
          }
`;

export const H1 = styled.h1`
      color: #F2BB13;
      margin-top: -15px;
      font-weight: 600;
      font-size: 30px;
      cursor: pointer;

      @media ${breakpoints.sm} {
            font-size: 35px;
           
          }

`;

export const Image = styled.img`
         width: 300px;
         height: 300px;
         margin-top: -10px;
         opacity: 0.9;

         @media ${breakpoints.sm} {
               margin-top: 100px; 
          }
        
`;

export const InputLabel = styled.p`
       margin-left: 10px;
       
       @media ${breakpoints.sm} {
            margin-top: 10px;  
          }
`;

export const Input = styled.input`
        width: 230px;
        height: 30px;
        margin-top: 15px;
        font-size: 13px;
        font-weight: 400;
        border-radius: 10px;
        outline: none;
        padding-left: 15px;

        @media ${breakpoints.sm} {
           margin-top: 20px;
           width: 290px;
           height: 35px;
  
           
          }

`;


export const Button = styled.button`
            width: 120px;
            height: 30px;
            margin: 20px 10px 10px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            font-weight: 500;
            font-size: 12px;
            color: #000;
            background: #F2BB13;

            &:hover{
              opacity: 0.8;
            }

            &:active {
          transform: scale(0.95); 
          opacity: 0.5;
          background-color: #f88f23;
  
        }

        @media ${breakpoints.sm} {
           margin-top: 50px;
           width: 200px;
           height: 37px;
           
          }
            
`;









