import { Component } from '@angular/core';
//these import are for grid
import { Observable } from 'rxjs/Rx';
// import { CategoriesService } from './user.service';

import { State } from '@progress/kendo-data-query';

import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Hello World!';

    private gridData: any[] = [{
      "ProductID":1,
      "ProductName": "mary",
      "UnitPrice" : 18,
      "Discontinued": false
    }];

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
    // this is for grid
    // public view: Observable<GridDataResult>;
    // public state: State = {
    //     skip: 0,
    //     take: 5
    // };
    //
    // constructor(private service: CategoriesService) {
    //     this.view = service;
    //     this.service.query(this.state);
    // }
    //
    // public dataStateChange(state: DataStateChangeEvent): void {
    //     this.state = state;
    //     this.service.query(state);
    // }
}
