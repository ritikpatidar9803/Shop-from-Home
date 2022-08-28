export class Wishlist {
    wid:number;
    id:number;
    pid:number;
    pname:string;
    description:string;
    price:number;
    image:string;

    constructor(wid:number,id:number,pid:number,pname:string,description:string,price:number,image:string){
        this.wid=wid;
        this.id=id;
        this.pid=pid;
        this.pname=pname;
        this.description=description;
        this.price=price;
        this.image=image;
    }
}
