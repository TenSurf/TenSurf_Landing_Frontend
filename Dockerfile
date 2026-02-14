FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps --force
RUN npm install copy-webpack-plugin@11 ajv@8 ajv-keywords@5 schema-utils@4 --save-dev --legacy-peer-deps
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build -- --no-lint || (echo 'Build with lint failed, trying without type check' && npx next build --no-lint)

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.mjs ./
EXPOSE 3000
CMD ["npm", "start"]
