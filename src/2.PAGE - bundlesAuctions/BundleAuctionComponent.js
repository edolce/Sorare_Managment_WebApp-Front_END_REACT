import {Component} from "react";
import "./BundlesAuctionsPage.css"



function FastCard(props) {
    return (
        <div className="fast-card">
            <span className="name">{props.card.displayName} {props.nameSuffix}</span>
            <span className="risk">{props.card.risk} %</span>
            <span className="floor">{props.priceData.best_market_price.toFixed(4)} ⧫</span>
            <span className="average">{(props.priceData[props.selectionAverage]!==-1?props.priceData[props.selectionAverage]:0).toFixed(4)} ⧫</span>
            {
                //<span className="last">{props.card.lastSold} ⧫</span>
            }
        </div>
    )
}

function Info(props) {
    return (
        <div className="info">
            <span className="key">
                {props.key_}
            </span>
            <span className="value">
                {props.value}
            </span>
        </div>
    );
}

class BundleAuctionComponent extends Component {
    key = 0

    day3Average = 0;
    day7Average = 0;
    day14Average = 0;
    day30Average = 0;
    floorPriceSum = 0;
    bundleSafetyLevel = "safe";

    safetyLevelHELPER = {
        "safe": {
            "info-span": <span className="info-hover" style={{color: "green",position:"relative",top:"2px"}}>✓</span>
        },
        "warning": {
            "info-span": <span className="info-hover" style={{color: "orange"}}>⚠</span>
        },
        "not_safe": {
            "info-span": <span className="info-hover" style={{color: "red"}}>⚠</span>
        }
    }

    //Store the warnings for each player
    playersAveragesInfos = {};

    //Store the infos to display
    infosToDisplay = [];

    //Store the averages
    averages = {};

