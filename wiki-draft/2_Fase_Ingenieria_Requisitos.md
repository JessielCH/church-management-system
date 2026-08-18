# 2. Fase de Ingeniería de Requisitos (Análisis de Sistema)

## 2.1 Especificación de Requisitos de Software (SRS)
- **Requisitos Funcionales**:
  - El sistema debe permitir registrar nuevos miembros con datos demográficos completos.
  - El sistema debe tener un semáforo de seguimiento (Rojo, Amarillo, Verde) para los nuevos contactos.
  - El sistema debe poseer un Dashboard con métricas en tiempo real de crecimiento.
- **Requisitos No Funcionales**:
  - **Rendimiento**: Tiempos de carga menores a 2 segundos (Server Components).
  - **Seguridad**: Autenticación por roles (Administrador, Líder). Datos encriptados.
  - **Usabilidad**: Diseño responsivo y estético (Paleta de colores IEBB).

## 2.2 Catálogo del Product Backlog (Historias de Usuario)
*Lista inicial basada en la entrevista:*
- **US-01**: Como Pastor, quiero ver un Dashboard con KPIs para entender el crecimiento de la iglesia rápidamente.
- **US-02**: Como Secretario, quiero agregar nuevos miembros al directorio para digitalizar los registros físicos.
- **US-03**: Como Líder de Ministerio, quiero asignar seguimientos a los nuevos creyentes para evitar que se desanimen.
- **US-04**: Como Usuario, quiero ver una agenda semanal para estar al tanto de las actividades.

## 2.3 Especificación de Criterios de Aceptación (Ejemplo de US-02)
- *Dado que* soy un Secretario autenticado en el sistema.
- *Cuando* ingreso al módulo de Membresía y lleno el formulario de "Nuevo Miembro" con datos válidos.
- *Entonces* el sistema guarda el registro en la base de datos y me muestra un mensaje de éxito color verde.
- *Y* la tabla de directorio se actualiza inmediatamente sin recargar toda la página.

## 2.4 Matriz de Trazabilidad de Requisitos (RTM)
*(Pendiente: Agendar reunión al finalizar el diseño de base de datos para mapear cada requisito a su tabla y caso de prueba respectivo. La plantilla base será un documento Excel o Markdown en formato tabla cruzada).*
