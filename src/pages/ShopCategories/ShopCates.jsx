import React, { useContext } from 'react'
import './shopcategories.css'
import { ShopConetxt } from '../../context/ShopContext'
import dropdownIcon from '../../components/assets/img/dropdown_icon.png'
import { Item } from '../../components/Items/Item'
// import all_product from '../../components/assets/img/all_product'

export const ShopCates = (props) => {
  const {all_product} = useContext(ShopConetxt)
  return (
    <div className="shopCategories">
        {/* <img className='shopCategory-banner' src={props.shows} alt="banners"/> */}
        <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={dropdownIcon} alt="sort"/>
          </div>
        </div>
        <div className="shopCategory-products">
          {all_product.map((item, x)=>{
              if(props.category === item.category){
                return <Item key={x} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }else{
                return null;
              }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}
