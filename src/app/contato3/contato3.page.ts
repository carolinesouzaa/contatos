import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato3',
  templateUrl: './contato3.page.html',
  styleUrls: ['./contato3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Contato3Page implements OnInit {

  constructor(

    private router: Router

  ) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['/home'])
  }

}
