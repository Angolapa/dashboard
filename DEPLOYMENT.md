# Deployment en Vercel

Este proyecto está desplegado en Vercel.

## 🌐 URLs

- **Producción**: https://dashboard-kv01rmcwo-angolapas-projects.vercel.app/
- **Repositorio**: https://github.com/Angolapa/dashboard

## 📦 Despliegue Automático

Cada push a las siguientes branches genera un deployment automático:

- `main` → Deployment de Producción
- Otras branches → Preview Deployments

## 🔧 Configuración

### Variables de Entorno

Si necesitas agregar variables de entorno en Vercel:

1. Ve a tu proyecto en https://vercel.com/dashboard
2. Click en **Settings** → **Environment Variables**
3. Agrega tus variables:
   - `NEXT_PUBLIC_*` para variables públicas (accesibles en el cliente)
   - Otras variables solo estarán disponibles en el servidor

### Build Settings

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Output Directory**: `.next`

## 🚀 Deployment Manual

Para hacer un nuevo deployment manualmente:

```bash
# 1. Hacer cambios en tu código
git add .
git commit -m "tu mensaje"
git push origin main

# 2. Vercel automáticamente desplegará los cambios
```

## 📊 Monitoreo

- **Analytics**: https://vercel.com/analytics
- **Logs**: https://vercel.com/dashboard → Tu Proyecto → Deployments → View Logs
- **Speed Insights**: Habilitado por defecto

## 🔗 Dominios

Para agregar un dominio personalizado:

1. Ve a **Settings** → **Domains**
2. Agrega tu dominio
3. Configura los DNS según las instrucciones

## 🛠️ Comandos Útiles

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy desde local (opcional)
vercel

# Deploy a producción
vercel --prod
```

## 📝 Notas

- Los deployments de preview son automáticos en cada PR
- Vercel cachea assets estáticos automáticamente
- El ISR (Incremental Static Regeneration) está habilitado por defecto
