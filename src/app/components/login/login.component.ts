import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

type Status = 'VALID' | 'INVALID';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = new FormControl('', Validators.required);
  status$: Observable<Status>;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.status$ = this.name.statusChanges;
  }

  signIn(): void {
    this.authService.signIn(this.name.value);
    this.router.navigate(['/notes']);
  }
}
