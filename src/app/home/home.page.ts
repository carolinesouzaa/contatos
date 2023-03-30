import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(

    private router: Router

  ) {}

  navegacao() {
    this.router.navigate(["/contato"])
  }

  navegacao2() {
    this.router.navigate(["/contato2"])
  }

  navegacao3() {
    this.router.navigate(["/contato3"])
  }

  navegacao4() {
    this.router.navigate(["/contato4"])
  }

  navegacao5() {
    this.router.navigate(["/contato5"])
  }
}
