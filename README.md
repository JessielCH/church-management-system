# Church Management System

Sistema Administrativo y de Gestión para Iglesias (Plan IEBB), diseñado para ayudar en la administración de membresía, evangelismo, consolidación y discipulado.

## Características (MVP)
- **Dashboard Institucional**: KPIs de miembros y evangelismo.
- **Gestión de Membresía**: Base de datos de miembros (activos, inactivos).
- **Consolidación**: Seguimiento con alertas automáticas.
- **Agenda**: Eventos y planificación semanal.

## Arquitectura
Este proyecto está diseñado bajo un enfoque **Full-Stack Monorepo**:
- **Framework**: Next.js (App Router)
- **Database**: PostgreSQL (Vercel Postgres o Supabase)
- **Deployment**: Vercel

## Calidad de Código (CI/CD)
El repositorio utiliza **GitHub Actions** para asegurar la calidad y el mantenimiento a largo plazo:
- **Commitlint**: Los commits deben seguir la convención internacional (ej. `feat: add user login`, `fix: header alignment`).
- **Linting**: (Próximamente) Validación automática de código React/Next.js en cada Pull Request.

## Estructura de Directorios Actual
- `/mockup/`: Contiene el prototipo inicial en HTML/CSS/JS (Vanilla).

## Desarrollo Local (Fase Mockup)
Abre `mockup/index.html` en cualquier navegador web. No requiere instalación.

---
*Prototipo MVP creado según los requerimientos del Plan IEBB.*
