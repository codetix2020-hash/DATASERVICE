/**
 * Mitigación CSRF para POST JSON: exige Origin alineado con NEXT_PUBLIC_URL.
 * En desarrollo se permiten orígenes localhost / 127.0.0.1 para pruebas locales.
 */
export function assertAllowedOrigin(request: Request): void {
  const allowed = process.env.NEXT_PUBLIC_URL?.replace(/\/$/, '')
  if (!allowed) {
    return
  }
  const origin = request.headers.get('origin')
  if (!origin) {
    return
  }
  if (origin === allowed) {
    return
  }
  if (process.env.NODE_ENV === 'development') {
    try {
      const u = new URL(origin)
      if (u.hostname === 'localhost' || u.hostname === '127.0.0.1') {
        return
      }
    } catch {
      /* ignore */
    }
  }
  throw new Error('Origen no permitido')
}
