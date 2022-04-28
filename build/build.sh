curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.18.0
export PATH="$HOME/.deno/bin:$PATH"
deno bundle --config tsconfig.json src/index.tsx assets/bundle.js