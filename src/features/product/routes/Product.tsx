import { ContentLayout } from "src/components/ContentLayout";
import { useStore } from "src/store/useStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

export const Product = () => {
  let { productId } = useParams();
  console.log(productId);
  const product = useStore((state) => state.product);
  const getProduct = useStore((state) => state.getProduct);

  useEffect(() => {
    if (productId !== undefined) {
      getProduct(productId);
    }
  }, []);

  if (!product) return <p>loading...</p>;

    return (
        <ContentLayout title={product.name}>
            <ProductDetail {...product} />
        </ContentLayout>
    );
}