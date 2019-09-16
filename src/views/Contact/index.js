import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Card, Icon } from 'antd';
import banner1 from '../../assets/contact_banner.png';

class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="homeDiv">
        <div className="doubleBannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Row className="subtitleRow">
            <Col span={10} className="titleRowDivider" />
            <Col span={4} className="titleMiddleDiv">
              <span className="highlightsHeader">{i18n.t('contact_us')}</span>
            </Col>
            <Col span={10} className="titleRowDivider" />
          </Row>
          <Row>
            <p style={{ color: 'rgba(0,0,0, 0.8)', fontSize: '24px' }}>
              Masaldan İş Merkezi, Kısıklı Mahallesi, Alemdağ Caddesi, No:60 C Blok D:8
              Üsküdar/İSTANBUL
            </p>
            <div style={{ fontSize: '18px', color: 'rgba(0,0,0, 0.8)' }}>
              <div style={{ marginBottom: '30px' }}>
                <a href="mailTo:info@sekomyazilim.com.tr">info@sekomyazilim.com.tr</a>{' '}
                <Icon type="inbox" />
              </div>
              <p>
                Tel: 0216 316 0103 <Icon type="phone" />
              </p>
              <p>
                Fax: 0216 316 0109 <Icon type="printer" />
              </p>
            </div>
            <div id="map" className="map" />
          </Row>
        </Row>
      </div>
    );
  }
}

export default Contact;
