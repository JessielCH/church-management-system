# Plan General de Desarrollo (V1 - 2 Meses)

Este documento es estrictamente para uso **local** (ignorado en Git) y servirá como nuestra hoja de ruta interna. Las historias de usuario (Tickets) se irán creando poco a poco en el GitHub Project a medida que vayamos avanzando.

El objetivo es tener una **Versión 1 (V1) utilizable en aproximadamente 2 meses**, para luego iterar con nuevas actualizaciones.

## Fase Actual
- **Tarea 1 [COMPLETADA]**: Diseño, validación y publicación del Mockup (MVP) y configuración inicial de la arquitectura del repositorio en GitHub.

## Próximos Sprints Generales (Hacia la V1)

### Sprint 1: Inicialización y Autenticación (Semanas 1-2)
- Creación del proyecto base de Next.js (App Router).
- Migración de las variables CSS y el layout general (Sidebar y Navbar).
- Configuración de la Base de Datos (Supabase / Vercel Postgres).
- Autenticación básica (Login para Pastor/Administradores).

### Sprint 2: Motor de Membresía (Semanas 3-4)
- Esquema de base de datos para "Miembros" y "Ministerios".
- Formularios interactivos para Añadir/Editar Miembros (Server Actions).
- Directorio de Miembros (Vista de Tabla con filtros).

### Sprint 3: Evangelismo y Consolidación (Semanas 5-6)
- Flujo para capturar "Nuevos Contactos" (Evangelismo al 100%).
- Tabla de Seguimientos (Consolidación) con estados de urgencia (Rojo, Amarillo, Verde).
- Asignación de tareas de seguimiento a líderes.

### Sprint 4: Agenda, Notificaciones y Pulido Final (Semanas 7-8)
- Vista de Agenda/Calendario interactivo.
- Simulador o integración de notificaciones (alertas de 3 días, 1 día, 5 horas).
- Pruebas generales (QA), corrección de bugs visuales y Despliegue Oficial (Producción) de la V1.
