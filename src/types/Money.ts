export interface Money {
  /** Liquid cash on hand */
  cash: number
  /** Balance in bank accounts */
  bank: number
  /** Outstanding debt */
  debt: number
}