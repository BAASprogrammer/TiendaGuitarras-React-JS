export default function EmptyCart({ isOpenCart, handleCart }) {
    return (
        <div className={`modal-shoppingcart status-shoppingcart empty-shoppingcart center ${isOpenCart ? 'data-shoppingcart' : 'closed-shoppingcart'}`}>
            <span className='close-shopping-cart' onClick={handleCart}>x</span>
            <h3>El carrito está vacío</h3>
        </div>
    );
}