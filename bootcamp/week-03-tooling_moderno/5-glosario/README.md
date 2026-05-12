# Glosario — Semana 03: Tooling Moderno

Términos clave de la semana, ordenados A–Z.

| Término | Definición |
|---------|-----------|
| **alias (`@/`)** | Atajo de importación que apunta a `src/`. Evita rutas relativas largas (`../../`). |
| **bundle** | Archivo único generado por el compilador que agrupa módulos JS/TS para producción. |
| **cobertura (coverage)** | Porcentaje de líneas/ramas/funciones del código ejecutadas por los tests. |
| **devDependency** | Dependencia necesaria solo en desarrollo (lint, tests, build). No va al bundle de producción. |
| **esbuild** | Compilador Go ultrarrápido que usa Vite internamente para transformar TypeScript a JS. |
| **ESLint** | Linter estático que analiza el código en busca de errores y malas prácticas, sin ejecutarlo. |
| **flat config** | Nuevo formato de configuración de ESLint v9 (`eslint.config.ts`), reemplaza `.eslintrc`. |
| **HMR (Hot Module Replacement)** | Recarga solo el módulo que cambió, sin recargar la página completa. |
| **jsdom** | Implementación de DOM en Node.js usada por Vitest para simular el navegador en tests. |
| **lint** | Proceso de analizar código estáticamente para detectar errores antes de ejecutarlo. |
| **pnpm** | Gestor de paquetes que usa hard links para ahorrar espacio y garantizar builds reproducibles. |
| **Prettier** | Formateador de código opinionado que estandariza la apariencia sin revisar lógica. |
| **save-exact** | Opción de pnpm/npm que guarda versiones exactas sin `^` ni `~` en `package.json`. |
| **snapshot test** | Test que captura el output renderizado y falla si cambia inesperadamente. |
| **Vite** | Bundler moderno basado en ESM nativo. Sirve módulos sin empaquetar en desarrollo. |
| **vitest.config.ts** | Archivo de configuración de Vitest: entorno, cobertura, alias, setup files. |
