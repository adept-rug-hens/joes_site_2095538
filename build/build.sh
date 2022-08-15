curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.18.0
export PATH="$HOME/.deno/bin:$PATH"
deno bundle --config tsconfig.json src/index.tsx assets/bundle.js

touch sites-config/redirects.csv
echo "/home.html,/index.html\n/home.html,/failure.html" > sites-config/redirects.csv
ls -al sites-config
cat sites-config/redirects.csv