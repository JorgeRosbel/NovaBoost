import { join} from 'path';
import fs from 'fs';

const collections_path = join(process.cwd(), 'src/collections.ts');

function getArrayLiteral(codeString:string) {
  const start = codeString.indexOf('[');
  const end = codeString.indexOf(']', start) + 1;
  
  let literal = codeString.slice(start, end).replace(/\s+/g, '');
  // Asegura comillas dobles y envuelve en comillas simples
  literal = literal.replace(/'/g, '"');
  
  return literal.slice(0, literal.length-3) + '"]'
}

try{
    const content = fs.readFileSync(collections_path , 'utf-8');
    const arr = getArrayLiteral(content)
    const obj = JSON.parse(arr)

    // Colores ANSI
    const RESET = "\x1b[0m";
    const BLUE  = "\x1b[34m";
    const GREEN = "\x1b[32m";

    // Explicación + lista coloreada
    console.log(GREEN + "These are the links to the collections you just created (add them to src/header.consts.ts)👇:\n" +RESET);
    obj.forEach((cat: string) => {
    // alterna colores o elige uno fijo
    const link = `/${cat}/1`;
    console.log(`${BLUE}${link}${RESET}`);
    });

   

    
}catch(error){
    console.log(error)
}