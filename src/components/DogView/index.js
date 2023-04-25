import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Alert from '@mui/material/Alert'


import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import {
  getSelectedBreed,
  vote,
  getVoteByBreed,
  getAllVotedDogBreed,
} from '../../redux/actions'


const DogView = (props) => {
  const id  = useParams();
  const dispatch = useDispatch()
  const breedImage = useSelector(state => state.dogs.selectedBreed)
  const disLikes = useSelector(state => state.dogs.votes.counterDisLikes)
  const likes = useSelector(state => state.dogs.votes.counterLikes)
  const name = useSelector(state => state.dogs.votes)
  const [showAlert, setShowAlert] = useState(false)

  useEffect (() => {
    dispatch(getSelectedBreed(id.breedName))
    dispatch(getVoteByBreed(id.breedName))
    dispatch(getAllVotedDogBreed())
  }, [])

  
  const [likesCount, setLikesCount] = useState(0)
  const [disDisLikesCount, setDisLikesCount] = useState(0)

  const likesCountderHandler = (count) => {
    setLikesCount(previousState =>  previousState + 1)
  }

  const dislikesCouterHandler = (count) => {
    setDisLikesCount(previousState =>  previousState + 1)
  }

  const handleSaveVote = () => {
    dispatch(vote({
      name: id.breedName,
      counterLikes: likesCount,
      counterDisLikes: disDisLikesCount
    }))
    setShowAlert(true)
  }

  const CheckComponent = () => {
    if (name.name === id.breedName) {
      console.log('check')
      return  <Button variant='disabled'>Voted</Button>
    } else {
      return <Button variant='contained' onClick={() => handleSaveVote()}>Submit Vote</Button>
    }
  }

  return (
    <>
      <Link to='/'>
        <Button variant='contained'>Back to the list</Button>
      </Link>
      <Card style={{
        width: '400px',
        padding: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <CardMedia component="img" height="250" image={breedImage} />
        <CardContent>
          <Typography variant='h6'>{id.breedName}</Typography>
          <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
        </CardContent>
        <CardActions style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1em'
        }}>
          <div style={{ display: 'flex'}}>
            <div style={{display: 'flex',alignItems: 'center' }}>
              <IconButton color="primary" onClick={() => likesCountderHandler()}>
                  <ThumbUpIcon />
              </IconButton>
              <Typography variant='subtitle2'>{likes}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
            <IconButton color="primary" onClick={() => dislikesCouterHandler()}>
              <ThumbDownAltIcon />
            </IconButton>
                <Typography variant='subtitle2'>{disLikes}</Typography>
            </div>
          </div>
          {/* <Button variant='contained' onClick={() => handleSaveVote()}>Submit Vote</Button> */}
          {
            name.length === 10 ? null  :<CheckComponent />

          }
        </CardActions>
      </Card>
      {
        showAlert ? 
        <Alert onClose={() => {}}>Thank you for voting!</Alert> : null
      }
    </>
  )
}


export default DogView;