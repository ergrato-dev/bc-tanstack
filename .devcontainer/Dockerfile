# Imagen base oficial de Microsoft para Node.js 22 LTS (Alpine — imagen ligera)
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-alpine

# ── pnpm — gestor de paquetes exclusivo del bootcamp ─────────────────────────
# Se instala vía corepack (incluido en Node 22) para no depender de npm install
ARG PNPM_VERSION=9.15.4
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

# ── Herramientas globales de desarrollo ───────────────────────────────────────
# typescript: compilador para typecheck fuera de Vite
# vite:       CLI de Vite para builds y preview
RUN pnpm add --global typescript@5.8.3 vite@6.3.5

# Directorio de trabajo por defecto dentro del contenedor
WORKDIR /workspace
