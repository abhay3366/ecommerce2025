import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import FilterSection from "../component/FilterSection";
import ProductCart from "../component/ProductCart";
import ShimmerPage from "../Shimmer/ShimmerCard";

const Product = () => {
  const { data, getUniqueCategory } = useContext(DataContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    // start fresh from original data
    let result = data;

    // 🔍 search filter
    if (search.trim() !== "") {
      result = result.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 📂 category filter
    if (category.length > 0) {
      result = result.filter((el) => category.includes(el.category));
    }

    // ⭐ rating filter
    if (rating.length > 0) {
      result = result.filter((el) =>
        rating.some((rate1) => el.rating.rate > rate1)
      );
    }
    // price filter
        if (priceRange.trim() !== "") {
      result = result.filter((el) =>
        (el.price<priceRange)
      );
    }
    // ✅ update once
    setFilterData(result);
  }, [search, category, rating, data,priceRange]);

  if (data.length == 0) {
    return <ShimmerPage />;
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              rating={rating}
              setRating={setRating}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
            <div className="productDiv grid grid-cols-4 gap-7 mt-7">
              {filterData != 0 ? (
                filterData.map((product, index) => (
                  <ProductCart key={index} product={product} />
                ))
              ) : (
                <h2>Data Not Found</h2>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1>No data</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
