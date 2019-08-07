// @ts-check
import React from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import i18n from './i18n';

const NotFound = () => (
  <Row type="flex" justify="center" align="top" className="Layout marT20 text-center">
    <Col className="white">
      <h2 className="text-center not-found">{i18n.t('sorry')}</h2>
      <div className="not-found-under-title">
        {i18n.t('no_page')}
        <div className="clearfix" />
        <Button type="primary" className="marT40">
          <Link to="/">{i18n.t('home')}</Link>
        </Button>
      </div>
    </Col>
  </Row>
);

export default NotFound;
