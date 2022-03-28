import * as React from 'react'
import { Box, Button, ButtonGroup, Paper, Select, MenuItem, FormControl, InputLabel, ToggleButton, IconButton } from '@mui/material';
import { PhotoCamera, PlayArrow, FastRewind, FastForward, AllInclusive, KeyboardDoubleArrowLeft, KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey, blueGrey } from '@mui/material/colors';
import { WebCam } from '../utils/webcam';
import { DiskUtil } from '../utils/disk';
import Timeline from './timeline'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: blueGrey[700] },
    background: {
      default: grey[900],
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const onCapture = () => {
  const showSnapShot: HTMLImageElement | null = document.querySelector('#snapshot');
  const snapShot = WebCam.capture();

  DiskUtil.save(snapShot, 'john');
  showSnapShot && (showSnapShot.src = WebCam.capture())
}

const setCamera = () => {
  setTimeout(() => {
    WebCam.attachVideoStream('video')
    WebCam.listWebcams()
  }, 200)
}

const App = () => {
  React.useEffect(() => {
    setCamera()
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          m: 4
        }}>
        <Grid container  >
          <Grid item xs={2} justifyContent="center" >
            <FormControl fullWidth>
              <InputLabel >WebCam</InputLabel>
              <Select style={{ fontSize: 12 }} label="WebCam" value="20" >
                <MenuItem
                  defaultValue='' value={20}>Logitel</MenuItem>
                <MenuItem value={10}>FaceTime</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} alignItems="center">
            <Grid container justifyContent="space-between" direction="row" alignItems="center" >
              <Grid item >
              </Grid>
              <Grid item >
                <Box
                  sx={{
                    width: '680px',
                    maxWidth: '680px'
                  }}>
                  <Paper elevation={6} sx={{ p: 2 }}>
                    <Grid container spacing={2} direction="column">
                      <Grid item >
                        <div style={{ position: 'relative' }}>
                          <div>
                            <video id="video" height="360" width="640" autoPlay={true}></video>
                          </div>
                          <div style={{ position: 'absolute', top: 0, left: 0 }}>
                            <img id="snapshot" height="360" width="640" />
                          </div>
                        </div>
                      </Grid>
                      <Grid item >
                      </Grid>
                      <Grid item >
                        <Grid container justifyContent="space-between" direction="row" alignItems="center">
                          <Grid item >

                          </Grid>
                          <Grid item >
                            <Paper elevation={10}  >
                              <ButtonGroup>
                                <IconButton id="open" ><KeyboardDoubleArrowLeft /></IconButton>
                                <IconButton id="open" ><KeyboardArrowLeft /></IconButton>
                                <IconButton id="open" ><PlayArrow /></IconButton>
                                <IconButton id="open" ><KeyboardArrowRight /></IconButton>
                                <IconButton id="open" ><KeyboardDoubleArrowRight /></IconButton>
                                <IconButton id="open" onClick={onCapture}><PhotoCamera /></IconButton>
                                <ToggleButton
                                  value="check"
                                  selected={false}
                                  onChange={() => {

                                  }}
                                >
                                  <AllInclusive />
                                </ToggleButton>
                              </ButtonGroup>
                            </Paper>
                          </Grid>
                          <Grid item >

                          </Grid>
                        </Grid >
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Grid>
              <Grid item >

              </Grid>
            </Grid>
          </Grid>
          <Grid item >

          </Grid>
        </Grid>
      </Box>
      <Timeline />
    </ThemeProvider >
  )
}

export default App