import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl  }) => (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <spane className='price'>{price}</spane>
        </div>
        </div>
    </div>
);

export default CollectionItem;