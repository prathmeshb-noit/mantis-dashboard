import { RouterProvider, useNavigate } from 'react-router-dom';

// project import
import router from 'routes';
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';
import { useEffect } from 'react';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}