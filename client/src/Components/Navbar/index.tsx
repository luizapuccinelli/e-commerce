import { Button, ButtonContainer, ButtonsContainer, LogoButton, MobileDiv, NavbarContainer, Search } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { Dispatch, useState } from "react";
import Image from "next/image";
import logoBranca from "../../assets/logo_branca.png"

interface NavbarProps {
    searchBar: string
    setSearchBar: Dispatch<string>
}

export function Navbar(props:NavbarProps){
    return(
        <NavbarContainer>
            <Link href={'/'}>
                <LogoButton>
                    <Image src={logoBranca} height={'60'} width={'120'}/>
                </LogoButton>
            </Link>
            <label>
                <AiOutlineSearch />
                <Search placeholder="Pesquise um item" value={props.searchBar} onChange={(e)=>props.setSearchBar(e.target.value)}/>
            </label>
        </NavbarContainer>
    )
}