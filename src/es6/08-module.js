import hello from "./module.js";
hello(); //SyntaxError: no sabe que esto es parte de un modulo

//para solucionarlo anniadimos ,"type": "module" en package.json
//tambien puede renombrarse el modulo con la extencion .mjs

hello() //Hello