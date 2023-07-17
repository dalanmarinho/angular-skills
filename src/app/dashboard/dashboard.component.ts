import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillsService } from "../skills.service"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  loading: boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {console.log(ret); this.cards = ret}).add(() => this.loading = false);
  }

}
