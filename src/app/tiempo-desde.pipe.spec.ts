import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TiempoDesdePipe } from './tiempo-desde.pipe';

describe('TiempoDesdePipe', () => {
  const pipe = new TiempoDesdePipe();
  const ahora = new Date('2026-10-29T00:00:00.000Z');

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(ahora);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('muestra menos de un minuto para fechas recientes', () => {
    expect(pipe.transform(new Date(ahora.getTime() - 59_000))).toBe('hace menos de un minuto');
  });

  it('muestra minutos mientras no se alcance una hora', () => {
    expect(pipe.transform(new Date(ahora.getTime() - 60_000))).toBe('hace 1 minuto');
    expect(pipe.transform(new Date(ahora.getTime() - 59 * 60_000))).toBe('hace 59 minutos');
  });

  it('muestra horas a partir de una hora', () => {
    expect(pipe.transform(new Date(ahora.getTime() - 3_600_000))).toBe('hace 1 hora');
    expect(pipe.transform(new Date(ahora.getTime() - 2 * 3_600_000))).toBe('hace 2 horas');
  });
});
