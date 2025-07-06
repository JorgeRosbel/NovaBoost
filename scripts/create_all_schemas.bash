# 1) Extrae todos los href (sin la barra), 2) ordena y elimina duplicados, 3) ejecuta el bucle
grep -oP "href:\s*'/\K[^']+"  src/config/header.consts.ts \
  | sort -u \
  | while read -r name; do
      echo "🏗  create-schema -- $name"
      npm run create-schema -- "$name"
    done
