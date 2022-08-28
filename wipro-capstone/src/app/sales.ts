export class Sales {
    sid:number;
    datedetails:string;
    id:number;
    pid:number;
    pname:string;
    category:string;
    stockquantity:number;
    price:number;
    constructor(sid:number,datedetails:string,id:number,pid:number,pname:string,Category:string,stockquantity:number,price:number){
        this.sid=sid;
        this.datedetails=datedetails;
        this.id=id;
        this.pid=pid;
        this.pname=pname;
        this.category=Category;
        this.stockquantity=stockquantity;
        this.price=price;
    }

}
