import { client } from "@/sanity/lib/client";
import { CATEGORIES_QUERY, PRODUCTS_QUERY } from "@/sanity/lib/queries";
import HomeClient, { SanityProduct } from "@/components/HomeClient";

// Opt out of dynamic rendering so it's fully static at build time
export const dynamic = 'force-static';
// Revalidate every 60 seconds if not fully static (ignored during 'next export')
export const revalidate = 60;

export default async function Home() {
  // Fetch data in parallel
  const [categoriesData, products] = await Promise.all([
    client.fetch(CATEGORIES_QUERY),
    client.fetch(PRODUCTS_QUERY),
  ]);

  // Extract category names from objects to pass an array of strings to the client component
  const categories = categoriesData.map((cat: any) => cat.title);

  return (
    <HomeClient 
      categories={categories} 
      products={products as SanityProduct[]} 
    />
  );
}
