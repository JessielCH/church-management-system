# 4. Fase de Calidad y Pruebas de Software (QA)

Asegura que el producto de software entregado carezca de fallas, rigiéndose estrictamente por el **Modelo en V**.

## 4.1 Plan de Pruebas de Software (Test Plan)
*(Este documento toma como base el flujo definido en el archivo local `docs/testing.md` o `docs/kanban_workflow.md`)*
- **Alcance**: Probar exhaustivamente el flujo de creación de miembros y asignación de seguimientos.
- **Entornos**: `dev` (Local/Acciones automáticas), `qa` (Servidor de pruebas Vercel), `staging` (Réplica de producción).
- **Tipos de Pruebas**: Unitarias, de Componentes, Integración (E2E), y Aceptación Manual (UAT).

## 4.2 Repositorio de Casos de Prueba (Test Cases)
*Ejemplo de Caso de Prueba TC-01:*
- **Condición Previa**: Usuario administrador logueado.
- **Pasos**: 
  1. Ir a la vista Membresía. 
  2. Clic en "Añadir". 
  3. Dejar el campo "Teléfono" vacío. 
  4. Clic en "Guardar".
- **Resultado Esperado**: El formulario arroja error indicando "El teléfono es obligatorio".

## 4.3 Matriz de Ejecución y Cobertura de Pruebas
*(Pendiente: Esta matriz se creará como una hoja de cálculo anexa durante los Sprints finales de desarrollo para firmar la aprobación de cada módulo).*

## 4.4 Registro e Informe de Defectos (Bug Log)
El registro de defectos vivirá orgánicamente en el propio tablero Kanban (GitHub Projects). Cuando se detecte un Bug en QA, la historia regresará a "In Progress" con un comentario detallado o se abrirá un nuevo Ticket etiquetado como `bug`.

## 4.5 Informe de Cierre de Pruebas (Test Summary Report)
*(Pendiente: Este reporte lo emitirá el QA Tester al final de cada hito grande - Ej. Sprint 2, Sprint 4).*
