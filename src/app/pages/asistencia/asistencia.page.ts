import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
  }

  btninicio(){
    this.navCtrl.navigateBack(['/docente'])
  }

  btncerrar(){
    this.navCtrl.navigateBack(['/login'])
  }


}
