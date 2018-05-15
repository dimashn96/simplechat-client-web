import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/localstorage.service';
import {HttpService} from '../../services/http.service';

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html',
    styleUrls: ['./conversation.component.scss']
})

export class ConversationComponent implements OnInit {

    constructor(private _localStorageService: LocalStorageService,
        private _httpService: HttpService) {
    }

    ngOnInit() {
        
    }

}