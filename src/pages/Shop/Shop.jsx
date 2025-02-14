import React from 'react'
import { Banner } from '../../components/MainBanner/Banner'
import { Popular } from '../../components/Popular/Popular'
import { Offers } from '../../components/Offers/Offers'
import { Newcollections } from '../../components/newCollections/Newcollections'
import { Newsletter } from '../../components/Newsletters/News'
import { ChatPopup } from '../../components/ChatPopUp/Chat'
import { Manbanner } from '../../components/ManBanner/Manbanner'
import { AccCollection } from '../../components/AccesorriesCollection/AccCollection'
import { AccBanner } from '../../components/Accbanner/AccBanner'
import { Gifts } from '../../components/gifts/Gifts'

export const Shop = () => {
  return (
    <div>
      <Banner/>
      <ChatPopup/>
      <Popular/>      
      <Offers/>
      <Newcollections/>
      <Manbanner/>
      <AccCollection/>
      <AccBanner/>
      <Gifts/>
      <Newsletter/>
    </div>
  )
}
