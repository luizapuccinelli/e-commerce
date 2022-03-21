
import Modal from 'react-modal';
import { AiFillCloseCircle,AiOutlineWhatsApp } from "react-icons/ai";
import { ContactButton, ModalContainer, ModalInfoLeft, ModalInfoRight } from './styles';
import { useEffect, useState } from 'react';
import { Slides } from '../Slides';

interface ItemModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    itemName: string
    itemDescription: string
    itemImage:string[]
    itemPrice: number
  }

  
  export function ItemModal(props: ItemModalProps) {
    const [redirect, setRedirect] =useState('')
    const [text, setText]= useState('')

    useEffect(()=>{
        setText(`Olá, tenho interesse neste item: ${props.itemName} com o valor de R$${props.itemPrice}`)
    },[props.isOpen])

    function HandleMessage(){
        setText(text.replace(/\s/g, '+'))
        setRedirect(`https://api.whatsapp.com/send/?phone=5548992035815&text=${text}&app_absent=0`)
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
            <ModalInfoLeft>
                <h2>{props.itemName}</h2>
                <Slides imageList={props.itemImage}/>
            </ModalInfoLeft>
            <ModalInfoRight>
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
            </ModalInfoRight>
        </ModalContainer>
      </Modal>
    )
  }