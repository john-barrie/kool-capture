import * as React from 'react'
import { Typography, Paper, Box, Stack, Button, ButtonGroup, IconButton } from '@mui/material';
import { Audiotrack, Autorenew, ContentCut, ContentPaste, Delete, FileCopy, Panorama, SendToMobile, UTurnLeft, UTurnRight } from '@mui/icons-material';

const Timeline = () => {


  return (<Box sx={{
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
        <Stack direction="row">
          <Box sx={{ ml: "1rem" }} />
          <ButtonGroup>
            <IconButton ><FileCopy /></IconButton >
            <IconButton ><ContentCut /></IconButton >
            <IconButton disabled><UTurnLeft /></IconButton >
            <IconButton disabled><UTurnRight /></IconButton >
            <IconButton disabled><Autorenew /></IconButton >
          </ButtonGroup>
          <Box sx={{ ml: "1rem" }} />
          <ButtonGroup>
            <IconButton disabled><Delete /></IconButton >
          </ButtonGroup>
          <Box sx={{ ml: "1rem" }} /><ButtonGroup>
            <IconButton><SendToMobile /></IconButton >
          </ButtonGroup>
          <Box sx={{ ml: "1rem" }} /><ButtonGroup>
            <IconButton><Panorama /></IconButton >
          </ButtonGroup>
          <Box sx={{ ml: "1rem" }} /><ButtonGroup>
            <IconButton><Audiotrack /></IconButton >
          </ButtonGroup>
        </Stack>
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
  </Box >)
}
export default Timeline