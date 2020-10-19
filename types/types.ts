/* ------ Express API middleware ------ */

// New object composed from API response and tagged with exchange
export interface exchangeObject {
  exchange: string,
  quantity: number,
  price: number
}

// Processed response sent back to client
export interface processedData { 
  [bid: string]: exchangeObject[],
  ask: exchangeObject[]
}