    constructor(props) {
        super(props);
        //Initialize the state
        this.state = {
            earningSelection: "3_days",
            daySelectionIndex: "3_days",
            floorEarnings: 0,
            day3Earnings: 0,
            day7Earnings: 0,
            day14Earnings: 0,
            day30Earnings: 0,
            displayInfo: []
        }

        this.key = 0;



        //Calculate the averages
        for (let playerName in this.props.playersPriceData) {
            if (this.props.bundle.cards.map(card => card.displayName).includes(playerName)) {
                this.day3Average += (this.props.playersPriceData[playerName]["3_days"] !== -1 ? this.props.playersPriceData[playerName]["3_days"] : 0);
                this.day7Average += (this.props.playersPriceData[playerName]["7_days"] !== -1 ? this.props.playersPriceData[playerName]["7_days"] : 0);
                this.day14Average += (this.props.playersPriceData[playerName]["14_days"] !== -1 ? this.props.playersPriceData[playerName]["14_days"] : 0);
                this.day30Average += (this.props.playersPriceData[playerName]["30_days"] !== -1 ? this.props.playersPriceData[playerName]["30_days"] : 0);
                this.floorPriceSum += this.props.playersPriceData[playerName].best_market_price;

                //Error checking, if a player doesn't have a price, then it is in a warning state (if all prices are missing, then it is not safe)
                this.checkValidity(this.props.playersPriceData[playerName],playerName, "3_days");
                this.checkValidity(this.props.playersPriceData[playerName],playerName, "7_days");
                this.checkValidity(this.props.playersPriceData[playerName],playerName, "14_days");
                this.checkValidity(this.props.playersPriceData[playerName],playerName, "30_days");
                this.checkValidity(this.props.playersPriceData[playerName],playerName, "best_market_price");
            }
        }

        //Check all bundle safetyState
        for (let playerName in this.playersAveragesInfos) {
            //if a play has no floor price, no 3-day average, no 7-day average, no 14-day average, no 30-day average, then it is not safe
            let player = this.playersAveragesInfos[playerName];
            if (player["3_days"].safetyLevel === "warning" &&
                player["7_days"].safetyLevel === "warning" &&
                player["14_days"].safetyLevel === "warning" &&
                player["30_days"].safetyLevel === "warning" &&
                player["floor"].safetyLevel === "warning") {
                player["3_days"]["safetyLevel"] = "not_safe";
                player["7_days"]["safetyLevel"] = "not_safe";
                player["14_days"]["safetyLevel"] = "not_safe";
                player["30_days"]["safetyLevel"] = "not_safe";
                player["floor"]["safetyLevel"] = "not_safe";
                player.safetyLevel = "not_safe";
                this.bundleSafetyLevel = "not_safe";
            }
            else if (
                player["3_days"].safetyLevel === "warning" ||
                player["7_days"].safetyLevel === "warning" ||
                player["14_days"].safetyLevel === "warning" ||
                player["30_days"].safetyLevel === "warning" ||
                player["floor"].safetyLevel === "warning") {
                player.safetyLevel = "warning";
                if(this.bundleSafetyLevel !== "not_safe")
                    this.bundleSafetyLevel = "warning";
            }else {
                player.safetyLevel = "safe";
            }
        }

        //Choose which info to display
        for (let playerName in this.playersAveragesInfos) {
            let player = this.playersAveragesInfos[playerName];
            if (player.safetyLevel==="not_safe") {
                this.infosToDisplay.push({
                    safetyLevel: player["3_days"].safetyLevel,
                    string: player["3_days"].string
                });
                this.infosToDisplay.push({
                    safetyLevel: player["7_days"].safetyLevel,
                    string: player["7_days"].string
                });
                this.infosToDisplay.push({
                    safetyLevel: player["14_days"].safetyLevel,
                    string: player["14_days"].string
                });
                this.infosToDisplay.push({
                    safetyLevel: player["30_days"].safetyLevel,
                    string: player["30_days"].string
                });
                this.infosToDisplay.push({
                    safetyLevel: player["floor"].safetyLevel,
                    string: player["floor"].string
                });
            }
            else if (player.safetyLevel==="warning") {
                if (player["3_days"].safetyLevel==="warning")
                    this.infosToDisplay.push({
                        safetyLevel: player["3_days"].safetyLevel,
                        string: player["3_days"].string
                    });

                if (player["7_days"].safetyLevel==="warning")
                    this.infosToDisplay.push({
                    safetyLevel: player["7_days"].safetyLevel,
                    string: player["7_days"].string
                });

                if (player["14_days"].safetyLevel==="warning")
                    this.infosToDisplay.push({
                    safetyLevel: player["14_days"].safetyLevel,
                    string: player["14_days"].string
                });

                if (player["30_days"].safetyLevel==="warning")
                    this.infosToDisplay.push({
                    safetyLevel: player["30_days"].safetyLevel,
                    string: player["30_days"].string
                });

                if (player["floor"].safetyLevel==="warning")
                    this.infosToDisplay.push({
                    safetyLevel: player["floor"].safetyLevel,
                    string: player["floor"].string
                });
            }
            else {
                this.infosToDisplay.push({
                    safetyLevel: "safe",
                    string: "All prices of " + playerName + " are safe"
                });
            }
        }


        this.floorEarnings= this.floorPriceSum - this.props.bundle.minNextBid/ Math.pow(10, 18);
        this.day3Earnings= this.day3Average - this.props.bundle.minNextBid/ Math.pow(10, 18);
        this.day7Earnings= this.day7Average - this.props.bundle.minNextBid/ Math.pow(10, 18);
        this.day14Earnings= this.day14Average - this.props.bundle.minNextBid/ Math.pow(10, 18);
        this.day30Earnings= this.day30Average - this.props.bundle.minNextBid/ Math.pow(10, 18);

        this.averages = {
            "3_days": ["3", this.day3Average],
            "7_days": ["7", this.day7Average],
            "14_days": ["14", this.day14Average],
            "30_days": ["30", this.day30Average]
        }

        this.ernings = {
            "3_days": ["3G", this.day3Earnings],
            "7_days": ["7G", this.day7Earnings],
            "14_days": ["14G", this.day14Earnings],
            "30_days": ["30G", this.day30Earnings],
            "floor": ["FLOOR", this.floorEarnings]
        }


        this.timer = setInterval(() => {
            const startDateString = this.props.bundle.endDate;
            const endDate = new Date(startDateString);
            const startDate = new Date();
            const timeDifference = endDate.getTime() - startDate.getTime();
            const seconds = Math.floor((timeDifference / 1000) % 60);
            const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const timeLeftString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            // Output: 39:47:00
            this.setState({ timeRemaining:  timeLeftString});
        }, 1000);


    }

    checkValidity(playersPriceDatum,playerName, type) {
        if(!this.playersAveragesInfos[playerName])
            this.playersAveragesInfos[playerName]={}
        //-1 o 0 means that the player has no price
        if(playersPriceDatum[type] === -1 || playersPriceDatum[type] === 0 || playersPriceDatum[type] === undefined) {
            type = type==="best_market_price"?"floor":type;
            this.playersAveragesInfos[playerName][type] = {safetyLevel:"warning", string:`${playerName} has no ${type} average`}
        }else {
            type = type==="best_market_price"?"floor":type;
            this.playersAveragesInfos[playerName][type] = {safetyLevel:"safe", string:`${playerName} has a ${type} average`}
        }
    }

