import { ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'finder-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}
  submit() {
    console.log();
    if (this.authService.login({ name: this.form.value.username, password: this.form.value.password })) {
      this.router.navigate(['/file-manager']);
    }
  }
}
