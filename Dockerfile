# ==========================================
# Stage 1: Build the Vite application
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package.json package-lock.json* ./

# Install all dependencies cleanly
RUN npm ci

# Copy full application source code and public assets
COPY . .

# Build production bundle to /app/dist
RUN npm run build

# ==========================================
# Stage 2: Serve with lightweight Nginx
# ==========================================
FROM nginx:alpine AS runner

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy optimized nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Healthcheck to verify the web server is running
HEALTHCHECK --interval=30s --timeout=3s CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
