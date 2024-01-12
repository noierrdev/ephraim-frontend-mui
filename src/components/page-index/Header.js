import React  from "react";
import HeaderImg001 from '../../assets/images/pexels-david-mcbee-1546168.jpg'
import { Typography } from "@mui/material";
const Header=props=>{
    return (
        <>
            <img style={{width:"100%",opacity:0.5}} src={HeaderImg001} />
            <Typography variant="h2"  component={`h2`} sx={{marginTop:"-100vh",marginLeft:"50vh",position:"absolute"}} >Your dream house is just Here.</Typography>
        </>
    )
}
export default Header