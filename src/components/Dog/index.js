import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DogView from '../DogView'

import {
  getDogs
} from '../../redux/actions'



const Dog = (props) => {
  const { value, votedDogs, openDialog } = props
  console.log(votedDogs, 'votedDOgs')
  const dispatch = useDispatch()

  // const newVotedDog = votedDogs.map((v,i) => {
  //   if (v.name ==! value) {
  //     return true
  //   } else {
  //     return false
  //   }
  // })

  
  // console.log(newVotedDog, 'newVotedDog')

  return (
    <Card style={{
      marginBottom: '3em',
      width: '300px',
    }}>
      <CardContent style={{
        padding: '1em'
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <Typography variant='h6'>{value}</Typography>
        <Typography variant="body2"> Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</Typography>
      </CardContent>
      <CardActions style={{
        padding: '1em'
      }}> 
      <Link to={`${value}/images/random`} >
        <Button variant='outlined'>View</Button>
      </Link>
      </CardActions>
    </Card>
  )
}

export default Dog;