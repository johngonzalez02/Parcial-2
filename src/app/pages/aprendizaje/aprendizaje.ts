import { Component } from '@angular/core';
import { AprendizajeFavorito } from '../../interfaces/aprendizaje.interface';

@Component({
  selector: 'app-aprendizaje',
  standalone: true,
  imports: [],
  templateUrl: './aprendizaje.html',
  styleUrl: './aprendizaje.scss'
})
export class Aprendizaje {
  aprendizajes: AprendizajeFavorito[] = [
    {
      id: 1,
      tema: 'Desarrollo con Angular 20',
      corte: 'Corte II',
      loQueMasMeGusto: 'Crear aplicaciones web modernas estructuradas en componentes independientes (Standalone), manejar rutas dinámicas y reutilizar código de forma limpia.',
      icono: 'bi-box-seam-fill',
      destacado: 'Lo que más me apasionó'
    },
    {
      id: 2,
      tema: 'TypeScript e Interfaces',
      corte: 'Corte II',
      loQueMasMeGusto: 'El tipado estricto. Definir la estructura exacta de los datos con interfaces evita muchísimos errores en tiempo de desarrollo y organiza mejor la lógica.',
      icono: 'bi-filetype-ts',
      destacado: 'Súper útil'
    },
    {
      id: 3,
      tema: 'Diseño Modular con Bootstrap & SCSS',
      corte: 'Corte I',
      loQueMasMeGusto: 'Maquetar interfaces atractivas y adaptables (Responsive) utilizando el sistema de rejilla (Grid), tarjetas y utilidades de Bootstrap.',
      icono: 'bi-palette-fill',
      destacado: 'Muy instructivo'
    },
    {
      id: 4,
      tema: 'Control de Versiones con Git & GitHub',
      corte: 'Corte I',
      loQueMasMeGusto: 'Aprender el flujo real de trabajo para guardar cambios, gestionar ramas y mantener el proyecto respaldado y listo para despliegue.',
      icono: 'bi-git',
      destacado: 'Indispensable'
    }
  ];
}