import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XNotificationComponent } from './x-notification.component';

describe('XNotificationComponent', () => {
    let component: XNotificationComponent;
    let fixture: ComponentFixture<XNotificationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [XNotificationComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(XNotificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
