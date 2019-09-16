import axios from 'axios';
import global from '../global';
import message from 'antd/lib/message';
import { UPDATE_DATA, GET_DATA, DELETE_DATA, ADD_DATA } from './actionTypes';
import i18n from '../i18n';

export function updateData(id, filter) {
  return dispatch => {
    axios.put(`/api/data/${id}/`, filter).then(
      res => {
        dispatch({ type: UPDATE_DATA, payload: res.data });
        message.success(i18n.t('UPDATED'));
      },
      err => {
        global.fail_notification(err);
      },
    );
  };
}

export function deleteData(id) {
  return dispatch => {
    axios.delete(`/api/data/${id}/`).then(
      () => {
        message.success(i18n.t('deleted'));
        dispatch({ type: DELETE_DATA, payload: id });
      },
      err => {
        global.fail_notification(err);
      },
    );
  };
}

export function getData(id) {
  return dispatch => {
    axios.get(`/api/data/${id}/`).then(
      res => {
        dispatch({ type: GET_DATA, payload: res.data });
      },
      err => {
        global.fail_notification(err);
      },
    );
  };
}

export function addData(data) {
  return dispatch => {
    axios.post('/api/data/', data).then(
      res => {
        dispatch({ type: ADD_DATA, payload: res.data });
        message.success(i18n.t('success_tenant'));
      },
      err => {
        global.fail_notification(err);
      },
    );
  };
}
