import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../interactions/reducers/containerReducer'
import { Typography, Grid, Box, Card, CardContent, Button, Avatar } from '@mui/material'
import { Theme, useTheme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { Container } from '../interactions/reducers/containerReducer'
import recipient1 from '../assets/Container-format-1.png'
import recipient5 from '../assets/Container-format-5.png'
import recipient6 from '../assets/Container-format-6.png'
import Confirmation from './Confirmation'

const ContainerCard = (container: Container): ReactElement => {
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()
  const recipientSrc = container.format === '1' ? recipient1 : container.format === '5' ? recipient5 : recipient6
  const selectedStore = useSelector<StoreState, string>((state) => state.selectedStore)

  const moveContainer = (container: Container, shopId: string) => {
    if (shopId !== '') dispatch({ type: 'transferToStore', payload: { container, shopId } })
    // else dispatch({ type: 'backToBikeStock', payload: { container, shopId: shopId } })
  }

  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        paddingLeft: theme.spacing(1),
        borderRadius: theme.spacing(1),
      }}
    >
      <Box sx={{ display: 'flex' }} justifyContent="center" alignItems="center">
        <Avatar src={recipientSrc} sizes="30px" />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {container.name}
          </Typography>
          <Confirmation title="Where to?" intercept={['onClick']}>
            <Button variant="contained" onClick={() => moveContainer(container, selectedStore)}>
              transfer
            </Button>
          </Confirmation>
        </CardContent>
      </Box>
    </Card>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
  },
  grey: {
    color: theme.palette.grey[400],
  },
}))

export default ContainerCard
