import React from 'react'
import CartComponent from './components/CartComponent';
import InventoryComponent from './components/InventoryComponent';

const App=props=>{
  return (
    <div>
      <h1>Inventory App</h1>
      <InventoryComponent/>
      <CartComponent/>
    </div>
  )
}

export default App;