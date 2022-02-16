import React, { ReactElement } from 'react'
import { Link as RouterLink, useParams, useHistory } from 'react-router-dom'
import { Paper, Link, Typography, Grid, Box, Card, CardContent, CardMedia, Avatar, Chip } from '@mui/material'
import { Theme, useTheme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { Store } from '../interactions/reducers/containerReducer'
import storePng from '../assets/store-icon.png'
import recipient1 from '../assets/Container-format-1.png'
import ShopOverlay from './ShopDetailOverlay'

interface ParamTypes {
  shopId: string
}

const ShopCard = (shop: Store): ReactElement => {
  const classes = useStyles()
  const history = useHistory()
  const theme = useTheme()
  const { shopId } = useParams<ParamTypes>()
  console.log(shop)
  return (
    <Grid item xs={8} sm={4}>
      <Link to={`/dashboard/${shop.id}`} component={RouterLink}>
        <Card elevation={0} sx={{ display: 'flex', maxWidth: '250px', padding: theme.spacing(1) }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="img" sx={{ width: 60 }} image={storePng} alt="shop" />
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {shop.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {shop.isVisited ? 'visited' : 'not visited'}
              </Typography>
              <Box>
                {shop.containers.length > 0 &&
                  shop.containers.map((c) => (
                    <Chip size="small" key={c.name} label={c.name} avatar={<Avatar src={recipient1} />} />
                  ))}
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Link>
      {!!shopId && shopId === shop.id && <ShopOverlay shop={shop} onClose={() => history.push('/dashboard')} />}
    </Grid>
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

export default ShopCard
