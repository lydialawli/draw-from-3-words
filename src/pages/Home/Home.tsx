import React, { type ReactElement, useState } from 'react'
import { Typography, Grid, Box, Button } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import axios from 'axios'

const Home = (): ReactElement => {
  const theme = useTheme()
  const [newWord, setNewWord] = useState('')
  const getWord = async () => {
    try {
      await axios
        .get('https://random-word-api.herokuapp.com/word')
        .then(function (response) {
          if (response.data) {
            setNewWord(response.data)
          }
        })
    } catch (err) {
      console.log('err:', err)
    }
  }

  return (
    <Grid container spacing={theme.spacing(1)} overflow="none">
      <Box margin={theme.spacing(2)} width="80vw">
        <Grid container justifyContent="space-between" marginBottom={theme.spacing(1)}>
          <Typography variant="h2">
                        1st WORD
          </Typography>
          <Typography variant="h2">
                        2nd WORD
          </Typography>
          <Typography variant="h2">
                        3rd WORD
          </Typography>

        </Grid>
        <Button
          size="small"
          disableElevation
          // className={classes.button}
          variant="contained"
          onClick={getWord}
        >
                    Generate new word
        </Button>
        <Typography variant="h1">
          {newWord}
        </Typography>
      </Box>
    </Grid>
  )
}

export default Home
