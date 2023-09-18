export type filterType =
  | 'q'
  | 'minPrice'
  | 'maxPrice'
  | 'maxPrice'
  | 'generation'
  | 'category'

export interface FilterProps {
  q: string | null
  category: string | null
  minPrice: number | null
  maxPrice: number | null
  generation: string | null
}
