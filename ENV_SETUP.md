# Environment Setup - codetix-data-service

## Variables a Configurar en Railway Dashboard

El deploy está listo, pero necesita variables de entorno en Railway.

**Proyecto:** `codetix-data-service` (5bffc3f5-8dd5-4dbc-8d5f-097eb689dd85)
**Servicio:** `codetix-data-service` (2f3242bd-6344-488e-9bd4-69781e55c5c3)
**Environment:** production

### Variables Públicas (NEXT_PUBLIC_*)
Estas se pueden commitear en código (no son secretas):

```
NEXT_PUBLIC_STRIPE_PRICE_ONE_TIME=price_1TGLQcFnv2zNlVdF2SAcfJCA
NEXT_PUBLIC_STRIPE_PRICE_SUBSCRIPTION=price_1TGLQcFnv2zNlVdFUFuOweW5
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51TG770Fnv2zNlVdFS2M6qUvdJOosYlRvYk7O4zzcnDUkUqMVDkSlHJ5hl8zyFwPb0j5hAEP1o7zv0btuLvytRnh00IvunAZoF
PORT=3000
```

### Variables Públicas - Enlaces Stripe
```
STRIPE_BUSINESS_LINK=https://buy.stripe.com/dRm9AT4I55WN4KY5mK3VC01
STRIPE_FULL_REPORT_LINK=https://buy.stripe.com/aFaaEXa2pad31yM5mK3VC02
STRIPE_QUICK_CLEAN_LINK=https://buy.stripe.com/bJebJ1deB84V1yM7uS3VC00
```

### Variables Secretas (⚠️ NUNCA COMMITEAR)
Estas **SOLO** se pueden configurar en Railway Dashboard:

```
STRIPE_SECRET_KEY=[obtén de https://dashboard.stripe.com/apikeys]
RESEND_API_KEY=[obtén de https://resend.com/api-keys]
```

## Cómo Configurar en Railway

1. Ve a https://railway.app/project/5bffc3f5-8dd5-4dbc-8d5f-097eb689dd85
2. Selecciona el servicio `codetix-data-service`
3. Ve a **Variables** (pestaña)
4. Click **+ New Variable** para cada una
5. Copia/pega el nombre y valor
6. **Save** (Railway auto-redeploya)

## Deploy Automático

Una vez configuradas las variables en Railway:
```bash
cd ~/projects/codetix-data-service
railway up --service codetix-data-service
```

O si el token expiró:
```bash
railway login
# (Pega el link de login en el navegador)
# Luego:
railway up --service codetix-data-service
```

## Verificación

- URL del servicio: https://railway.app/project/5bffc3f5-8dd5-4dbc-8d5f-097eb689dd85/service/2f3242bd-6344-488e-9bd4-69781e55c5c3
- Ver logs: `railway service logs --service codetix-data-service`
- Status: `railway deployment list`

## Próximos Pasos

1. **Configurar variables en Railway Dashboard** (Bruno)
2. **Disparar redeploy** una vez las variables estén listas
3. **Obtener URL pública** (Railway Dashboard → Settings → Domains)
4. **Crear webhook Stripe** en https://dashboard.stripe.com/webhooks con la URL del servicio
5. **Actualizar STRIPE_WEBHOOK_SECRET** en Railway con el `whsec_` del webhook
