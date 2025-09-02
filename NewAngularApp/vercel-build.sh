#!/bin/bash

echo "Creating environment files..."

# Ensure the environments directory exists
mkdir -p src/environments

# Create environment.ts with Vercel environment variables
cat <<EOT > src/environments/environment.ts
export const environment = {
  production: false,
  githubToken: "${VITE_GITHUB_TOKEN}"
};
EOT

# Create environment.prod.ts with Vercel environment variables
cat <<EOT > src/environments/environment.prod.ts
export const environment = {
  production: true,
  githubToken: "${VITE_GITHUB_TOKEN}"
};
EOT

echo "Environment files created successfully."

# Clean build directory (optional, for safety)
rm -rf dist/portfolio

# Run Angular build for production
npm run build -- --configuration production
