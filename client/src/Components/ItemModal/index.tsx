
import Modal from 'react-modal';
import { AiFillCloseCircle,AiOutlineWhatsApp } from "react-icons/ai";
import { ContactButton, ModalContainer, ModalInfo } from './styles';
import { useEffect, useState } from 'react';

interface ItemModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    itemName: string
    itemDescription: string
    itemImage:string
    itemPrice: number
  }

  
  export function ItemModal(props: ItemModalProps) {
    const [redirect, setRedirect] =useState('')
    const [text, setText]= useState('')

    useEffect(()=>{
        setText(`Olá, tenho interesse neste item: ${props.itemName} com o valor de R$${props.itemPrice}`)
    },[])

    function HandleMessage(){
        setRedirect(`https://web.whatsapp.com/send?phone=5511950508190&text=${text}`)
    }
    return(
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <button 
          type='button' 
          onClick={props.onRequestClose} 
          className="react-modal-close"
        >
          <AiFillCloseCircle />
        </button>
        <ModalContainer>
            <ModalInfo>
                <h2>{props.itemName}</h2>
                <img src={props.itemImage} width={400} height={400}/>
            </ModalInfo>
            <ModalInfo>
                <p>{props.itemDescription}</p>
                <h3>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(props.itemPrice)}
                </h3>
                <ContactButton href={redirect} onClick={HandleMessage} target="_blank">
                    <AiOutlineWhatsApp />
                    <h5>Tenho interesse</h5>
                </ContactButton>
            </ModalInfo>
        </ModalContainer>
      </Modal>
    )
  }