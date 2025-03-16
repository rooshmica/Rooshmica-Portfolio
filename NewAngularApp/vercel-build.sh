#!/bin/bash

echo "Creating environment.ts file..."

# Ensure the environments directory exists
mkdir -p src/environments

# Create environment.ts with Vercel environment variables
cat <<EOT > src/environments/environment.ts
export const environment = {
    production: false,
    githubToken: "${VITE_GITHUB_TOKEN}"
};
EOT

echo "environment.ts file created successfully."

# Run Angular build
npm run build
