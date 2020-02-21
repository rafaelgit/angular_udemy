import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password: string;
  msg: string;
  status: string;

  constructor(public router: Router) {}

  ngOnInit(): void {
  }


  logInUser(){
    if (this.username.toLowerCase() == "admin" && this.password.toLowerCase() == "admin")
    {
      // console.log("Welcome...." + this.username )
      // alert("Welcome...." + this.username )
      this.status = "success"
      this.msg = "Usuário Validado! Redirecionando..."
      // window.location.href = '/home';
      // this.router.navigateByUrl('/home');
      // this.router.navigateByUrl('/home', { state: { username: this.username } });
      this.router.navigate(['home'], {state: {username: this.username}});
    } else {
      // alert("Usuário ou Senha incorretas....")
      this.status = "danger"
      this.msg = "Nome de usuário ou senha incorretos"
      // console.log("Welcome...." + this.username )
    }
  }
}
