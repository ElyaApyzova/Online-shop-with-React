import React from 'react';
import './Breadcrumb.css'

const Breadcrumb = (props) => {
    const {product} = props;
    return (
        <div className='breadcrumb'>
        HOME <i class='bx bx-chevron-right'></i> SHOP <i class='bx bx-chevron-right'></i> {product.category} <i class='bx bx-chevron-right'></i> {product.name}
        </div>
    )
}

export default Breadcrumb