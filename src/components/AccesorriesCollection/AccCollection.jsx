import React from 'react'
import new_collections from '../assets/img/new_collections'
import { Item } from '../Items/Item'
import './accCollection.css'

export const AccCollection = () => {
  return (
    <div className='accesoriesCollection'>
        <p className="accTitle">ACCESORIES +RESTOCK</p>
        <hr/>
        <div className="accitem">
            {new_collections.map((item, x)=>{
                return <Item key={x} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
            })}
        </div>
    </div>
  )
}
