import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CloseIcon from '@mui/icons-material/Close';

import {
  getSelectedBreed,
  counter
} from '../../redux/actions'


const DogView = (props) => {
  const { image, handleClose, open } = props
  const id  = useParams();
  const dispatch = useDispatch()
  const breedImage = useSelector(state => state.dogs.selectedBreed)
  const { counterDislike, counterLike } = useSelector(state => state.dogs)
  console.log(counterDislike, counterLike , 'counterDislike, counterLike ')
  useEffect (() => {
    dispatch(getSelectedBreed(id.breedName))
    dispatch(counter(likesCount))
  }, [])


  const [likesCount, setLikesCount] = useState(0)
  const [disDisLikesCount, setDisLikesCount] = useState(0)

  const likesCountderHandler = (count) => {
    console.log('counterLike', counterLike, likesCount)
    setLikesCount(previousState =>  previousState + 1)

  }

  const dislikesCouterHandler = (count) => {
    setDisLikesCount(count)
  }


  return (
    <>
      <Paper elevation={1}>
        <Link to='/'>
          <Button variant='contained'>Back to the list</Button>
        </Link>
        <img src={breedImage} style={{width: '250px', height: '250px'}} />
          <div>
            <div>
              <Typography variant='subtitle2'>{likesCount}</Typography>
              <ThumbUpIcon onClick={() => likesCountderHandler()}/>
            </div>
            <div>            
              <Typography variant='subtitle2'>{disDisLikesCount}</Typography>
              <ThumbDownAltIcon onClick={() => dislikesCouterHandler()}/>
            </div>
          </div>
      </Paper>
      {/* <Dialog
        open
        maxWidth='lg'
        fullScreen={false}
        dialogVariant='plain'
        onClose={handleeeclose}
      >
        <DialogTitle>Dog name
        <CloseIcon onClick={handleClose} / >

        </DialogTitle>
        <DialogContent>
          <img src={image} style={{width: '250px', height: '250px'}} />
          <div>
            <div>
              <Typography variant='subtitle2'>{likesCount}</Typography>
              <ThumbUpIcon onClick={() => likesCountderHandler(likesCount)}/>

            </div>
            <div>            
              <Typography variant='subtitle2'>discount likes</Typography>
              <ThumbDownAltIcon onClick={() => dislikesCouterHandler()}/>
            </div>
          </div>
        </DialogContent>
      </Dialog> */}
    </>
  )
}


export default DogView;