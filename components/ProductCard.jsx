import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = ({
    img01,
    img02,
    name,
    price,
    slug,
}) => {
    return (
        <div className='product-card'>
            <Link to={`/catalog/${slug}`}>
                <div className="product-card__image">
                    <img src={img01} alt="img-product" />
                    <img src={img02} alt="img-product" />
                </div>
                <h3 className="product-card__name">
                    {name}
                </h3>
                <div className="product-card__price">
                    {numberWithCommas(price)} /
                    <span className='product-card__price__old'>
                        <del>{numberWithCommas(300000)}</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    animate={true}
                >
                    Select buy
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard