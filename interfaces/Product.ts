export default interface Product {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: object
  boil_volume: object
  method: object
  ingredients: object
  food_pairing: object
  brewers_tips: string
  contributed_by: string
}
