export class User {
    id:number;
    username:string;
    email:string;
    password:string;
    phone:string;
    role:string;
    address:string;
    constructor(id:number,username:string,email:string,password:string,phone:string,role:string,address:string){
        this.id=id;
        this.username=username;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.role=role;
        this.address=address;
    }
}
