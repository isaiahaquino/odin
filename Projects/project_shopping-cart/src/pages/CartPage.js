import '../styles/CartPage.css';

function CartPage(props) {

  let subtotal = 0;
  let tax = 0;
  let total = 0;
  const taxPercent = 0.08;

  return (
    <div className='cartPage'>
      <h1>Your cart ({props.cartItemCount} items)</h1>
      <div className='shopCart'>
        <div className='cartHeader'>
          <h2>Item</h2><h2>Price</h2><h2>Quantity</h2><h2>Total</h2>
        </div>
        <div className='cartItems'>
          {props.cartItems.map((item) => {
            subtotal += parseInt(item.price);
            tax = subtotal * taxPercent; 
            tax = tax.toFixed(2);
            total = subtotal + tax;

            return (
              <div className='cartItem' key={item.id}>
                <div className='itemDesc'>
                  <img src={require(`../photos/images/${item.img}`)} alt=''></img>
                  <div>
                  <h2>{item.name}</h2>
                  <h3>{item.description}</h3>
                  </div>
                </div>
                <h3>${item.price}</h3>
                <h3>{item.quantity}</h3>
                <div className='itemRemove'>
                  <h3>${item.price * item.quantity}</h3>
                  <button type='button' id={item.id} onClick={props.removeItemFromCart}>X</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className='cartTotal'>
          <div className='subtotal'>
            <h1>Subtotal:</h1>
            <h2>${subtotal}</h2>
          </div>
          <div className='tax'>
            <h1>Tax(8%):</h1>
            <h2>${tax}</h2>
          </div>
          <div className='total'>
            <h1>Total:</h1>
            <h2>${total}</h2>
          </div>
          <button type='button' className='checkOut'>Check out</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;