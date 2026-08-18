# 3. Fase de Arquitectura y Diseño Técnico

Este documento expone los cimientos lógicos, estructurales y tecnológicos de la plataforma, basados en nuestra decisión de un enfoque Monorepo Serverless.

## 3.1 Documento de Arquitectura de Software (SAD)
*(Este documento toma como base el archivo local `docs/architecture.md` y `docs/frontend.md`)*
- **Patrones**: Componentes React, Next.js App Router (MVC moderno fusionado).
- **Tecnologías**: Vercel (Hosting/CI), Next.js (Fullstack), Supabase (Base de Datos / Auth).
- **Diagrama Lógico (C4)**:
  *Remitirse al diagrama C4 en la sección de Arquitectura General donde se modela la interacción entre Usuario -> Frontend -> Base de Datos.*

## 3.2 Diccionario y Modelo de Datos (DER)
*(Este documento toma como base el archivo local `docs/backend.md`)*
- **Entidades Principales**: 
  - `MEMBERS`: uuid (PK), first_name, last_name, status.
  - `FOLLOW_UPS`: uuid (PK), member_id (FK), status, due_date.
  - `EVENTS`, `MINISTRIES`.
- **Integridad**: Cascada en eliminaciones (si se borra un miembro, se borran sus seguimientos lógicamente). Tipos de datos estrictos en PostgreSQL.
- **Esquema visual**: *Ver diagrama ER en Backend Docs.*

## 3.3 Contrato de Interfaces y Documentación de APIs
- En este proyecto **no** utilizaremos una API REST tradicional (separada). En su lugar, usaremos **Next.js Server Actions**, lo que significa que el contrato de datos está fuertemente tipado mediante **TypeScript** (y opcionalmente Zod para validación de esquemas).
- Las funciones asíncronas de servidor se documentarán directamente en el código usando **JSDoc**.
