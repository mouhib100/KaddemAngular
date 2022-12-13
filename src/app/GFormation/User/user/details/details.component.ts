import { SupportService } from './../../../Support.service';
import { Support } from './../../../Support';
import { ActivatedRoute } from '@angular/router';
//import { Employee } from './../../../../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number
  Supports: Support
  constructor(private route: ActivatedRoute, private Services: SupportService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

//   this.Supports = new Support();
    this.Services.getSupportById(this.id).subscribe( data => {
      this.Supports = data;
    });
  }

}
