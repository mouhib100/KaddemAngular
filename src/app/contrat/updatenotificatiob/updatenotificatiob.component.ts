import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-updatenotificatiob',
  templateUrl: './updatenotificatiob.component.html',
  styleUrls: ['./updatenotificatiob.component.css']
})
export class UpdatenotificatiobComponent implements OnInit {

  @Output()
  RefreshNotif= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  RefreshClicked(){
    this.RefreshNotif.emit("Table Contrat Mise a jour")
  }
}
