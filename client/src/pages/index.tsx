import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { SellsHero } from '../Components/Sells'
import { GlobalStyle } from '../styles/GlobalStyles'

export default function Home(){
  const [searchBar, setSearchBar] = useState<string>('')
  return(
    <>
      <GlobalStyle />
      <Head>
        <title> Desapegos da Giuka </title>
      </Head>
      <link rel="icon" href={'../assets/favicon.png'} />
      <Navbar searchBar={searchBar} setSearchBar={setSearchBar}/>
      <SellsHero searchBar={searchBar}/>
    </>
  )
}