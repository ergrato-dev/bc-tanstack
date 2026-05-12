# 02 — Calidad de Código: ESLint + Prettier

## Objetivos

- Distinguir el rol de ESLint (análisis) vs Prettier (formato)
- Instalar y configurar ambas herramientas en un proyecto Vite
- Integrar el linter en los scripts de CI del proyecto

---

## 1. ESLint vs Prettier — roles distintos

| Herramienta | Qué hace | Ejemplo |
|-------------|----------|---------|
| **ESLint** | Detecta errores de lógica y malas prácticas | `no-unused-vars`, `react-hooks/rules-of-hooks` |
| **Prettier** | Formatea el código (espacios, comas, comillas) | indentación, ancho de línea |

Usarlos juntos: ESLint para calidad, Prettier para estilo uniforme.

## 2. Instalación

```bash
# Auditar antes de instalar
pnpm audit --audit-level moderate

# ESLint + plugin TypeScript + plugin React Hooks
pnpm add -D \
  eslint@9.25.1 \
  @eslint/js@9.25.1 \
  typescript-eslint@8.30.1 \
  eslint-plugin-react-hooks@5.2.0 \
  eslint-plugin-react-refresh@0.4.20

# Prettier
pnpm add -D prettier@3.5.3
```

## 3. `eslint.config.ts` (ESLint v9 flat config)

```ts
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/no-explicit-any': 'error', // nunca any
    },
  },
)
```

## 4. `.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100,
  "trailingComma": "es5"
}
```

Añade `.prettierignore` con `dist/` y `node_modules/` para no formatear el build.

## 5. Verificar en CI

```bash
# Lint — falla si hay cualquier warning (--max-warnings 0)
pnpm lint

# Formato — solo verifica, no modifica
pnpm exec prettier --check "src/**/*.{ts,tsx}"
```

Integra `pnpm lint` en tu pipeline de CI para bloquear merges con código sucio.

---

## Checklist

- [ ] ¿Puedes explicar la diferencia entre ESLint y Prettier en una frase?
- [ ] ¿El comando `pnpm lint` sale con código 0 (sin errores)?
- [ ] ¿Configuraste `--max-warnings 0` para que el linter sea estricto?
- [ ] ¿Prettier formatea correctamente al guardar en tu editor?

## Referencias

- [ESLint Getting Started](https://eslint.org/docs/latest/use/getting-started)
- [Prettier — opinionated code formatter](https://prettier.io/docs/en/index.html)
