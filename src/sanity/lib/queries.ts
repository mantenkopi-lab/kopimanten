import { groq } from "next-sanity";

export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`;

export const PRODUCTS_QUERY = groq`*[_type == "product"] | order(name asc) {
  _id,
  name,
  description,
  "category": category->title,
  "imageUrl": image.asset->url,
  variants[]{
    size,
    price
  }
}`;
