import { API } from 'aws-amplify';

export const createCommunity = body => {
  return API.post('communities', '/communities', {
    body,
  });
};

export const getCommunities = () => {
  return API.get('communities', '/communities');
};
