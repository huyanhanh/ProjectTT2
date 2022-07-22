import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import productData from '../asset/fake-data/product'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import CartItem from '../components/CartItem'

import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState([])

    const [totalProducts, setTotalProducts] = useState(0)
    console.log(totalProducts)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsDetail(cartItems))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [cartItems])

    return (
        <Helmet title='Cart'>
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn có  {totalProducts} sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className='cart__info__btn'>
                        <Button size="block">Đặt hàng</Button>
                        <Link to="/catalog">
                            <Button size="block">
                                Tiếp tục mua hàng
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart 