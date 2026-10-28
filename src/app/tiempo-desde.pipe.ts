import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempoDesde',
  standalone: true
})
export class TiempoDesdePipe implements PipeTransform {
  transform(fecha: Date): string {
    const diferenciaMs = Date.now() - fecha.getTime();
    const segundos = Math.floor(diferenciaMs / 1000);
    const minutos = Math.floor(diferenciaMs / 60000);
    const horas = Math.floor(diferenciaMs / 3600000);

    if (segundos < 60) return 'hace menos de un minuto';
    if (minutos < 60) return `hace ${minutos} minuto${minutos === 1 ? '' : 's'}`;
    return `hace ${horas} hora${horas === 1 ? '' : 's'}`;
  }
}
