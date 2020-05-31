import React from 'react'
import {Card , CardContent , Typography , Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'


const Cards = ({data : {confirmed , recovered , deaths , lastUpdate}}) =>
{
    if(!confirmed)
    {
        return 'Loading..'
    }
    console.log('hello');
    console.log(confirmed);
    
    return (
        <Grid container spacing={3} justify="center" >

        <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card , styles.infected)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
                <CountUp start= {0} end = {confirmed.value} duration = {2.5} separator = "," />
             </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">no of active cases of covid19</Typography>
        </CardContent>
        </Grid>

        <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card , styles.recovered)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
                <CountUp start= {0} end = {recovered.value} duration = {2.5} separator = "," />
             </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">no of recovered cases of covid19</Typography>
        </CardContent>
        </Grid>


        <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card , styles.deaths)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
                <CountUp start= {0} end = {deaths.value} duration = {2.5} separator = "," />
             </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">no of death cases of covid19</Typography>
        </CardContent>
        </Grid>


        </Grid>
    )
}


export default Cards