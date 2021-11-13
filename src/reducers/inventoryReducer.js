const initialInventory=[
    {   
        id:1,
        itemName:'Product 1',
        quantity:10
    },
    {   
        id:2,
        itemName:'Product 2',
        quantity:8
    },
    {   
        id:3,
        itemName:'Product 3',
        quantity:6
    }
]

export const inventoryReducer=(state=initialInventory,action)=>{
    switch(action.type){
        case 'ADD_ITEM':{
            return state.map((ele)=>{
                if(ele.id===action.payload.id){
                    return {...ele, quantity:ele.quantity-1}
                }else{
                    return {...ele}
                }
            })
        }
        case 'SUBSTRACT_ITEM':{
            return state.map((ele)=>{
                
                if(ele.id===action.payload.id){
                    return {...ele, quantity:ele.quantity+1}
                }else{
                    return {...ele}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export const cartReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_ITEM':{
            const norepeat=state.find((ele)=>{
                return ele.id===action.payload.id
            })
            if(norepeat){
                return state.map((ele)=>{
                    if(ele.id===action.payload.id){
                        return {...ele, quantity:ele.quantity+1}
                    }else{
                        return {...ele}
                    }
                })
            }else{
                const lineItem={...action.payload,id:action.payload.id,itemName:action.payload.itemName,quantity:1}
                const newCart=state.concat(lineItem)
                return newCart
            }
        }
        case 'SUBSTRACT_ITEM':{
            const noempty=state.filter((ele)=>{
                return ele.quantity>1
            })
            // console.log(noempty)
            return noempty.map((ele)=>{
                if(ele.id===action.payload.id){
                    return {...ele, quantity:ele.quantity-1}
                }else{
                    return {...ele}
                }
            })
            // if(noempty){
            //     return state.map((ele)=>{
            //         if(ele.id===action.payload.id){
            //             return {...ele, quantity:ele.quantity+1}
            //         }else{
            //             return {...ele}
            //         }
            //     })
            // }else{
            //     const lineItem={...action.payload,id:action.payload.id,itemName:action.payload.itemName,quantity:1}
            //     const newCart=state.concat(lineItem)
            //     return newCart
            // }
        }
        default:{
            return [...state]
        }
    }
}

// export default inventoryReducer;