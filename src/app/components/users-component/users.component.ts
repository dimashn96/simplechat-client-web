import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/localstorage.service';
import {HttpService} from '../../services/http.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

    public users: any;

    constructor(private _httpService: HttpService) {
    }

    ngOnInit() {
        
        this._httpService.getUsers()
                .subscribe((res) => {
                    console.log('Response', res);
                    this.users = res;
                  },
                  error => console.log(error)
                );
    }

}