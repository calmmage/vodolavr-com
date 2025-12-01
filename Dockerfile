# Multi-stage Next.js build using pnpm

ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
RUN pnpm run build

FROM deps AS prod-deps
RUN pnpm prune --prod

FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs && corepack enable
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs ./next.config.mjs
USER nextjs
EXPOSE 3000
CMD ["pnpm", "start"]
