import { Navigate, Route, Routes } from 'react-router-dom';

import { Cart } from './Cart';

export const CartRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Cart />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};