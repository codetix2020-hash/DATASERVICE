/**
 * Plantilla HTML para el email de confirmación (Resend).
 * No usa JSX en el correo; es HTML estático como string.
 */

export function confirmationEmailHTML(params: {
  amountLabel: string
}): string {
  const { amountLabel } = params
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background: #f3f4f6; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; }
    h1 { color: #0a0a0a; margin-bottom: 20px; font-size: 24px; }
    .amount { font-size: 32px; font-weight: bold; color: #00cc6f; }
    .steps { margin: 30px 0; }
    .step { margin-bottom: 15px; padding: 15px; background: #f9fafb; border-left: 4px solid #00ff88; }
    p { color: #374151; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <h1>¡Hemos recibido tu pago! ✓</h1>
    <p>Gracias por elegir AI Data Rescue Service.</p>

    <div class="amount">${amountLabel}</div>
    <p>Procesado correctamente</p>

    <h2 style="margin-top: 40px; color: #0a0a0a;">¿Qué pasa ahora?</h2>
    <div class="steps">
      <div class="step">
        <strong>Paso 1:</strong> Recibirás un email con un link para subir tu base de datos (Excel/CSV)
      </div>
      <div class="step">
        <strong>Paso 2:</strong> Sube tu archivo con los datos que necesitas limpiar
      </div>
      <div class="step">
        <strong>Paso 3:</strong> Nuestro sistema procesará automáticamente tu base
      </div>
      <div class="step">
        <strong>Paso 4:</strong> Recibirás tu base de datos limpia en 48 horas máximo
      </div>
    </div>

    <p><strong>¿Dudas?</strong> Responde a este email. Estamos aquí para ayudarte.</p>

    <p style="color: #9ca3af; font-size: 12px; margin-top: 40px;">
      © 2026 AI Data Rescue Service. Todos los derechos reservados.
    </p>
  </div>
</body>
</html>`
}

export function maintenanceEmailHTML(): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background: #f3f4f6; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; }
    h1 { color: #0a0a0a; font-size: 22px; }
    p { color: #374151; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Mantenimiento activado ✓</h1>
    <p>Gracias por suscribirte al mantenimiento recurrente (97€/mes). Tu base seguirá protegida con revisiones periódicas.</p>
    <p style="color: #9ca3af; font-size: 12px; margin-top: 32px;">© 2026 AI Data Rescue Service.</p>
  </div>
</body>
</html>`
}