    changeView() {
        if(this.state.earningSelection.includes("days")){
            this.setState({earningSelection: "floor"})
        }else {
            this.setState({earningSelection: this.state.daySelectionIndex})
        }
    }

    changeDaySelection(day) {
        this.setState({daySelectionIndex:day});
        if (this.state.earningSelection.includes("days")) {
            this.setState({earningSelection: day})
        }
    }

    render() {
        if((this.props.hideNotSafe && this.bundleSafetyLevel==="safe") || !this.props.hideNotSafe)
        return (
            <div className="bundle">
                <div className="bookmarks">
                    <span>{this.averages[this.state.daySelectionIndex][0] + "G"}</span>
                </div>
                <div className="info-circle info-hover"> {this.safetyLevelHELPER[this.bundleSafetyLevel]["info-span"]} </div>
                <div className="info-circle-dropdown">
                    <div className="info-circle-dropdown-title">
                        INFO
                    </div>
                    <div className="info-circle-dropdown-content">
                        {
                            this.infosToDisplay.map(
                                info => (
                                    <div className="info-circle-dropdown-content-item">
                                        {this.safetyLevelHELPER[info.safetyLevel]['info-span']} <span>{info.string}</span>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
                <div className="top-side">
                    <div className="emblem-container">
                        <img src={this.props.bundle.emblem} alt="emblem" className="emblem"/>
                    </div>
                    <div className="fast-cards-container" onClick={this.props.openPopUp}>
                        {
                            this.props.bundle.cards?.map(
                                card => (
                                    <FastCard key={this.key++} data-key={this.key} card={card}
                                              selectionAverage={this.state.daySelectionIndex}
                                              priceData={this.props.playersPriceData[card.displayName]}
                                              nameSuffix={this.safetyLevelHELPER[this.playersAveragesInfos[card.displayName].safetyLevel]["info-span"]}
                                    />
                                ))
                        }
                    </div>
                </div>
                <div className="bottom-side">
                    <div className="left-side">
                        <div className="infos-container">
                            <Info key_="PREZZO ATTUALE"
                                  value={(this.props.bundle.currentPrice / Math.pow(10, 18)).toFixed(4) + " ETH"}/>
                            <div className="bar-y"/>
                            <Info key_={"SOMMA FLOOR " + this.averages[this.state.daySelectionIndex][0] + "G"}
                                  value={this.averages[this.state.daySelectionIndex][1].toFixed(4) + " ETH"}/>
                            <div className="bar-y"/>
                            <Info key_="RISCHIO VENDITA" value="10 %"/>
                            <div className="bar-y"/>
                        </div>
                        <div className="average-selection-container">
                            <button className="average-selection-button" onClick={()=>this.changeDaySelection("3_days")}>
                                3G
                            </button>
                            <button className="average-selection-button" onClick={()=>this.changeDaySelection("7_days")}>
                                7G
                            </button>
                            <button className="average-selection-button" onClick={()=>this.changeDaySelection("14_days")}>
                                14G
                            </button>
                            <button className="average-selection-button" onClick={()=>this.changeDaySelection("30_days")}>
                                30G
                            </button>
                        </div>
                        <button className="buy-button">
                            COMPRA
                        </button>
                    </div>
                    <div className="bar-x"/>
                    <div className="right-side">
                        <div className="infos-container">
                            <Info key_="MINIMA PUNTATA"
                                  value={(this.props.bundle.minNextBid / Math.pow(10, 18)).toFixed(4) + " ETH"}/>
                            <div className="bar-y"/>
                            <Info key_={"GUADAGNO "+this.ernings[this.state.earningSelection][0]} value={this.ernings[this.state.earningSelection][1].toFixed(4)+" ETH"}/>
                            <div className="bar-y"/>
                            <Info key_="TEMPO RIMANENTE" value={this.state.timeRemaining}/>
                            <div className="bar-y"/>
                        </div>
                        <div className="change-view-button-container">
                            <button className="change-view-button" onClick={() => this.changeView()}>
                                CHANGE
                            </button>
                        </div>
                        <button className="fav-button">
                            AGGIUNGI AI PREFERITI
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BundleAuctionComponent