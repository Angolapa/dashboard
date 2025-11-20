# Rutas Privadas

Esta carpeta contiene todas las rutas que requieren autenticación.

## Rutas incluidas:

- `/dashboard` - Panel de control principal
- `/profile` - (agregar) Perfil de usuario
- `/settings` - (agregar) Configuración

## Características:

- Requieren autenticación
- Comparten el mismo layout con header/navegación
- Redirigen al login si el usuario no está autenticado
- Incluyen navegación consistente en todas las páginas

## Layout

El `layout.tsx` en esta carpeta incluye:

- Header con navegación
- Logo/título de la aplicación
- Links de navegación compartidos
- (Futuro) Verificación de autenticación con middleware
