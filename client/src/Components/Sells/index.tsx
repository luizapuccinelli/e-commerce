import { useEffect, useState } from "react";
import { ItemModal } from "../ItemModal";
import { Background, ItemButton, ItemsContainer } from "./styles"
import axios from 'axios'

interface itemType {
    id: string
    name: string
    description: string
    imageUrl: string[]
    price: number
}

interface SellsHeroProps{
    searchBar: string
}


export function SellsHero(props: SellsHeroProps){
    const [items, setItems] = useState<itemType[]>([]);
    const [itemModalOpen, setItemModalOpen] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemImage, setItemImage] = useState<string[]>([]);
    const [itemPrice, setItemPrice] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/item').then(function(response){
            setItems(response.data.data[0])
        })
    }, []);
    
    function handleCloseItemModal(){
		setItemModalOpen(false);
	}

    function handleItemClick(item:itemType){
        setItemModalOpen(true)
        setItemName(item.name)
        setItemImage(item.imageUrl)
        setItemDescription(item.description)
        setItemPrice(item.price)
    }

    return(
        <Background>
            <ItemsContainer>
                {
                    props.searchBar != '' ? 
                        items.filter((el) => el.name.includes(props.searchBar)).map((item)=>(
                        <ItemButton key={item.id}>
                            <img src={item.imageUrl[0]} width={200} height={200}/>
                            <h2>{item.name}</h2>
                            <h5>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.price)}
                            </h5>
                        </ItemButton>
                        )
                    )
                    :
                        items.map((item)=>(
                        <ItemButton key={item.id} onClick={e=>handleItemClick(item)}>
                            <img src={item.imageUrl[0]} width={200} height={200}/>
                            <h2>{item.name}</h2>
                            <h4>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.price)}
                            </h4>
                        </ItemButton>
                        )
                    )

                }
            </ItemsContainer>
            <ItemModal 
                isOpen={itemModalOpen}
                onRequestClose={handleCloseItemModal}
                itemName={itemName}
                itemDescription={itemDescription}
                itemImage={itemImage}
                itemPrice={itemPrice}

            />
        </Background>
    )
}