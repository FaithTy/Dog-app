import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'



import Dog from '../Dog'
import DogView from '../DogView'

import {
  getDogs,

} from '../../redux/actions'

const Dogs = () => {
  const dispatch = useDispatch()
  const [showDogs, setShowDogs] = useState(false)

  const data  = useSelector(state => state.dogs.dogs)



  useEffect (() => {
    dispatch(getDogs())
  }, [])


  const viewAllDogsHandler = () => {
   setShowDogs(true)
  }

  const dogsArray = Object.keys(data).map(key =>
    <Dog key={key} value={key} children={data[key]}></Dog>)

    
  return (
   <>
    <Typography variant='h6'>Dogs List</Typography>
    <Button variant='contained' onClick={() => viewAllDogsHandler()}>View All Dog breed</Button>
    {
      showDogs ? dogsArray : ''
    }
   </>
  )
}

export default Dogs;