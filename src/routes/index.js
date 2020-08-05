import React from 'react';
import { withCookies } from 'react-cookie';

import AfterRoutes from './parents/AfterRoutes';
import BeforeRoutes from './parents/BeforeRoutes';

const Routes = (props) => {
  return (
    <div>
      {props.cookies.get('current-token') ? <AfterRoutes /> : <BeforeRoutes />}
      {/* {props.cookies.get('current-token') ? <BeforeRoutes /> : <AfterRoutes />} */}
    </div>
  );
};

export default withCookies(Routes);
