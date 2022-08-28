export class Orders {
    ordid:number;
    id:number;
    pid:number;
    datedetails:string;
    constructor(ordid:number,id:number,pid:number,datedetails:string){
        this.ordid=ordid;
        this.id=id;
        this.pid=pid;
        this.datedetails=datedetails;

    }
}
