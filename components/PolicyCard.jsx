import React from 'react'
import PropTypes from 'prop-types'

const PolicyCard = ({ name, desc, icon }) => {
    return (
        <div className="policy-card" >
            <div className="policy-card__icon">
                <i className={icon}></i>
            </div>
            <div className="policy-card__info">
                <div className="policy-card__info__name">
                    {name}
                </div>
                <div className="policy-card__info__description">
                    {desc}
                </div>
            </div>
        </div>

    )
}

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.string.isRequired
}

export default PolicyCard