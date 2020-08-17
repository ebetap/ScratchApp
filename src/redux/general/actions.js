import * as types from './types';
import request from 'request';

export const getBanner = () => dispatch => {
  dispatch({ type: types.SET_LOADING, payload: true });

  request({
    method: 'get',
    url: 'banner'
  })
    .then(res => {
      console.log('res', res);
      dispatch({ type: types.SET_LOADING, payload: false });
    })
    .catch(err => {
      dispatch({ type: types.SET_LOADING, payload: false });
      console.log('err', err);
    });
};
