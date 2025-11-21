# Dashboard App

Aplicación construida con Next.js 16, React 19 y Tailwind CSS 3.

## Stack Tecnológico

- **Next.js**: 16.0.3 (App Router + Turbopack)
- **React**: 19.2.0
- **Tailwind CSS**: 3.4.1
- **TypeScript**: 5.x

## Estructura del Proyecto

```
dashboard-app/
├── app/                          # Next.js App Router
│   ├── (public)/                # Rutas públicas (sin autenticación)
│   │   └── page.tsx             # Página de inicio (/)
│   │
│   ├── (private)/               # Rutas privadas (requieren autenticación)
│   │   ├── layout.tsx           # Layout con Header/Nav
│   │   └── dashboard/
│   │       └── page.tsx         # Dashboard (/dashboard)
│   │
│   ├── layout.tsx               # Layout raíz
│   └── globals.css              # Estilos globales + Tailwind
│
├── src/
│   └── components/              # Componentes organizados con Atomic Design
│       ├── atoms/               # Componentes básicos (AtImput, AtText)
│       ├── molecules/           # Combinaciones simples (SearchBar, Card)
│       ├── organisms/           # Secciones complejas (Header, Footer)
│       └── templates/           # Layouts de páginas
│
├── public/                      # Archivos estáticos
├── tailwind.config.ts           # Configuración de Tailwind
├── postcss.config.js            # Configuración de PostCSS
├── tsconfig.json                # Configuración de TypeScript
└── next.config.ts               # Configuración de Next.js
```

### Route Groups (public/private)

Este proyecto utiliza **Route Groups** de Next.js para organizar las rutas:

- **`(public)/`**: Rutas accesibles sin autenticación (landing, login, registro)
- **`(private)/`**: Rutas que requieren autenticación (dashboard, perfil, settings)

Los paréntesis crean grupos de rutas sin afectar la URL. Por ejemplo:

- `app/(public)/page.tsx` → URL: `/`
- `app/(private)/dashboard/page.tsx` → URL: `/dashboard`

## Metodología Atomic Design

Este proyecto sigue la metodología **Atomic Design** para organizar los componentes:

- **Atoms**: Elementos más básicos e indivisibles
- **Molecules**: Combinaciones simples de átomos
- **Organisms**: Componentes complejos formados por moléculas y átomos
- **Templates**: Layouts de página sin contenido real

Consulta los archivos README.md en cada carpeta de componentes para más detalles.

## TypeScript

El proyecto está completamente tipado con TypeScript 5.x. Configurado con:

### Path Aliases

Usa imports absolutos para mejorar la legibilidad:

```typescript
// ❌ Imports relativos
import { AtImput } from "../../../components/atoms/at-imput";

// ✅ Imports con alias
import { AtImput, AtText } from "@/components";
import Layout from "@/templates/MainLayout";
```

Aliases disponibles:

- `@/*` - Raíz del proyecto
- `@/components/*` - Carpeta de componentes
- `@/atoms/*` - Componentes atómicos
- `@/molecules/*` - Componentes moleculares
- `@/organisms/*` - Componentes organísmicos
- `@/templates/*` - Templates
- `@/app/*` - Carpeta app

### Componentes

Los tipos TypeScript se definen dentro de cada componente atómico para mantener cohesión:

- `AtImput` - Input con labels, validación y variants
- `AtText` - Texto tipográfico con soporte para tamaños, pesos y elementos HTML

## Code Quality

El proyecto tiene configurado ESLint + Prettier para mantener código limpio y consistente.

### ESLint

Configurado con ESLint 9 (flat config) con:

- Reglas de Next.js
- Reglas de TypeScript
- Integración con Prettier
- Variables no usadas permitidas con prefijo `_`

### Prettier

Configuración estándar con:

- Semi: `true`
- Single quotes: `true`
- Print width: `100`
- Tab width: `2`
- **prettier-plugin-tailwindcss**: Ordena automáticamente las clases de Tailwind

### VS Code

Incluye configuración de VS Code (`.vscode/`):

- Format on save activado
- ESLint auto-fix on save
- Extensiones recomendadas (ESLint, Prettier, Tailwind CSS IntelliSense)

## Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
npm run lint:fix  # Auto-fix de problemas

# Formateo de código
npm run format          # Formatear todo el código
npm run format:check    # Solo verificar formato

# Verificar tipos TypeScript
npm run type-check
```

## Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

El servidor estará disponible en:

- Local: http://localhost:3000
- Network: http://[tu-ip]:3000

## Características

- App Router de Next.js 16
- Turbopack para builds ultrarrápidos
- Tailwind CSS para estilos utility-first
- TypeScript para type safety
- Estructura limpia y escalable con Atomic Design
- Route Groups para organización de rutas públicas/privadas
- Componentes atómicos reutilizables (AtImput, AtText)
- Path aliases configurados para imports limpios
- ESLint + Prettier con auto-format configurado

## 🚀 Deployment

El proyecto está desplegado en Vercel:

**URL de Producción**: https://dashboard-kv01rmcwo-angolapas-projects.vercel.app/

### Deployment Automático

- Cada push a `main` → Deployment a producción
- Cada PR → Preview deployment automático
- Ver más detalles en [DEPLOYMENT.md](./DEPLOYMENT.md)
