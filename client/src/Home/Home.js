import React from 'react';

import withAuthentication from '../utils/withAuthentication';

const Home = () => (
  <div>
    <h3>Home!</h3>
  </div>
);

export default withAuthentication(Home);
