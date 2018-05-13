import {Component, OnInit, AfterViewInit} from '@angular/core';
import {LocalStorageService} from '../../services/localstorage.service';
import {HttpService} from '../../services/http.service';

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html',
    styleUrls: ['./conversation.component.scss']
})

export class ConversationComponent implements OnInit {

    public messages = [];
    public newMessageText = '';

    private _socket = new WebSocket('ws://localhost:3001');
    private _userName = this._localStorageService.getUserName();

    constructor(private _localStorageService: LocalStorageService,
        private _httpService: HttpService) {

    }

    ngOnInit() {
        this._httpService.getMessages()
                .subscribe((res) => {
                    console.log('Response', res);
                    this.messages = res;
                  },
                  error => console.log(error)
                );
        this._socket.onmessage = (event) => {
            const incomingMessage = JSON.parse(event.data);
            this.messages.push(incomingMessage);
            console.log('message', incomingMessage);
            console.log(this.messages);
        }
    }

    submit() {
        const outgoingMessage = {
            author: this._userName,
            text: this.newMessageText
        }
        this._socket.send(JSON.stringify(outgoingMessage));
        console.log('submit', outgoingMessage);
    }

}