# Ejercicio 01 — Inicializar proyecto con Vite, ESLint y Prettier

**Semana 03 · Tooling Moderno** | ~1.5 h

Configura desde cero el entorno de desarrollo profesional que usarás en todo el bootcamp.

---

## Lo que aprenderás

- Crear un proyecto React + TypeScript con Vite y pnpm
- Instalar y configurar ESLint v9 con flat config
- Integrar Prettier sin conflictos con ESLint
- Verificar que el pipeline de calidad funciona

---

## Instrucciones

Abre `starter/src/App.tsx` y sigue los **PASO 1, 2, 3, 4** descomentando el código.
Ejecuta `pnpm dev` después de cada paso para ver el resultado.

### Pasos

1. **PASO 1** — Crear la estructura de archivos de configuración
2. **PASO 2** — Configurar `eslint.config.ts`
3. **PASO 3** — Configurar `.prettierrc`
4. **PASO 4** — Verificar el pipeline completo

---

## Cómo ejecutar

```bash
# Starter
cd starter
pnpm install
pnpm dev
pnpm typecheck
pnpm lint

# Solution (para comparar)
cd ../solution
pnpm install
pnpm lint
```

---

## Criterio de éxito

- `pnpm lint` sale con código 0 (sin warnings)
- `pnpm typecheck` sale sin errores
- Prettier formatea el código al guardar en VS Code
