import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  btninicio(){
    this.navCtrl.navigateForward(['/docente'])
  }

  btncerrar(){
    this.navCtrl.navigateForward(['/login'])
  }

  btnconfi(){
    this.navCtrl.navigateForward(['/docente'])
  }

}
