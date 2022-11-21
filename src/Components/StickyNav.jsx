import { useRef } from 'react'
import React from 'react'
import VHA from './VHA'
// import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import Drawers from './Drawer'
import './Nav.css';
import { Box } from '@mui/system';
import { createTheme,ThemeProvider } from '@mui/material/styles';

const themes = createTheme({
    palette: {
      primary:{
        main:'#009c9c',
      },
      secondary:{
main:'#ffffff'
      }
    },
   
  });
const StickyNav = () => {
    const vha = useRef(null);
    const hackathon = useRef(null);
    const rules = useRef(null);
    const judging = useRef(null);
    const prizes = useRef(null);
  
    const scrollToSection = (elementRef) =>{
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior:'smooth'
      })
    }


    const [value, setValue] = useState()
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (

<>
<ThemeProvider theme={themes}>
      <AppBar className='appbar' sx={{ background: 'transparent' }}>
        <Toolbar sx={{ margin: '0 auto', width: '89%' }}>
          {/* <Link to="/"> */}
            {/* <img src={require('../Img/hackatton.png')} alt="Logo" width={120} /> */}
          {/* </Link> */}
          {isMatch ? (
            <>
              <Typography></Typography>
              <Drawers />
            </>
          ) : (
            <>
            <Box sx={{
                display:'flex',
                flexDirection:'column'
            }}>
              <Tabs
                sx={{ margin: 'auto', display:'flex', flexDirection:'column', color:'white' }}
                value={value}
orientation='vertical'
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                className="color"
              >
                
                  <Tab label="Home" sx={{color:'white'}} />
                  <Tab label="VHA"onClick={() => scrollToSection(vha)} sx={{color:'white'}} />
            
                  <Tab label="Hackatton" onClick={() => scrollToSection(hackathon)} sx={{color:'white'}} />
             
                  <Tab label="Rules" onClick={() => scrollToSection(rules)} sx={{color:'white'}} />
             
                  <Tab label="Judging" onClick={() => scrollToSection(judging)} sx={{color:'white'}} />
             
                  <Tab label="Prizes" onClick={() => scrollToSection(prizes)} sx={{color:'white'}} />
           
              </Tabs>
              </Box>
                {/* <Button
                  variant="contained"
                  sx={[
                    { ml: 3.5, bgcolor: '#009c9c' },
                    (theme) => ({
                      '&:hover': {
                        bgcolor: '#047474',
                        color: 'white',
                      },
                    }),
                  ]}
                >
                  Donate
                </Button> */}
              {/* </Link> */}
              {/* <Link to='/Donate' exact activeclassname='active'>    <button className="buttons">Donate</button></Link> */}
            </>
          )}
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </>
  )
}

export default StickyNav



