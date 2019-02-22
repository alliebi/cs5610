
export class Page {
    _id: string;
    name: string;
    wid: string;
    title: string;

    constructor(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.wid = websiteId;
        this.title = description;
    }
}
