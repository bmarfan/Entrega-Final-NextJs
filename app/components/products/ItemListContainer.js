import React from 'react'
import ItemCard from './ItemCard'

const ItemListContainer = async ( {category} ) => {
    const items = await fetch(`http://localhost:3000/api/products/${category}`,
        {cache: 'no-store'}
    ).then(r => r.json())

    
    return (
        <div className='relative' id='ItemListContainer'>
          <div className='bg-background2 p-3 rounded-xl'>
            <ul className='flex flex-wrap gap-3 p-5'>
                
                    {
                        items.map((item, index) => {
                            return <ItemCard key={index} items={item} />
                        })
                    }
                
            </ul>
          </div>
        </div>
      )
}

export default ItemListContainer
