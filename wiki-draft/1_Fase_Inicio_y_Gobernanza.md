# 1. Fase de Inicio y Gobernanza (Marco de Trabajo)

Este documento centraliza las reglas del juego, límites de equipo y acuerdos comerciales para el proyecto **Church Management System (Plan IEBB)**.

## 1.1 Acta de Constitución del Proyecto (Project Charter)
- **Nombre del Proyecto**: Church Management System (Plan IEBB)
- **Objetivos Comerciales**: 
  - Digitalizar y centralizar la base de datos de miembros de la iglesia.
  - Automatizar el flujo de consolidación y evangelismo (seguimiento a nuevos creyentes).
  - Proveer un Dashboard gerencial (KPIs) para la toma de decisiones pastorales.
- **Patrocinador / Cliente**: Pastor / Equipo de Liderazgo IEBB.
- **Restricciones Tecnológicas**: Arquitectura Web, Responsive Design, Monorepo Next.js, Base de Datos Relacional (PostgreSQL).
- **Hitos Principales**: 
  - Sprint 1-2: Base y Autenticación.
  - Sprint 3-4: Motor de Membresía.
  - Sprint 5-6: Evangelismo y Consolidación.
  - Sprint 7-8: Agenda y Lanzamiento V1 (2 Meses).

## 1.2 Manual de Gobernanza Scrumban / Acuerdos de Equipo
- **Metodología**: Scrumban (Sprints de 2 semanas con flujo continuo en tablero Kanban).
- **Estructura del Tablero**: To Do -> In Progress -> In Dev -> In QA -> In Staging -> Done.
- **WIP Limits (Límites de Trabajo en Progreso)**: Máximo 3 tickets simultáneos en "In Progress" por desarrollador.
- **Roles**:
  - *Product Owner*: Enlace con el Pastor (define prioridades).
  - *Lead Developer*: Lidera la arquitectura y código.
  - *QA Tester*: Valida en la rama `qa`.

## 1.3 Definición de Listo (Definition of Ready - DoR)
Para que un ticket pueda moverse de "To Do" a "In Progress", debe cumplir:
- [ ] Título claro y conciso.
- [ ] Descripción de la necesidad (Formato Historia de Usuario).
- [ ] Criterios de aceptación claramente definidos.
- [ ] Sin bloqueos técnicos (dependencias resueltas).

## 1.4 Definición de Hecho (Definition of Done - DoD)
Para que un ticket pase a "Done", debe cumplir:
- [ ] Código subido y fusionado a `main`.
- [ ] Pruebas Unitarias y de Componentes exitosas (GitHub Actions).
- [ ] Pruebas E2E y QA Manual superadas.
- [ ] Aceptación comercial (UAT) aprobada por el cliente.
- [ ] Sin bugs bloqueantes.

## 1.5 Acuerdos de Nivel de Servicio internos (SLA / SLE)
*(Pendiente: Agendar reunión con el cliente para definir los tiempos exactos).*
- **Errores Críticos (Caída del sistema)**: Tiempo de respuesta objetivo: [ X ] horas.
- **Errores Medios (Funcionalidad rota pero con alternativas)**: Tiempo de respuesta objetivo: [ X ] días.
- **Errores Bajos (UI / Texto)**: Se programa para el próximo Sprint.
