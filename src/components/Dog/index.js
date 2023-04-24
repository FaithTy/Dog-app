import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";



import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'

import DogView from '../DogView'





const Dog = (props) => {
  const { value, children, openDialog } = props
  return (
    <>
      <Typography variant='subtitle1'>{value}</Typography>
      <Link to={`${value}/images/random`} >
        <Button variant='outlined'>View</Button>
      </Link>
    </>
  )
}

export default Dog;