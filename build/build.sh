curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.17.3
export PATH="$HOME/.deno/bin:$PATH"
deno bundle --config tsconfig.json src/index.tsx assets/bundle.js