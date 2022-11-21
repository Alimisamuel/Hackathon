import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useRef } from 'react'

const VHA = () => {
  return (
<Box>
    <Grid container>
        <Grid item  lg={12}>
            <Typography variant='h3'>VIRTUAL HEALTH ASSISTANT</Typography>
        </Grid>
        <Grid item lg={8} >
            <Typography variant='body'>
                Over the years, technology has revolutionized our world and changed our daily lives where everything is connected and accessible with clicks.
            </Typography>
            <Typography variant='body'>
            By integrating these emerging technologies, we are highlighting the "HealthTech",a remote approach to solving challenges in the health industry, as the focus for the first editionof our Hackathon.
            </Typography>
            <Typography variant='body'>
        With the rising popularity of remote patient monitoring services, digital healthcare is booming worldwide with over $195 billion in 2021 according to Global Market Insights.
            </Typography>
        </Grid>
        <Grid item lg={4} >
            <Box>
                <Typography variant='h3'>PROBLEM</Typography>
                <Typography variant='p'>One of the most common problems faced by today's people is a lack of knowledge of diseases and a lack of immediate first and consultation</Typography>
                <Typography variant='h3'>SOLUTION</Typography>
                <Typography variant='p'>A Virtual Health Assistant is an interactive online platform that provides a centralized clinical repository for users to figure out their health challenges.</Typography>
                <Typography variant='p'>Users can also ask questions or block online and offline appointments with doctors</Typography>

            </Box>
        </Grid>
    </Grid>
</Box>
  )
}

export default VHA