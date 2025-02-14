import React from 'react'
import './gifts.css'
import { Item } from '../Items/Item'
import data_product from '../assets/img/data'

export const Gifts = () => {
  return (
    <div className='gifts'>
        <p className='giftStock'>GIFT CARDS +SPECIALS</p>
        <hr/>
        <div className="giftItem">
            {data_product.map((item, x)=>{
                return <Item key={x} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
            })}
        </div>
    </div>
  )
}
