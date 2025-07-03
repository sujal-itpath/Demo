import { Routes, Route } from 'react-router-dom';

import Layout from '../component/layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import FaceSwapFlow from '../component/FaceSwap/FaceSwapFlow';

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/face-swap" element={<FaceSwapFlow />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
