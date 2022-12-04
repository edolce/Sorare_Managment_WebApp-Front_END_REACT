import {Component} from "react";
import BundleCardAuction from "./BundleCardAuction";


class BundlesAuctionsPage extends Component{
    key=0

    constructor(props) {
        super(props);
        this.key=0
    }


    render() {
        return(
            <div className="auctions-bundles-container">
                {
                    this.props.bundles?.map(
                        bundle => (
                        <BundleCardAuction key={this.key++} data-key={this.key} bundle={bundle} playersPriceData={this.props.playersPriceData} openPopUp={() => this.props.openPopUp(bundle)}/>
                    ))
                }
            </div>
        )
    }

}

export default BundlesAuctionsPage