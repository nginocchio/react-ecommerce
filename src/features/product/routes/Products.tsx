import ProductList from "../components/ProductList";
import { ContentLayout } from "../../../components/ContentLayout";

export const Products = () => {
    return(
        <ContentLayout title={"All products"}>
            <ProductList />
        </ContentLayout>
    );
}