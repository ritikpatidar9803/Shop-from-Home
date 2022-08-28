export class Product {
    pid:number;
    pname:string;
    description:string;
    price:number;
    image:string;
    stockquantity:number;
    discount:number;
    category:string;
    constructor(pid:number,name:string,description:string,price:number,image:string,stockquantity:number,discount:number,category:string){
        this.pid=pid;
        this.pname=name;
        this.description=description;
        this.price=price;
        this.image=image;
        this.stockquantity=stockquantity;
        this.discount=discount;
        this.category=category;
    }

}
