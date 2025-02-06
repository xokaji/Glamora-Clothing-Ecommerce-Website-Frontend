import React from 'react'
import { Banner } from '../../components/MainBanner/Banner'
import { Popular } from '../../components/Popular/Popular'
import { Offers } from '../../components/Offers/Offers'
import { Newcollections } from '../../components/newCollections/Newcollections'
import { News } from '../../components/Newsletters/News'

export const Shop = () => {
  return (
    <div>
      <Banner/>
      <Popular/>      
      <Offers/>
      <Newcollections/>
      <News/>
      
    </div>
  )
}
