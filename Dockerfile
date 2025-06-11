# Multi-stage build para otimizar o tamanho da imagem final

# Estágio 1: Build da aplicação
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci --legacy-peer-deps

# Copiar código fonte
COPY src/ ./src/
COPY public/ ./public/
COPY webpack.config.js ./
COPY tailwind.config.js ./
COPY postcss.config.js ./

# Listar arquivos da pasta src para depuração
RUN ls -l /app/src

# Build da aplicação React
RUN npm run build

# Estágio 2: Servidor de produção
FROM nginx:alpine AS production

# Instalar curl para health checks
RUN apk --no-cache add curl

# Copiar configuração customizada do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar os arquivos buildados do estágio anterior
COPY --from=builder /app/build /usr/share/nginx/html

# Criar usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Ajustar permissões
RUN chown -R nextjs:nodejs /usr/share/nginx/html && \
    chown -R nextjs:nodejs /var/cache/nginx && \
    chown -R nextjs:nodejs /var/log/nginx && \
    chown -R nextjs:nodejs /etc/nginx/conf.d && \
    chown -R nextjs:nodejs /var/run && \
    chown -R nextjs:nodejs /run

# Criar diretório para PID do nginx
RUN mkdir -p /var/run/nginx && \
    chown -R nextjs:nodejs /var/run/nginx

# Expor porta 3000
EXPOSE 3000

# Usar usuário não-root
USER nextjs

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Comando para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]
