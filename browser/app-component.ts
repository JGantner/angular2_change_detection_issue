import {Component} from 'angular2/core';
import {SecurityLevelIndicator} from './security-level-indicator-component';

@Component({
    selector: 'my-app',
    template: `
        <security-level-indicator></security-level-indicator>
        <h1>App is Running</h1>
    `,
    directives: [SecurityLevelIndicator]
})
export class AppComponent {
    constructor(){

    }
}
