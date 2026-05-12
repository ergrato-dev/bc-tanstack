# Semana 01 — TypeScript Esencial

> **Etapa 0 — Fundamentos Técnicos** · Stack base: TypeScript 5 + strict mode

## 🎯 Objetivos

Al finalizar esta semana, el estudiante será capaz de:

1. Declarar tipos, interfaces y type aliases, eligiendo cuál usar en cada contexto
2. Crear funciones y tipos genéricos reutilizables con restricciones (`extends`)
3. Aplicar utility types (`Partial`, `Pick`, `Omit`, `ReturnType`) en casos reales
4. Usar `satisfies` para validar objetos de configuración sin perder información de tipo

## ⏱️ Distribución del Tiempo (8h)

| Bloque | Horas | Contenido |
|--------|-------|-----------|
| Teoría | 2h | [1-teoria/](1-teoria/) |
| Prácticas | 3.5h | [2-practicas/](2-practicas/) |
| Proyecto | 2.5h | [3-proyecto/](3-proyecto/) |

## 📚 Material Teórico

| # | Archivo | Tema |
|---|---------|------|
| 01 | [tipos-e-interfaces.md](1-teoria/01-tipos-e-interfaces.md) | Tipos primitivos, interfaces y type aliases |
| 02 | [generics.md](1-teoria/02-generics.md) | Generics: funciones y tipos parametrizados |
| 03 | [utility-types-y-satisfies.md](1-teoria/03-utility-types-y-satisfies.md) | Utility types y el operador `satisfies` |

## 💻 Prácticas

| Ejercicio | Descripción |
|-----------|-------------|
| [ejercicio-01](2-practicas/ejercicio-01/) | Tipar una API REST con interfaces y type aliases |
| [ejercicio-02](2-practicas/ejercicio-02/) | Generics y utility types en funciones de transformación |

## 📁 Estructura

```
week-01-typescript_esencial/
├── 0-assets/
│   └── typescript-type-system.svg     # Diagrama: primitivos → interfaces → generics
├── 1-teoria/
│   ├── 01-tipos-e-interfaces.md
│   ├── 02-generics.md
│   └── 03-utility-types-y-satisfies.md
├── 2-practicas/
│   ├── ejercicio-01/                   # API REST tipada (starter + solution)
│   └── ejercicio-02/                   # Generics y utility types (starter + solution)
├── 3-proyecto/
│   └── starter/                        # CRUD tipado con tu dominio asignado
├── 4-recursos/
│   ├── videografia/
│   └── webgrafia/
├── 5-glosario/README.md
└── rubrica-evaluacion.md
```

## 📊 Evaluación

Ver [rubrica-evaluacion.md](rubrica-evaluacion.md).

---

[Semana 02 — React Moderno →](../week-02-react_moderno/)
