export default function CartFooter({
    totalPrice,
    formatCurrency,
    handleEmptyCart,
    message,
    dataMessage,
    handleMouseOverPayCart,
    handleMouseOutPayCart
}) {
    return (
        <div className="grid modal-row footer">
            <div className="grid-item-modal right">
                Total a pagar : {formatCurrency(totalPrice)}
            </div>
            <div>
                <button
                    className="grid-item-modal center empty-cart-button"
                    title='Vaciar productos del carro de compras'
                    width="180"
                    onClick={handleEmptyCart}
                >
                    Vaciar carrito
                </button>
                {message.type === "pay" && (
                    <div className='pay-message'>{dataMessage[message.type].message}</div>
                )}
                <button
                    className="grid-item-modal center pay-cart-button"
                    title='Realizar pago de los productos'
                    width="180"
                    onMouseOver={handleMouseOverPayCart}
                    onMouseOut={handleMouseOutPayCart}
                >
                    Pagar
                </button>
            </div>
        </div>
    );
}