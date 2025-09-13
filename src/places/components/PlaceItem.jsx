import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import './PlaceList.css'

const PlaceItem = () => {
    if(items.length === 0) {
        return <div className='place-list center'>
            <Card>
                <h2>No places found. Maybe create one?</h2>
            </Card>
        </div>
    }
  return (
    <div>
      
    </div>
  )
}

export default PlaceItem
