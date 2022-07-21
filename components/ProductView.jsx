import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import Button from '../components/Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {

    const product = props.product

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState()

    const [size, setSize] = useState()

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor()
        setSize()
    }, [product])
    // cai nay chi su dung 1 cho nen khong can goi ham rieng => khong can thiet
    // const updateQuantity =  type => {
    //     if (type === plus) {
    //         setQuantity ( quantity + 1)
    //     } else {

    //     }
    // }


    const check = () => {
        if (color === undefined) {
            alert('Please select color')
            return false
        }

        if (size === undefined) {
            alert('Please select size')
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check())
            console.log({ color, size, quantity })

    }

    const navigate = useNavigate()

    const goToCart = () => {
        if (check())
            navigate('/cart')
    }

    

    return (
        <div className='product'>
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() =>
                        setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() =>
                        setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-descripton ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-descripton__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-descripton__content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    >
                    </div>
                    <div className="product-descripton__toggle">
                        <Button
                            size="sm"
                            onClick={() => setDescriptionExpand(!descriptionExpand)}
                        >
                            {
                                !descriptionExpand ? 'Xem thêm' : 'Thu gọn'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu sắc
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item 
                                    ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Size
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.size.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item 
                                    ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                    <span className="product__info__item__list__item__size">
                                        {item}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)}>
                            <i className='bx bx-minus'></i>
                        </div>

                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>

                        <div className="product__info__item__quantity__btn" onClick={() => setQuantity(quantity + 1 > 10 ? 10 : quantity + 1)}>
                            <i className='bx bx-plus'></i>
                        </div>
                    </div>
                </div>

                <div className="product__info__item">
                    <Button onClick={() => addToCart()}>Add to cart</Button>
                    <Button onClick={() => goToCart()}>Buy now</Button>
                </div>
            </div>
            <div className={`product-descripton mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-descripton__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-descripton__content"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                >
                </div>
                <div className="product-descripton__toggle">
                    <Button
                        size="sm"
                        onClick={() => setDescriptionExpand(!descriptionExpand)}
                    >
                        {
                            !descriptionExpand ? 'Xem thêm' : 'Thu gọn'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView