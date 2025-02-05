import React from 'react'
import "./newcollections.css"
import new_collection from "../assets/img/new_collections"
import { Item } from '../Items/Item'



export const Newcollections = () => {
  return (
    <div className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {new_collection.map((item, x) => {
          return <Item key={x} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
        })}
      </div>
    </div>
  )
}

//1.05.33
