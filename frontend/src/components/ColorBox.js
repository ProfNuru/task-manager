import React from 'react'
import {Box} from "@mui/material";
import PropTypes from "prop-types";


const ColorBox = ({color}) => {
  return (
    <Box sx={{
        background:color,
        width:(theme)=>theme.spacing(2.5),
        height:(theme)=>theme.spacing(2.5),
        borderRadius:(theme)=>theme.spacing(0.5)
    }} />
  )
}

ColorBox.propTypes = {
    color:PropTypes.string
}

export default ColorBox