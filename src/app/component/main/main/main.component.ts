import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tableau:any = [];
  constructor() { }

  ngOnInit(): void {
    this.generate()
  }

  generate(){
    for(let i=0;i < 8; i++){
      this.tableau[i]={'employe':'employe'+i, "disponibilite":(i%3==0? 'occupé': (i%2==0? 'moyen':'disponible')), 'heures':i*5};
    }
  }
  clicked(){
    console.log("clické")
  }
}
