import React, { type ReactElement } from 'react'
import { Typography, Grid, Box } from '@mui/material'

import { useTheme } from '@mui/material/styles'

const Home = (): ReactElement => {
  const theme = useTheme()

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
      </Box>
    </Grid>
  )
}

export default Home
