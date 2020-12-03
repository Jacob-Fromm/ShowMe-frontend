import React, {Component} from "react"
import ComedianPreview from "../Components/ComedianPreview"
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import ComedianProfileContainer from "./ComedianProfileContainer"
import {getShows, getComics} from "../Redux/actions"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        direction: "row",
        justify: "center",
        flexGrow: 1,
        display: "flex",
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ComediansContainer =  (props) => {
    const classes = useStyles();
    console.log("comedian container props", props)
    return (
        <>

        <div className="welcome-page">

            {props.comedians.length === 0 ? <h1>LOADING</h1> :

                <Switch>
                    <Route path="/comedians/:id" render={({ match }) => {
                        let id = parseInt(match.params.id)
                        let foundComedian = props.comedians.find((comic) => comic.id === id)
                        return <ComedianProfileContainer comedian={foundComedian} />
                    }} />
                    <Route path="/comedians" render={() => {
                        const comedians = props.comedians.map(comedianObj => <ComedianPreview className={classes.card}  key={comedianObj.id} id={comedianObj.id} comedian={comedianObj} name={comedianObj.name} website={comedianObj.personal_website} headshot={comedianObj.headshot} city={comedianObj.city} />)
                        return (
                            <>
                                {props.comedians.length === 0 ? 
                                    <h1>LOADING</h1> 
                                :
                                    <div className={classes.root}>
                                        <Grid container spacing={3} align="center" direction="row"
                                            justifyContent="center"
                                            alignItems="center" >
                                                {props.comedians.map(comedianObj => <Grid item xs={3} sm={3}><ComedianPreview className={classes.card} key={comedianObj.id} id={comedianObj.id} comedian={comedianObj} name={comedianObj.name} website={comedianObj.personal_website} headshot={comedianObj.headshot} city={comedianObj.city} /> </Grid>)}
                                                    {/* {comedians} */}
                                           
                                        </Grid>
                                    </div>
                                }
                            </>
                        )
                    }} />
                    <Route path="/welcome" render={() => {
                        const comedians = props.comedians.map(comedianObj => 
                    
                            <ComedianPreview key={comedianObj.id} id={comedianObj.id} comedian={comedianObj} name={comedianObj.name} website={comedianObj.personal_website} headshot={comedianObj.headshot} city={comedianObj.city} />)
                        return (
                            <>
                            <div >
                                    {props.comedians.length === 0 ? 
                                        <h1>LOADING</h1> 
                                :
                                    <div>
                                        <Grid container spacing={3}
                                                justifyContent="center"
                                                alignItems="flex-start">
                                        {props.comedians.map(comedianObj =>
                                            <Grid item xs={3} sm={3}><ComedianPreview key={comedianObj.id} id={comedianObj.id} comedian={comedianObj} name={comedianObj.name} website={comedianObj.personal_website} headshot={comedianObj.headshot} city={comedianObj.city} /></Grid>)}
                                        </Grid>
                                    </div>
                                }
                            </div>
                            </>
                        )
                    }} />
                </Switch>

                
            }

        </div>
            {/* <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div> */}
        </>
    )

    

}

// const mdp = (dispatch) => {
//     return {fetchShows: () => dispatch(getShows()), fetchComics: () => dispatch(getComics())}
    
// }

const msp = (state) => {
    console.log("current redux state:", state)
    return {comedians: state.comedians, shows: state.events}
}

export default connect(msp)(ComediansContainer)