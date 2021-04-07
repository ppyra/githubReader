import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      userName: new FormControl(null, Validators.required)
    })
  }
  onSearch() {
    this.searchForm.controls['userName'].markAsTouched();
    if (!this.searchForm.invalid) {
      this.userService.getUserRepository(this.searchForm.controls['userName'].value);
    }

  }
}
