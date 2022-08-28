import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent  {

  constructor(private http:HttpClient,private router:Router) { }
  fileName = '';

selectFile(event:any){
  const file = event.target.files[0];
  if(file){
    
    this.fileName=file
    console.log(this.fileName)
  }
}
onSubmit(){
  const formdata = new FormData()
  formdata.append('file',this.fileName)

  this.http.post<any>("http://localhost:8282/api/csv/upload",formdata).subscribe((res)=>{
    console.log(res), (err: any) =>{
      console.log(err)
    }
  });
  alert("details uploaded successfully");


}
// ngOnInit(): void {
//   this.fileInfos = this.uploadService.getFiles();
// }
// selectedFiles?: FileList;
//   currentFile?: File;
//   progress = 0;
//   message = '';
//   fileInfos?: Observable<any>;
// selectFile(event: any): void {
//   this.selectedFiles = event.target.files;
// }
// upfile(): void {
//   this.progress = 0;
//   if (this.selectedFiles) {
//     const file: File | null = this.selectedFiles.item(0);
//     if (file) {
//       this.currentFile = file;
//       this.uploadService.uploadingfile(this.currentFile).subscribe({
//         next: (event: any) => {
//           if (event.type === HttpEventType.UploadProgress) {
//             this.progress = Math.round(100 * event.loaded / event.total);
//           } else if (event instanceof HttpResponse) {
//             this.message = event.body.message;
//             this.fileInfos = this.uploadService.getFiles();
//           }
//         },
//         error: (err: any) => {
//           console.log(err);
//           this.progress = 0;
//           if (err.error && err.error.message) {
//             this.message = err.error.message;
//           } else {
//             this.message = 'Could not upload the file!';
//           }
//           this.currentFile = undefined;
//         }
//       });
//     }
//     this.selectedFiles = undefined;
//   }
// }
sal(){
  this.router.navigateByUrl('/salesreport');
}
upload(){
  this.router.navigateByUrl('/fileupload');
}

}
