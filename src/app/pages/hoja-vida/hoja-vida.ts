import { Component } from '@angular/core';
import { InformacionPersonal } from '../../components/informacion-personal/informacion-personal';
import { Contacto } from '../../components/contacto/contacto';
import { Formacion } from '../../components/formacion/formacion';
import { Conocimientos } from '../../components/conocimientos/conocimientos';

@Component({
  selector: 'app-hoja-vida',
  standalone: true,
  imports: [
    InformacionPersonal,
    Contacto,
    Formacion,
    Conocimientos
  ],
  templateUrl: './hoja-vida.html',
  styleUrl: './hoja-vida.scss'
})
export class HojaVida {}