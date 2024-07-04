import { Link } from "react-router-dom";
import ProductCard from "../../routes/productCard/productCard.components";

import {
  CartegoryPreviewTitle,
  CategoryPreviewProducts,
  CategoryPreviewContainer,
} from "./categoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CartegoryPreviewTitle className="title" to={title}>
          {title.toUpperCase()}
        </CartegoryPreviewTitle>
      </h2>
      <CategoryPreviewProducts>
        {products
          .filter((_, indx) => indx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewProducts>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
