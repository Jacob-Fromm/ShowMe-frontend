import React from "react"
import ComedianPreview from "../Components/ComedianPreview"
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import ComedianProfileContainer from "./ComedianProfileContainer"
import {getShows, getComics} from "../Redux/actions"

class ComediansContainer extends React.Component {
    
    // componentDidMount() {
    //     this.props.fetchShows()
    //     this.props.fetchComics()
    // }

    render() {
        console.log("comedian container props", this.props)
        return (

            <>
                <h1>Comedians Container</h1>

                {this.props.comedians.length === 0 ? <h1>LOADING</h1> :

                    <Switch>
                        <Route path="/comedians/:id" render={({ match }) => {
                            let id = parseInt(match.params.id)
                            let foundComedian = this.props.comedians.find((comic) => comic.id === id)
                            return <ComedianProfileContainer comedian={foundComedian} />
                        }} />
                        <Route path="/comedians" render={() => {
                            const comedians = this.props.comedians.map(comedianObj => <ComedianPreview key={comedianObj.id} id={comedianObj.id} comedian={comedianObj} name={comedianObj.name} website={comedianObj.personal_website} headshot={comedianObj.headshot} city={comedianObj.city} />)
                            return (
                                <>
                                    {this.props.comedians.length === 0 ? <h1>LOADING</h1> : comedians}
                                </>
                            )
                        }} />
                    </Switch>
                }

            </>
        )

    }

}

// const mdp = (dispatch) => {
//     return {fetchShows: () => dispatch(getShows()), fetchComics: () => dispatch(getComics())}
    
// }

const msp = (state) => {
    console.log("current redux state:", state)
    return {comedians: state.comedians, shows: state.shows}
}

export default connect(msp)(ComediansContainer)