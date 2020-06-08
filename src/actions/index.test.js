import axios from 'axios';
import quakeFetch from './index.js';

jest.mock('axios');

test('should fetch quakes', () => {
  const quakes = quakeFetch;
  const resp = {data: quakes};
  axios.get.mockResolvedValue(resp);  
});
