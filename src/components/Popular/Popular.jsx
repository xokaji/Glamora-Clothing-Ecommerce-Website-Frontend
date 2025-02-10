import React from 'react'
import './popular.css'
import data_product from '../assets/img/data'
import { Item } from '../Items/Item'


export const Popular = () => {
  return (
    <div className="popular">
        <p className='restock'>WOMEN NEW +RESTOCK
        </p>
        <hr/>
        <div className="popularItem">
            {data_product.map((item, x)=>{
                return <Item key={x} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
            })}
        </div>
    </div>
  )
}
