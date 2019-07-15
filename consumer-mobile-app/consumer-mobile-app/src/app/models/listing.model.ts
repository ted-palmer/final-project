export class Listing {
    public id: number;
    public name: string;
    public location: string;
    public price: number;
    public imgUrl: string;

    constructor(id,name,location,price,imgUrl){
        this.id = id;
        this.name = name;
        this.location = location;
        this.price = price;
        this. imgUrl = imgUrl;
    }
    
}