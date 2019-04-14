import React from 'react';
import { Redirect } from 'react-router-dom';

import withAuthentication from '../../utils/withAuthentication';
import { PREFERENCES } from '../../utils/routes';

const Home = () => <Redirect to={PREFERENCES} />;

export default withAuthentication(Home);
