# Types

Carpeta para definir tipos y interfaces TypeScript globales.

## Estructura:

- `index.ts` - Tipos globales exportados
- Puedes crear archivos específicos por dominio:
  - `user.types.ts` - Tipos relacionados con usuarios
  - `api.types.ts` - Tipos para respuestas de API
  - `form.types.ts` - Tipos para formularios

## Uso:

```typescript
import { User, ApiResponse } from '@/types';

const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
};
```

## Convenciones:

- Usa `interface` para objetos que pueden extenderse
- Usa `type` para uniones, intersecciones y tipos primitivos
- Prefiere nombres descriptivos en PascalCase
- Agrega comentarios JSDoc para tipos complejos
