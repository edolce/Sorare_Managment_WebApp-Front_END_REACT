class PersonalData{

    static async fetchPersonalBundles() {
        return await fetch(
            "http://127.0.0.1:8000/bundles/init/", {
                mode: 'cors',
                method: 'GET',
                contentType: 'application/json; charset=utf-8'
            })
            .then((res) => res.json())
    }

}

export default PersonalData