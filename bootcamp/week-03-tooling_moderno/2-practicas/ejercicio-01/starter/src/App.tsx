// ============================================
// EJERCICIO 01: Tooling — Vite + ESLint + Prettier
// Semana 03 — Tooling Moderno
// ============================================
//
// Sigue los pasos en orden. Descomenta cada bloque,
// guarda el archivo y verifica que el proyecto sigue funcionando.

// ============================================
// PASO 1: Estructura base — este archivo ya funciona
// ============================================
// El proyecto arranca con `pnpm dev`.
// Verifica que ves "Hola desde el ejercicio 01" en el navegador.
// No necesitas descomentar nada aquí todavía.

export function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Ejercicio 01 — Tooling Moderno</h1>
      <p>Semana 03: Vite · ESLint · Prettier</p>

      {/* Aquí irá el contenido de los pasos */}
    </div>
  )
}

// ============================================
// PASO 2: Crear eslint.config.ts en la raíz
// ============================================
// Crea el archivo `eslint.config.ts` en la carpeta `starter/` con este contenido:
//
// import js from '@eslint/js'
// import tseslint from 'typescript-eslint'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
//
// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': 'warn',
//       '@typescript-eslint/no-explicit-any': 'error',
//     },
//   },
// )
//
// Luego ejecuta: pnpm lint
// Resultado esperado: 0 errors, 0 warnings

// ============================================
// PASO 3: Crear .prettierrc en la raíz
// ============================================
// Crea el archivo `.prettierrc` en la carpeta `starter/` con este contenido:
//
// {
//   "semi": false,
//   "singleQuote": true,
//   "tabWidth": 2,
//   "printWidth": 100,
//   "trailingComma": "es5"
// }
//
// Luego ejecuta: pnpm format:check
// Resultado esperado: All matched files use Prettier code style!

// ============================================
// PASO 4: Verificar el pipeline completo
// ============================================
// Ejecuta los 4 comandos en orden:
//
// pnpm typecheck      → sin errores de TypeScript
// pnpm lint           → sin warnings de ESLint
// pnpm format:check   → código formateado correctamente
// pnpm build          → build de producción exitoso
//
// Si todos salen con código 0, ¡el entorno está configurado! ✅
//
// Descomenta el componente de abajo para ver la verificación visual:

// import { useState } from 'react'
//
// function StatusItem({ label, ok }: { label: string; ok: boolean }) {
//   return (
//     <li style={{ color: ok ? '#22C55E' : '#EF4444', marginBottom: '0.5rem' }}>
//       {ok ? '✓' : '✗'} {label}
//     </li>
//   )
// }
//
// export function PipelineStatus() {
//   const [checked, setChecked] = useState(false)
//   return (
//     <div style={{ marginTop: '1rem', fontFamily: 'monospace' }}>
//       <button onClick={() => setChecked(true)}>
//         Marcar pipeline como verificado
//       </button>
//       {checked && (
//         <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
//           <StatusItem label="pnpm typecheck" ok={true} />
//           <StatusItem label="pnpm lint" ok={true} />
//           <StatusItem label="pnpm format:check" ok={true} />
//           <StatusItem label="pnpm build" ok={true} />
//         </ul>
//       )}
//     </div>
//   )
// }
