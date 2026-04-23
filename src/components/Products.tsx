import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
}

const Products = ({ searchTerm }: { searchTerm: string }) => {
  const response = useQuery<Product[]>({
    queryKey: ["products", searchTerm],
    queryFn: async () => {
      const res = await axios.get<ProductsResponse>(
        `https://dummyjson.com/products/search?q=${searchTerm}`,
      );
      return res.data.products;
    },
  });
  // console.log(response.data);
  if (response.isPending) return <Loading />;

  if (response.isError)
    return (
      <p className="text-center text-gray-500 mt-12">
        Something went wrong. Please try again.
      </p>
    );

  if (response.data.length < 1)
    return (
      <p className="text-center text-gray-500 mt-12">
        No results found for {searchTerm}
      </p>
    );

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-6">
      {response.data.map((product) => (
        <div
          key={product.id}
          className="flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-200 cursor-pointer"
        >
          <div className="bg-gray-50 flex items-center justify-center p-5 aspect-square">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-2 p-3 border-t border-gray-100">
            <p className="text-sm text-gray-800 leading-snug line-clamp-2">
              {product.title}
            </p>

            <p className="text-base font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
