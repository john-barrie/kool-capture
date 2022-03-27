import * as React from 'react'
import { Button, ButtonGroup, Container, Paper, Box, Stack, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { PhotoCamera, PlayArrow, FastRewind, FastForward } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey, blueGrey } from '@mui/material/colors';
import { WebCam } from '../utils/webcam';
import { DiskUtil } from '../utils/disk';

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
                                <Button id="open" variant="contained"><FastRewind /></Button>
                                <Button id="open" variant="contained"><PlayArrow /></Button>
                                <Button id="open" variant="contained"><FastForward /></Button>
                                <Button id="open" variant="contained" onClick={onCapture}><PhotoCamera /></Button>
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
      <Box sx={{

      }}>
        <div style={{
          padding: '0.1px',
          backgroundColor: 'rgb(35, 35, 24)',
          position: 'fixed',
          bottom: 10,
          left: 0,
          width: '100%',

        }}>
          <Paper elevation={4} sx={{ p: .5 }}>
            <Stack direction="row" sx={{
              padding: '2px',
              width: '100%',
              overflowX: "scroll",
            }}>
              {
                [...Array(100).keys()].map((value, index) => {
                  return (
                    <Box sx={{
                      margin: '0 3px 0 3px',
                    }}><Paper elevation={value == 3 ? 24 : 2}>
                        <Box sx={{
                          height: 75,
                          width: 75,
                          alignContent: 'center',
                          overflow: 'hidden',
                          borderRadius: '4px',
                          borderBottomStyle: value == 3 ? 'solid' : 'auto',
                          borderBottomWidth: '5px',
                          borderBottomColor: 'white',

                        }}>
                          <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                          }}>
                            <div style={{
                              textAlign: 'center',
                              padding: '1px',
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '100%',
                              userSelect: 'none'
                            }}>
                              <Typography
                                variant='caption'
                              >
                                image01
                              </Typography></div>
                          </div>
                        </Box>
                      </Paper>
                    </Box>)
                })
              }
            </Stack>
          </Paper >
        </div >
      </Box >
    </ThemeProvider >
  )
}

export default App