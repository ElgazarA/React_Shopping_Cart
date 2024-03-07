import React from 'react'
import '../../css/Filter/Filter.css'
import { Container } from 'react-bootstrap'
function Filter({filter_by_size , sizeValue , orderBy , orderValue}) {
  return (
    <div className='filter_wraper'>
        <h2 className='filter_title'>filter</h2>
        <Container>
            <p className='num_of_prod'>Number of products ...</p>
            <div className='filter_by_size m-2'>
                <span>Size: </span>
                <select className='filter_select size_select'  onChange={filter_by_size}>
                    <option value="All" >All</option>
                    <option value="XS" >XS</option>
                    <option value="S" >S</option>
                    <option value="M" >M</option>
                    <option value="L" >L</option>
                    <option value="XL" >Xl</option>
                </select>
            </div>
            <div className='order_items m-2'>
                <span>Order: </span>
                <select className='filter_select  order_select'  onChange={orderBy}>
                    <option value="Latest" >Latest</option>
                    <option value="Lower" >Lower</option>
                    <option value="Highest" >Highest</option>
                </select>
            </div>
        </Container>
        
    </div>
  )
}

export default Filter
