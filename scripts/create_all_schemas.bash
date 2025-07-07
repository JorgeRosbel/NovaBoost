#!/usr/bin/env bash
# scripts/create_all_schemas.bash

# 1) Extrae slug (todo lo que venga tras href: '/ y hasta el primer /)
# 2) elimina duplicados
# 3) ejecuta el bucle
grep -oP "href:\s*'/\K[^/]+" src/config/header.consts.ts \
  | sort -u \
  | while read -r name; do
      echo "🏗  create-collection -- $name"
      npm run create-collection -- "$name"
    done
