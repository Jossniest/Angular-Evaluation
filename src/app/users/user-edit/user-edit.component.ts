import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  user = { ...this.userService.usuario };

  OnSubmit(form: NgForm) {
    if (this.user.id == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.userService.PostRequestUsuario(form.value).subscribe(
      (res) => {
        this.resetForm;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    const id = +this.user.id;
    this.userService.PutRequestUsuario(id, form.value).subscribe(
      (res) => {
        this.resetForm;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
    this.user = { ...this.userService.usuario };
  }
}
