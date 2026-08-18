# 5. Fase de Implementación, Despliegue y Soporte

Garantiza la correcta puesta en marcha del software en entornos reales y su mantenimiento autónomo.

## 5.1 Manual de Instalación, Configuración y Despliegue
- El despliegue de esta aplicación está completamente automatizado a través de **Vercel** usando CI/CD.
- Para configurar el entorno desde cero:
  1. Clonar el repositorio.
  2. Ejecutar `npm install`.
  3. Configurar el archivo `.env` con las variables de la base de datos de Supabase.
  4. Ejecutar `npm run dev`.

## 5.2 Notas de Lanzamiento (Release Notes)
*(Pendiente: Este documento se redactará dinámicamente cada vez que hagamos un despliegue grande hacia la rama `main` de Producción. Listará los tickets cerrados en la V1).*

## 5.3 Manual de Usuario Final
*(Pendiente: Agendar reunión / tarea en el Sprint 4 o 5 para tomar capturas de pantalla reales del sistema terminado y crear el manual didáctico para el Pastor y los Líderes).*

## 5.4 Manual de Operación y Administración del Sistema
- **Respaldos de Datos**: Gestionados automáticamente por Supabase con políticas de Point-in-Time Recovery (PITR) y backups diarios.
- **Roles de Acceso**: La administración de roles se hace directo en la tabla `USERS` de la base de datos o en un panel de "Super Admin" si se aprueba su desarrollo en una futura V2.
