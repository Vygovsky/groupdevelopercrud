export default class Service {
    constructor() {
        this._apiBase = "http://localhost:8080";
    }

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`)
        if (!response.ok) {
            throw new Error(`Loading... `)
        }
        return await response.json();
    };

    getAllGroups = async () => {
        return await this.getResource('/api/groups')
    }

}