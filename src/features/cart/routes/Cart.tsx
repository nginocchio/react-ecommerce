import LineItems from "../components/LineItems";
import { ContentLayout } from "../../../components/ContentLayout";

export const Cart = () => {
    return(
        <ContentLayout title={"Cart"}>
            <LineItems />
        </ContentLayout>
    );
}