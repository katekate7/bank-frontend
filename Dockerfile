# Étape 1 : Construction de l'app
FROM node:20 AS builder
 
# Définir le répertoire de travail
WORKDIR /app
 
# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./
 
# Installer les dépendances (adapter selon votre gestionnaire de paquets)
RUN npm install
 
# Copier le reste de l'application
COPY . .
 
# Construire l'application avec Vite
RUN npm run build
 
# Étape 2 : Serveur de production
FROM nginx:alpine
 
# Copier les fichiers construits dans le dossier nginx
COPY --from=builder /app/dist /usr/share/nginx/html
 
# Copier un fichier de configuration nginx personnalisé (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf
 
# Exposer le port 80
EXPOSE 80
 
# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]