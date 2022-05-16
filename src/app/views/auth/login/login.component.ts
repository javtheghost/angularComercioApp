import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api/api.service';
import { LoginI } from 'src/app/models/login.interface';
import { ResponseI } from 'src/app/models/response.interface';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //son iguales a los formcontrolls del login.component.html
  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })
  constructor( private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form: LoginI){
    this.api.loginByEmail(form).subscribe(data =>{
      console.log(data)

      this.router.navigate(['home']);

    })
  }

}
