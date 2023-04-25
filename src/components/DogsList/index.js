import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import shortid from 'shortid';

import Dog from '../Dog'
import DogView from '../DogView'

import {
  getDogs,
  getAllVotedDogBreed
} from '../../redux/actions'

const Dogs = () => {
  const dispatch = useDispatch()
  const [showDogs, setShowDogs] = useState(false)
  const data  = useSelector(state => state.dogs.dogs)
  const votedDogs = useSelector(state => state.dogs.votes)

  useEffect (() => {
    dispatch(getDogs())
    dispatch(getAllVotedDogBreed())
  }, [])

  const viewAllDogsHandler = () => {
   setShowDogs(true)
  }

  const dogsArray = Object.keys(data).map(key => <Dog key={key} value={key} votedDogs={votedDogs}></Dog>)
    
  return (
   <>
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '1em'
    }}>
      <Typography variant='h6'>You have {votedDogs.length}/10 votes to votes your favorite dog breed</Typography>
      <Button variant='contained' onClick={() => viewAllDogsHandler()}>View All Dog breed</Button>
    </div>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2em'
    }}>
    {
      showDogs ? dogsArray : null
    }
    </div>
   </>
  )
}

export default Dogs;