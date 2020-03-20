import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  constructor(public service:UserService) { }
  
  

  ngOnInit(): void {
    this.service.userInst={
    id:0,
    firstName:null,
    lastName:null,
    email:null,
    password:null
    }
  }

    submit(){
      this.service.postUser().subscribe(res=>{
        this.service.getAllUsers();
      },
      err=>{
        console.log(err)
      })
    }
    

}
