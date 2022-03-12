import { Navigate, Route, Routes } from 'react-router-dom';

import { Product } from './Product';
import { Products } from './Products';

export const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="/:productId" element={<Product />} />
      <Route path="" element={<Products />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};