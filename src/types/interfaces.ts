export interface ICatalogCard {
  id: number;
  title: string;
  price: number;
  category: string;
  square: number;
  technology: string;
  image: string;
  brand: string;
}

export interface ICardItem {
  id: number;
  title: string;
  category: string;
  square: number;
  technology: string;
  image: string;
  image_item: string;
  brand: string;
  guarantee: number;
  price: number;
  serviced_area?: number;
  mode?: string;
  cooling_temperature?: string;
  heating_temperature?: string;
  indoor_unit_noise?: string;
  outdoor_unit_noise?: string;
  indoor_unit_width?: number;
  outdoor_unit_width?: number;
  outdoor_unit_depth?: number;
  add_functions: string[];
  made_in?: string;
  manufacturer: string;
  importer: string;
}

export interface INothingFound {
  image: string;
  subtitle: string;
  text: string;
  imgActive?: string;
}
