import styled from 'styled-components'
import { MdClose } from 'react-icons/md'


export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0;
  z-index: 999;
    `;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 610px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    top: 10px;
    z-index: 10;
    border-radius: 10px;


    @media screen and (max-width: 968px) {
        height: 90%;
        left: 20px;
        
    }
   
    /*width: 70vw;
    height: 65%;
    box-shadow: 0 150px 200px rgba(0,0,0,0.8);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    left: 210px;
    bottom: 0;
    z-index: 10;
    
*/
`;

export const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    
    border-radius: 10px 0 0 10px;
    background: #000;
    

`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

`;

export const CloseModalButton = styled(MdClose)`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    cursor: pointer;
`;