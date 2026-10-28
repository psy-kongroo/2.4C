import { Component } from '@angular/core';
import { TiempoDesdePipe } from './tiempo-desde.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TiempoDesdePipe],
  template: `
    <main>
      <h1>Pipe tiempoDesde</h1>
      <p>Fecha reciente: {{ fechaReciente | tiempoDesde }}</p>
      <p>Fecha de hace unos minutos: {{ fechaMinutos | tiempoDesde }}</p>
      <p>Fecha de hace unas horas: {{ fechaHoras | tiempoDesde }}</p>
    </main>
  `
})
export class AppComponent {
  private readonly ahora = Date.now();

  readonly fechaReciente = new Date(this.ahora - 30_000);
  readonly fechaMinutos = new Date(this.ahora - 5 * 60_000);
  readonly fechaHoras = new Date(this.ahora - 2 * 3_600_000);
}
