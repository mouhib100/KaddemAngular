import { SupportService } from './../../../Support.service';
import { ActivatedRoute } from '@angular/router';
import { Support } from './../../../Support';
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


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
