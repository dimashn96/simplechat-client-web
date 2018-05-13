import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../components/dialog-component/dialog.component';
import {LocalStorageService} from '../services/localstorage.service';
import { HttpService } from '../services/http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    name: string;
    interest: string;
    newUser: boolean;

    constructor(public dialog: MatDialog, 
        private _localStorageService: LocalStorageService, 
        private _router: Router,
        private _httpService: HttpService) {

    }

    ngOnInit() {
        const user = this._localStorageService.getUser();
        if (!user.name || !user.interest) {
            this._router.navigate(['']);
            setTimeout(() => this.openDialog());
        }
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogComponent, {
          width: '400px',
          height: '300px',
          data: { name: this.name, interest: this.interest, newUser: this.newUser }
        });
    
        dialogRef.afterClosed().subscribe(result => {
            if (result.newUser) {
                if (!result.name || !result.interest) {
                    this.openDialog();
                }
                console.log('Reg user');
                this._httpService.addUser({name: result.name, interest: result.interest})
                .subscribe((res) => {
                    console.log('User added');
                  },
                  error => console.log(error)
                );
                this._localStorageService.setUser({name: result.name, interest: result.interest});
                this._router.navigate(['conversation']);
            } else {
                if (!result.name) {
                    this.openDialog();
                }
                console.log('Login user');
                this._httpService.getUser(result.name)
                .subscribe((res) => {
                    console.log('Response', res);
                    this._localStorageService.setUser({name: res.name, interest: res.interest});
                    this._router.navigate(['conversation']);
                  },
                  error => console.log(error)
                );
            }
        });
      }

}