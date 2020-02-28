export default class Service {
    constructor() {
        this._apiBase = "http://localhost:8080";
    }

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            throw new Error(`Loading... `)
        }
        return await response.json();
    };

    getAllGroups = async () => {
        return await this.getResource('/api/groups')
    };

    getGroupById = async id => {
        return await(await fetch(`${this._apiBase}/api/group/` + id)).json();
    };

    removeServiceGroupById = async id => {
        return await(await fetch(`${this._apiBase}/api/group/` + id, {method: `DELETE`}));
    };

    saveGroup = async (item) => {
        return await fetch(`${this._apiBase}/api/group/`, {
            method: `POST`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    };


    editGroup = async item => {
        return await fetch(`${this._apiBase}/api/group/` + item.id, {
            method: `PUT`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    };
}