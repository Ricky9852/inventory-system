import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, substractItem } from "../actions/inventoryActions";

const CartComponent=props=>{
    const dispatch=useDispatch()
    const cart=useSelector((state)=>{
        return state.cart
    })
    const inventory=useSelector((state)=>{
        return state.inventory
    })
    const cartSum=()=>{
        let sum=0
        cart.forEach((ele)=>{
            sum+=ele.quantity
        })
        return sum
    }
    const handleAdd=item=>{
        let empty=false
        inventory.forEach((ele)=>{
            if(ele.id===item.id){
                if(ele.quantity<=0){
                    empty=true
                }
            }
        })
        if(empty){
            alert('out of stock')
        }else{
            dispatch(addItem(item))
        }
        
    }
    const handleSubstract=item=>{
        dispatch(substractItem(item))
    }
    return (
        <div>
            <h2>Listing Cart - {cartSum()}</h2>
            <ul>
                {cart.map((item)=>{
                    return <li key={item.id}>{item.itemName}  <button onClick={()=>{handleSubstract(item)}}>-</button> {item.quantity} <button onClick={()=>{handleAdd(item)}}>+</button></li>
                })}
            </ul>
        </div>
    )
}
export default CartComponent
