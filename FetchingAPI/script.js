class RickAndMorty {
    constructor() {
        this.getCharacter = this.getCharacter.bind(this)
        this.getEpisode = this.getEpisode.bind(this)
    }
    getCharacter(id) {
        if (!id || isNaN(id) || !isFinite(id) || id < 0) {
            throw new Error()
        }
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                return null
            } 
            return data
        })
        .catch((err) => console.log(err))   
    }
    async getEpisode(id) {
        if (!id || isNaN(id) || !isFinite(id) || id < 0 ) {
            throw new Error()
        } 
        try { 
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`) 
            const data = await response.json()
            if (data.error) {
                return null
            }
            return data 
        } catch (error) {
            console.log(error)
        }   
    }
}