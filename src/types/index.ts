// Tipos globales de la aplicación

// Tipos básicos para componentes
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Tipos para usuario
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
}

export type UserRole = "admin" | "user" | "guest";

// Tipos para estadísticas del dashboard
export interface DashboardStats {
  totalUsers: number;
  revenue: number;
  projects: number;
}

// Tipos para actividad
export interface Activity {
  id: string;
  type: "create" | "update" | "delete";
  description: string;
  timestamp: Date;
  userId: string;
}

// Tipos para formularios
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "select";
  required?: boolean;
  placeholder?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
  status: number;
}

export type ApiError = {
  message: string;
  code: string;
  details?: Record<string, unknown>;
};
