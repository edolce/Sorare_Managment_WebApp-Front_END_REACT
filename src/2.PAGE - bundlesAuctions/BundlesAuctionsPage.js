import {Component} from "react";
import BundleAuctionComponent from "./BundleAuctionComponent";


class BundlesAuctionsPage extends Component{
    key=0

    constructor(props) {
        super(props);

        this.state = {
            hideNotSafe: false,
            sortedByTime: true
        }

        this.key=0
    }

    filterByFunction = () => {
            this.props.bundles.sort((a, b) => {
                if(this.state.sortedByTime){
                    return  b.currentPrice - a.currentPrice
                }else{
                    return   new Date(a.endDate).getTime() -new Date(b.endDate).getTime()
                }
            })
    }

    render() {
        return(
            <>
                <div className="filter-options">
                    <div className="hide-not-safe filter-option">
                        <label className="filter-option-text" htmlFor="hide-not-safe">{this.state.hideNotSafe?"Show All":"Hide Not Safe"}</label>
                        <input className="filter-option-text" type="checkbox" id="hide-not-safe" name="hide-not-safe" onChange={() => this.setState({hideNotSafe: !this.state.hideNotSafe})}/>
                    </div>
                    <div className="sort-by filter-option">
                        <label className="filter-option-text" htmlFor="sort-by">{this.state.sortedByTime?"Sorted By Time":"Sorted By Price"}</label>
                        <input className="filter-option-text" type="checkbox" id="sort-by" name="sort-by" onChange={() => {this.setState({sortedByTime: !this.state.sortedByTime});this.filterByFunction()}}/>
                    </div>
                </div>
                <div className="auctions-bundles-container">
                    {
                        this.props.bundles?.map(
                            bundle => (
                            <BundleAuctionComponent key={this.key++} data-key={this.key} bundle={bundle} playersPriceData={this.props.playersPriceData} openPopUp={() => this.props.openPopUp(bundle)} hideNotSafe={this.state.hideNotSafe}/>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default BundlesAuctionsPage