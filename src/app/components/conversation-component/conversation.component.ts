import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html',
    styleUrls: ['./conversation.component.scss']
})

export class ConversationComponent implements OnInit {

    private socket = new WebSocket('ws://localhost:3001');
    public newMessageText = '';

    constructor() {

    }

    ngOnInit() {
        this.socket.onmessage = (event) => {
            var incomingMessage = event.data;
            // this.showMessage(incomingMessage); 
            console.log('message', incomingMessage);
        }
    }

    submit() {
        const outgoingMessage = this.newMessageText;
        this.socket.send(outgoingMessage);
        console.log('submit', outgoingMessage);
    }

}