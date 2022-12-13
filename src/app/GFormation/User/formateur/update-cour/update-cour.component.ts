import { Router, ActivatedRoute } from '@angular/router';
import { SupportService } from './../../../Support.service';
import { Support } from './../../../Support';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-cour',
  templateUrl: './update-cour.component.html',
  styleUrls: ['./update-cour.component.css']
})
export class UpdateCourComponent implements OnInit {
  id: number;
  Fcour: Support ;
  constructor(private Services: SupportService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.Services.getSupportById(this.id).subscribe(data => {
      this.Fcour = data;
    }, error => console.log(error));
  }

  onSubmit(){
      this.Services.updateSupport(this.Fcour).subscribe( data =>{
    }
    , error => console.log(error));
  }




}
