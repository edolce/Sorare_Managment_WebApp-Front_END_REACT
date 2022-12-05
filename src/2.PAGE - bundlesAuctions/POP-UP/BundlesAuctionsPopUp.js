import {Component} from "react";
import BundleAuctionComponent from "../BundleAuctionComponent";
import AuctionCardPopUp from "./AuctionCardPopUp";
import "./BundlesAuctionPopUp.css"

class BundlesAuctionsPage extends Component{
    key=0

    constructor(props) {
        super(props);
        this.key=0
    }


    render() {
        return(
            <>
                <div className="auctions-bundles-popup-pseudo-container"/>
                <div className="auctions-bundles-popup-container">
                    <div className="close-button" onClick={() => this.props.closePopUp()}>
                        CLOSE
                    </div>
                    {
                        this.props.bundle.cards?.map(
                            card => (
                            <AuctionCardPopUp key={this.key++} data-key={this.key} card={card}/>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default BundlesAuctionsPage