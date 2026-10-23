"5" + 3 //53; 53; number;
/* Se debe ya que al uno ser una cadena de caracteres y el otro un numero, no hace la suma sino la agregacion como cadena (caso contrario el uso de Number("5") + 3 donde el resultado es 8) */

"5" * 3 //15; 15; number;
/*A diferencia de la suma, el funcionamiento es distinto ya que sobrentiende la cadena como un number y realiza la multiplicación*/ 

"5" - "2" //3; 3; number;
/*Al igual que la multiplñicación, la resta aplica la misma metodologia de resolución*/

Number("") //0; 0; number;
/*A pesar de no contener visualmente un valor, el proceso en javascript identifica un valor 0 internamente en la operación, a deiferencia de percibir Null o undefined*/

Number("12px") //NaN; NaN; number;
//Su tipo se percibe como number debido a la función, sin embargo, su interior contiene una cadena de caracteres que no convierte la expresion ya que contiene caracteres alfanumericos

parseInt("12px") //12; 12; number;
/*A comparación con Number, parseInt() es una función que extrae unicamente el valor numerico de la cadena */

parseFloat("3.75€") //3.75; 3.75; number;
/*Al igual que parseInt, parseFloat() extrae unicamente el valor compuesto por decimales unicamente, omitiendo simbolos */

"10" == 10 //True; True; boolean;
/*Al haber dos ==, lo que hace JavaScript es comparar si externamente contienen otro tipo, si su contenido es igual */

"10" === 10 //False; False; boolean;
/*Al existir 3 =, cambia la comparación no solo por su contenido sino también por el tipo en el que esta escrito, al ser uno string y el otro number, compara su tipo */

null + 1 //1; 1; number;
/*null es un caracter de un number que no contiene un valor, esto incluye el 0, pero al agregarse el 1, su valor pasa de ser nulo a 1 */

undefined + 1 //NaN; NaN; number;
/*La respuesta es NaN ya que a diferencia de null, el valor no ha sido definido  */
typeof NaN //Number
Boolean("0") //True
0 || "valor por defecto" //valor por defecto
0 ?? "valor por defecto" //0