# Glosario — Semana 02: React Moderno

Términos clave de la semana, ordenados A–Z.

| Término | Definición |
| ------- | ---------- |
| **Cleanup function** | Función retornada por `useEffect` que se ejecuta antes del próximo efecto o al desmontar el componente. Usada para cancelar suscripciones, limpiar timers, etc. |
| **Context API** | Mecanismo de React para compartir datos entre componentes sin prop-drilling. Compuesto por `createContext`, un `Provider` y `useContext`. |
| **createContext** | Función de React que crea un objeto de contexto. Acepta un valor por defecto que se usa cuando no hay Provider en el árbol. |
| **Error Boundary** | Componente de clase que captura errores de render en su subárbol y muestra un UI alternativo (fallback) en lugar de crashear la app. |
| **getDerivedStateFromError** | Método estático de clase en Error Boundaries que retorna el nuevo estado cuando se produce un error. |
| **memo (React.memo)** | HOC que evita re-renders de un componente si sus props no cambian (comparación superficial). Necesario para que `useCallback` tenga efecto. |
| **Memory leak** | Recurso (timer, suscripción) que sigue activo después de que el componente se desmonta, porque no se ejecutó cleanup. |
| **Prop-drilling** | Patrón anti-pattern donde una prop se pasa a través de múltiples niveles de componentes que no la necesitan, solo para llegar al destino. |
| **Re-render** | Proceso de React al volver a ejecutar la función de un componente para calcular el nuevo árbol de UI. Ocurre cuando cambia estado, props o contexto. |
| **Stale closure** | Bug donde una función captura el valor de una variable en el momento de su creación y no ve los valores actualizados. Frecuente en `useEffect` con dependencias incorrectas. |
| **useCallback** | Hook que retorna una versión memoizada de una función. La función solo se recrea si sus dependencias cambian. Requiere `React.memo` en el hijo para ser efectivo. |
| **useContext** | Hook que permite consumir el valor más cercano de un contexto en el árbol. Re-renderiza el componente cuando el valor del contexto cambia. |
| **useEffect** | Hook para sincronizar un componente con sistemas externos (APIs, DOM, timers). Recibe una función de efecto y un array de dependencias. |
| **useMemo** | Hook que memoiza el resultado de una computación costosa. Solo recalcula cuando sus dependencias cambian. |
| **useRef** | Hook que retorna un objeto `{ current }` mutable que persiste entre renders sin causar re-renders al cambiar. Úselo para DOM y valores internos. |
| **useState** | Hook fundamental para declarar estado local en un componente funcional. Retorna el valor actual y un setter. |

