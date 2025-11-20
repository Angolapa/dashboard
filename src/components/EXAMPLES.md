# Ejemplos de Componentes con TypeScript

## Button Component

```tsx
import Button from '@/atoms/Button';

// Uso básico
<Button>Click me</Button>

// Con variantes
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>

// Con tamaños
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Con estado de carga
<Button isLoading>Loading...</Button>

// Combinando propiedades
<Button
  variant="primary"
  size="lg"
  onClick={() => console.log('Clicked!')}
  disabled={false}
>
  Submit
</Button>
```

## Input Component

```tsx
import Input from '@/atoms/Input';

// Uso básico
<Input placeholder="Enter text..." />

// Con label
<Input label="Email" type="email" />

// Con validación
<Input
  label="Password"
  type="password"
  error="Password is required"
  required
/>

// Con helper text
<Input
  label="Username"
  helperText="Must be at least 3 characters"
/>

// Formulario completo
<form>
  <Input
    label="Full Name"
    placeholder="John Doe"
    required
  />

  <Input
    label="Email"
    type="email"
    placeholder="john@example.com"
    required
  />

  <Input
    label="Age"
    type="number"
    min={0}
    max={120}
  />

  <Button type="submit" variant="primary">
    Submit
  </Button>
</form>
```

## Usando Tipos

```tsx
import { User, ApiResponse } from "@/types";

// Definir estado con tipos
const [user, setUser] = useState<User | null>(null);

// Función con tipos
async function fetchUser(id: string): Promise<ApiResponse<User>> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

// Props de componente personalizado
interface ProfileCardProps {
  user: User;
  onEdit?: () => void;
}

function ProfileCard({ user, onEdit }: ProfileCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {onEdit && <Button onClick={onEdit}>Edit</Button>}
    </div>
  );
}
```

## Extendiendo Componentes

```tsx
// Crear un componente que extiende Button
interface IconButtonProps extends ComponentProps<typeof Button> {
  icon: ReactNode;
}

function IconButton({ icon, children, ...props }: IconButtonProps) {
  return (
    <Button {...props}>
      <span className="flex items-center gap-2">
        {icon}
        {children}
      </span>
    </Button>
  );
}
```
