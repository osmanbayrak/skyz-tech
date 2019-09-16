import { notification } from 'antd';
import i18n from './i18n';

module.exports = {
  fail_notification: error => {
    console.log(error);
    if (error.status < 500) {
      Object.keys(error.data).map((key, index) => {
        notification['error']({
          duration: 6,
          message: i18n.t('error'),
          description: `${key}: ${error.data[key]}`,
        });
      });
    } else {
      notification['error']({
        duration: 6,
        message: i18n.t('error'),
        description: i18n.t('error_occured'),
      });
    }
  },
};
