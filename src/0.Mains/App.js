import {Component} from "react";
import './App.css';
import BundlesAuctionsPage from "../2.PAGE - bundlesAuctions/BundlesAuctionsPage";
import Header from "../1.HEADER/Header";
import BundlesAuctionsPopUp from "../2.PAGE - bundlesAuctions/POP-UP/BundlesAuctionsPopUp";
import PersonalPage from "../2.PAGE - personalPage/PersonalPage";
import PersonalPagePopUp from "../2.PAGE - personalPage/POP-UP/PersonalPagePopUp";
import PersonalData from "../DATA - fetch/PersonalData";

//MAIN APP PAGE

class App extends Component {

    //Fetched boolean to check if data is fetched correctly
    isFetched = false

    constructor(props) {
        super(props);
        this.state = {
            showAuctionsBundles: false,
            showPopUp: false,
            popUpBundle: null,
            auctionsBundles: null,
            personalBundles: [
                {
                    cards: [{
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "NOT CONT",
                        price: 0.1234,
                        date: "21-11-2000",
                        contestedTimes: 12
                    }, {
                        playerName: "Andriy Lunin",
                        state: "NOT LISTED",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "CONT",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    },
                    ]
                },
                {
                    cards: [{
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    },
                    ]
                },
                {
                    cards: [{
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    },
                    ]
                },
                {
                    cards: [{
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    },
                    ]
                },
                {
                    cards: [{
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    },
                    ]
                },
                {
                    cards: [{
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    },
                    ]
                },
                {
                    cards: [{
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    },
                    ]
                },
                {
                    cards: [{
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    }, {
                        playerName: "Andriy Lunin",
                        state: "SOLD",
                        price: 0.12,
                        date: "21-11-2000",
                        contestedTimes: 6
                    },
                    ]
                },
            ],
            letPlayerAverage: null
        }

    }

    //
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }

    //Function to activate the open POPUP PROCESS
    openPopUp(bundle){
        this.setState({
            showPopUp: true,
            popUpBundle: bundle
        })
    }

    //Function to activate the close POPUP PROCESS
    closePopUp(){
        this.setState({
            showPopUp: false,
            popUpBundle: null
        })
    }


    // Check if data is not yet Fetched, if not fetch it
    componentDidMount() {
        if(!this.isFetched){
            this.isFetched=true
            //BundlesAuctionData.fetchBundles().then(r => this.setState(r))
            PersonalData.fetchPersonalBundles().then(r => this.setState({personalBundles:r}))
        }
    }


    /*
    * Get current main page of the site.
    * It can be:
    * - Bundles Auctions Page: Shows all active bundle auctions.
    * - Personal Page: Shows all Personal Data.
    * [Output Decision]:Output is decide by showAuctionsBundles BOOL value
    */
    getCurrentMainPage(){
        if(this.state.showAuctionsBundles){
            return(<BundlesAuctionsPage bundles={this.state.auctionsBundles} playersPriceData={this.state.letPlayerAverage} openPopUp={(bundle) => this.openPopUp(bundle)}/>);
        }else{
            return(<PersonalPage bundles={this.state.personalBundles} openPopUp={(bundle) => this.openPopUp(bundle)}/>);
        }
    }


    /*
    * Function that check if there is a pop=up to be displayed, if it is display it.
    * Possible Pop-ups:
    * - Bundle Auctions Pop-Up
    * - Personal Page Pop-up
    * [Output Decision]:Output is decide by showAuctionsBundles e BOOL value
    */
    getPopUp() {

        // If state don't want to shop pop up don't show
        if(!this.state.showPopUp) return;

        if(this.state.showAuctionsBundles){
            return (<BundlesAuctionsPopUp bundle={this.state.popUpBundle} closePopUp={() => this.closePopUp()}/>);
        }else {
            return (<PersonalPagePopUp bundle={this.state.popUpBundle} closePopUp={() => this.closePopUp()}/>);
        }
    }

    render() {
        return (
            <>
                {/*1.HEADER*/}
                <Header showAuctionsBundles={this.state.showAuctionsBundles} changePage={() => this.setState({showAuctionsBundles: !this.state.showAuctionsBundles})}/>

                {/*MAIN CONTENT*/}
                {this.getCurrentMainPage()}

                {/*GET POSSIBLE POP-UP*/}
                {this.getPopUp()}
            </>
        )
    }
}

export default App;
