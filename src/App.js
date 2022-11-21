
import './App.css';
import { Box, Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import logo from './Img/hackatton.png'
import StickyNav from './Components/StickyNav';
import VHA from './Components/VHA';
import { useRef } from 'react';
// import ban from './Img/ban.png'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const vha = useRef(null);
  const hackathon = useRef(null);
  const rules = useRef(null);
  const judging = useRef(null);

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }
  return (
<>
 <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <StickyNav/> */}




      
  <Box pt={2} className="banner">
    <Container>
<img src={logo} alt='logo'width={250} />
<div class="typewriter">
  <h1>The future of the Nigerian health sector<br></br>Winner goes home with 1Million Naira</h1>
</div>
<div className="title">
            <span className="block span"></span>
            <h2 className='h2'>HACKATHON<span></span></h2>
        </div>
<h1 className='h1' data-text= "Think It, Code It, Win It">

Think It, Code It, Win It</h1>
{/* <img src={ban} width={50}/> */}
<div className='register_button'>
<a href="https://forms.gle/3SNeStXwQKECHVkF6" class="animated-button1">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  REGISTER
</a></div>
      </Container>
  </Box>
  <Container>
    {/* <VHA ref={vha}/> */}
  </Container>
    </ThemeProvider>
</>
  );
}

export default App;
