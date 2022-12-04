class BundlesAuctionData {

    static async fetchBundles() {
        let json
        json = await fetch(
            "http://127.0.0.1:8000/bundles/")
            .then((res) => res.json())

        let auctionsBundles = this.dateSortBundles(json)

        console.log(auctionsBundles)

        let playersSlug = []
        json?.map(bundle => bundle["cards"].map(card => {
            if (!playersSlug.includes(card["displayName"])) playersSlug.push(card["displayName"])
        }))

        console.log(playersSlug)

        let letPlayerAverage = await this.fetchPlayersData(playersSlug)
        return {auctionsBundles, letPlayerAverage}
    }

    static async fetchPlayersData(playersSlug) {
        return await fetch(
            "http://127.0.0.1:8000/bundles/getPlayersAverage/", {
                mode: 'cors',
                method: 'POST',
                contentType: 'application/json; charset=utf-8',
                body: JSON.stringify(playersSlug)
                //headers: { 'names': escape(JSON.stringify(playersSlug))}
            })
            .then((res) => res.json())
    }

    static dateSortBundles(json) {
        let bundlesSorted = [...json]
        bundlesSorted.sort((a, b) => new Date(a["endDate"]).getTime() - new Date(b["endDate"]).getTime())
        return bundlesSorted
    }

}

export default BundlesAuctionData