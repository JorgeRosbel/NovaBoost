import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src/pages');
const entries = fs.readdirSync(baseDir);


console.log("-----------------------------------------------------------")
console.log("🚀 Routes found in src/pages:\n");
for (const name of entries) {
  // Solo carpetas (no .astro ni .js)
  const isFolder = !name.endsWith(".js") ? name : null;

  if (isFolder) {
    console.log(name === "index.astro" ? "✅  /  <--(means Home Page)": `✅  /${name}`);
  }
}
console.log("-----------------------------------------------------------")

// ---
// title: "Protegiendo Nuestro Planeta: Pequeñas Acciones, Gran Impacto"
// description: "Descubre cómo simples hábitos diarios pueden marcar la diferencia en la conservación del medio ambiente y la salud del planeta."
// pubDate: 2025-07-05
// updatedDate: 2025-07-05
// heroImage: "../../assets/blog-placeholder-1.jpg"
// ---