import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import{Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Container} from  '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'


const Drawers = () => {
    const [openDrawer, setOpenDrawer]  = useState(false)
  return (
   <>
   <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
<List>
    {/* <Link to='/'style={{textDecoration:'none', color:'black', paddingLeft: '20px'}} exact activeclassname='active'> */}
    {/* <Link to='/'> */}
          <img src={require("../Img/hackatton.png")} alt="Logo" width={80} />
          {/* </Link> */}
          <Container maxWidth='true' sx={{
      height:'5px',
      bgcolor:'#009C9C'
    }}>

    </Container>
    <Container maxWidth='true' sx={{
      height:'10px',
      bgcolor:'#80cece'
    }}>

    </Container>
    <Container maxWidth='true' sx={{
      height:'15px',
      bgcolor:'#c1ecec'
    }}>

    </Container>
   <ListItemButton sx={{padding:'3px 20px', mt:6}}>
  
    <ListItemIcon>
        <ListItemText>
            Home
        </ListItemText>
   
    </ListItemIcon>
    </ListItemButton> 
    {/* </Link> */}
    {/* <Link to='/about' style={{textDecoration:'none', color:'black'}} exact activeclassname='active'> */}
   <ListItemButton sx={{padding:'3px 20px'}}>
    <ListItemIcon>
        <ListItemText>
            About
        </ListItemText>
   
    </ListItemIcon>
    </ListItemButton> 
    {/* </Link> */}
    {/* <Link to='/blog' style={{textDecoration:'none', color:'black'}} exact activeclassname='active'> */}
   <ListItemButton sx={{padding:'3px 20px'}}>
    <ListItemIcon>
        <ListItemText>
            Blog
        </ListItemText>
   
    </ListItemIcon>
    </ListItemButton> 
    {/* </Link> */}
    {/* <Link to='/contact' style={{textDecoration:'none', color:'black'}} exact activeclassname='active'> */}
   <ListItemButton sx={{padding:'3px 20px'}}>
    <ListItemIcon>
        <ListItemText>
            Contact
        </ListItemText>
   
    </ListItemIcon>
    </ListItemButton> 
    {/* </Link> */}
    {/* <Link to='/donate' style={{textDecoration:'none', color:'black', textAlign:'left'}} exact activeclassname='active'> */}
   <ListItemButton sx={{padding:'3px 40px', background:'#009c9c', marginTop:'40px'}}>
    <ListItemIcon>
        <ListItemText>
            Donate
        </ListItemText>
   
    </ListItemIcon>
    </ListItemButton> 
    {/* </Link> */}
  
</List>
   </Drawer>
   <IconButton  sx={{color:'#009c9c', marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
    <MenuIcon/>
   </IconButton>
   </>
  )
}

export default Drawers;