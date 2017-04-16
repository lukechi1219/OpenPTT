import {Http} from '@angular/http';
import {Component, PipeTransform, Injectable, Pipe} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  data: any;
  detail: string;

  constructor(private http: Http) {
  }

  ngOnInit() {

    const url = '/Ajax.php?ajaxpage=conversation&&num=1239&forumname=Soft_Job';
//    console.info(url);

    this.http.get(url)
      .map(x => x.json())
      .subscribe(
        (data) => this.data = data,
        (err) => console.error(err)
      );

    const url2 = '/ResponesPage.php?u=/bbs/Soft_Job/M.1492279678.A.4EE.html';
//    console.info(url2);

    this.http.get(url2)
      .map(x => x.text())
      .subscribe(
        (data) => {
          this.detail = '<div id=\'pttcontent\' >' + data.split('<div id=\'pttcontent\' >')[1];
        },
        (err) => console.error(err)
      );
  }

}
