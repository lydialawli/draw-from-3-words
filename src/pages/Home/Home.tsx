import React, { ReactElement, useState } from 'react'
import { useSelector } from 'react-redux'
import makeStyles from '@mui/styles/makeStyles'
import { Typography, Grid, Box, Avatar, IconButton, Button } from '@mui/material'
import { CheckBoxOutlineBlank as Checkbox } from '@mui/icons-material'
import { CheckBoxRounded as CheckboxChecked } from '@mui/icons-material'
import { DeliveryDining } from '@mui/icons-material'

import { useTheme, Theme } from '@mui/material/styles'
import { StoreState, Container, Store } from '../../interactions/reducers/containerReducer'
import ShopCard from '../../components/ShopCard'
import ContainerCard from '../../components/ContainerCard'
import storePng from '../../assets/store-icon.png'
import Confirmation from '../../components/Confirmation'

const Home = (): ReactElement => {
  const classes = useStyles()
  const theme = useTheme()
  const [selectedContainers, setSelectedContainers] = useState<string[]>([])
  const bikeStock = useSelector<StoreState, Container[]>((state) => state.bikeStock)
  const stores = useSelector<StoreState, Store[]>((state) => state.stores).sort((a, b) => (a.id > b.id ? 1 : -1))

  const handleSelect = (containerId: string) => {
    if (selectedContainers.includes(containerId)) {
      setSelectedContainers((sel) => sel.filter((s) => s !== containerId))
    } else {
      setSelectedContainers((sel) => [...sel, containerId])
    }
  }
  const handleSelectAll = () => {
    if (selectedContainers.length === bikeStock.length) {
      setSelectedContainers([])
    } else {
      const containerIds = bikeStock.map((c) => c.id)
      setSelectedContainers(containerIds)
    }
  }

  return (
    <Grid container spacing={theme.spacing(1)} overflow="none">
      <Box margin={theme.spacing(2)} width="80vw" >
        <Grid container justifyContent="space-between" marginBottom={theme.spacing(1)}>
          <Typography  variant="h2">
           1st WORD
          </Typography>
          <Typography  variant="h2">
            2nd WORD
          </Typography>
          <Typography  variant="h2">
            3rd WORD
          </Typography>
        </Grid>
      </Box>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    textTransform: 'none',
    marginRight: theme.spacing(1),
  },
}))

export default Home
