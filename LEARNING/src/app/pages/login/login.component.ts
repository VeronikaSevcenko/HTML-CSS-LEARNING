import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.builderForm();
  }

  builderForm(): void{
      this.loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.min(3)]],
        password: ''
      })
  }

  login(): void{
    if (this.loginForm.invalid){
      return;
    }

    this.loginService.login(this.loginForm.value)
  }

}
