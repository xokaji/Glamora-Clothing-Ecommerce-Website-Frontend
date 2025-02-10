import React from 'react'
import { Banner } from '../../components/MainBanner/Banner'
import { Popular } from '../../components/Popular/Popular'
import { Offers } from '../../components/Offers/Offers'
import { Newcollections } from '../../components/newCollections/Newcollections'
import { Newsletter } from '../../components/Newsletters/News'
import { ChatPopup } from '../../components/ChatPopUp/Chat'

export const Shop = () => {
  return (
    <div>
      <Banner/>
      <ChatPopup/>
      <Popular/>      
      <Offers/>
      <Newcollections/>
    
      <Newsletter/>
    </div>
  )
}
