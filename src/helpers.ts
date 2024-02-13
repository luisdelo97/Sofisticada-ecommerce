import { IItem } from "./model";

export const getSubstring = (text: string, substringEnd: number): string => {
  return text?.length > substringEnd
    ? `${text?.substring(0, substringEnd)}...`
    : text;
};

export const calculateItemsTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export function formatPrice(num: number) {
  // Primero, convertimos el número a una cadena de texto
  let numParts = num.toString().split(".");

  // Luego, aplicamos el formato de separador de miles a la parte entera
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Finalmente, unimos las partes entera y decimal con una coma
  return numParts.join(",");
}
