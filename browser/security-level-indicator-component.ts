import {Component} from 'angular2/core';
import {ChangeDetectorRef} from 'angular2/core';

@Component({
    selector: 'security-level-indicator',
    template: `<p *ngIf="hardwarePresent">Encryption Hardware Present</p>`
})
export class SecurityLevelIndicator {
    hardwarePresent = false;

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        setInterval(() => {
            // noop
            // set interval needed by angular to trigger the change detection
        }, 1000);
        ipcRenderer.on('hardware-event', (event) => {
            console.log('new hardware event:', event);
            this.hardwarePresent = true;
            this.changeDetectorRef.markForCheck();
        });
    }
}
