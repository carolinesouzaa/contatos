import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato2',
  templateUrl: './contato2.page.html',
  styleUrls: ['./contato2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Contato2Page implements OnInit {

  constructor(

    private router: Router

  ) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['/home'])
  }

}
