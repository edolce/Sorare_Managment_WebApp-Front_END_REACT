import {Component} from "react";
import './App.css';
import BundlesAuctionsPage from "../PAGE - bundlesAuctions/BundlesAuctionsPage";
import Header from "../globalComponents/Header";
import BundlesAuctionsPopUp from "../PAGE - bundlesAuctions/POP-UP/BundlesAuctionsPopUp";
import PersonalPage from "../PAGE - personalPage/PersonalPage";
import PersonalPagePopUp from "../PAGE - personalPage/POP-UP/PersonalPagePopUp";
import BundlesAuctionData from "../DATA - fetch/BundlesAuctionData";
import PersonalData from "../DATA - fetch/PersonalData";


class App extends Component {

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }

    openPopUp(bundle){
        this.setState({
            showPopUp: true,
            popUpBundle: bundle
        })
    }

    closePopUp(){
        this.setState({
            showPopUp: false,
            popUpBundle: null
        })
    }

    componentDidMount() {
        if(!this.isFetched){
            this.isFetched=true
            //BundlesAuctionData.fetchBundles().then(r => this.setState(r))
            PersonalData.fetchPersonalBundles().then(r => this.setState({personalBundles:r}))
        }
    }

    render() {
        return (
            <>
                <Header showAuctionsBundles={this.state.showAuctionsBundles} changePage={() => this.setState({showAuctionsBundles: !this.state.showAuctionsBundles})}/>


                {this.state.showAuctionsBundles &&
                    <BundlesAuctionsPage bundles={this.state.auctionsBundles} playersPriceData={this.state.letPlayerAverage} openPopUp={(bundle) => this.openPopUp(bundle)}/>}
                {!this.state.showAuctionsBundles &&
                    <PersonalPage bundles={this.state.personalBundles} openPopUp={(bundle) => this.openPopUp(bundle)}/>}


                {this.state.showAuctionsBundles && this.state.showPopUp &&
                    <BundlesAuctionsPopUp bundle={this.state.popUpBundle} closePopUp={() => this.closePopUp()}/>}
                {!this.state.showAuctionsBundles && this.state.showPopUp &&
                    <PersonalPagePopUp bundle={this.state.popUpBundle} closePopUp={() => this.closePopUp()}/>}
            </>
        )
    }
}

export default App;
