import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selected = 'option2';


  fileToUpload: File = null;
  imageUrl = "";

  handleFileInput(file :FileList) { 
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload )
    var reader = new FileReader(); 
    
    reader.onload=(event:any)=>{ 
      
      this.imageUrl = event.target.result; 
      console.log(this.imageUrl)
    } 
    reader.readAsDataURL(this.fileToUpload);
}
}
