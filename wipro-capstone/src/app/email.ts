export class Email {
    recipient:string;
    msgBody:string;
    subject:string;
    constructor(recipient:string,msgBody:string,subject:string){
        this.recipient=recipient;
        this.msgBody=msgBody;
        this.subject=subject;
    }
}
