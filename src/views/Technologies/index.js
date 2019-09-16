import './index.css';
import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Card, Icon } from 'antd';
import visibilityImg from '../../assets/techCard1.png';
import complianceImg from '../../assets/techCard2.png';
import automationImg from '../../assets/techCard3.png';
import banner1 from '../../assets/technology_zeminsiz2.png';

class Technologies extends React.Component {
  render() {
    return (
      <div id="tech" className="homeDiv">
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span className="highlightsHeader">{i18n.t('technologies')}</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="doubleBannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Col lg={24} xl={8}>
            <div className="subtitleDiv">Visibility</div>
            <Card
              className="homeCard"
              bodyStyle={{ height: '340px', minHeight: '340px', overflow: 'scroll' }}
              cover={
                <span
                  style={{
                    overflow: 'hidden',
                    borderRadius: '25px',
                    borderBottomLeftRadius: '0',
                    borderBottomRightRadius: '0',
                  }}
                >
                  <img className="techCardsCover" alt="example" src={visibilityImg} />
                </span>
              }
            >
              <p style={{ textAlign: 'left', fontSize: '18px' }}>
                Complex networks with ten thousands of nodes requre scalable visibility tools. Skyz
                provides stable, proven, multi vendor visibility solutions.
              </p>
              <ul
                style={{
                  fontSize: '16px',
                  marginTop: '15px',
                  listStyle: 'none',
                  textAlign: 'left',
                  lineHeight: '2.4',
                }}
              >
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Infrastructure life-cycle management
                </li>
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Monitor availability and capacity usage on ports
                </li>
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Monitoring and management of multi-vendor, infrastructures
                </li>
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Physical and Logical Network Resource Discovery and Reconciliation
                </li>
              </ul>
            </Card>
          </Col>
          <Col lg={24} xl={8}>
            <div className="subtitleDiv">Automation</div>
            <Card
              className="homeCard"
              bodyStyle={{ height: '340px', minHeight: '340px', overflow: 'scroll' }}
              cover={
                <span
                  style={{
                    overflow: 'hidden',
                    borderRadius: '25px',
                    borderBottomLeftRadius: '0',
                    borderBottomRightRadius: '0',
                  }}
                >
                  <img className="techCardsCover" alt="example" src={automationImg} />
                </span>
              }
            >
              <p style={{ textAlign: 'left', fontSize: '18px' }}>
                Auto provisioning capabilities integrated with business support systems (such as
                order management), reduce the risks and overheads caused by manual operations.Skyz
                automation technologies enable easier management of complex and multi vendor
                networks, as well as benefiting from evolving Software Defined Technologies
              </p>
              <ul
                style={{
                  fontSize: '16px',
                  marginTop: '15px',
                  listStyle: 'none',
                  textAlign: 'left',
                  lineHeight: '2.4',
                }}
              >
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Scalable, scheduled, distributed data collection
                </li>
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Satisfy regulations related to network resource usage
                </li>
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Flexible and extensive regulatory reporting capabilities
                </li>
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Ability to collect and store flow data (IPFIX) at a scalable level
                </li>
              </ul>
            </Card>
          </Col>
          <Col lg={24} xl={8}>
            <div className="subtitleDiv">Compliance</div>
            <Card
              className="homeCard"
              bodyStyle={{ height: '340px', minHeight: '340px', overflow: 'scroll' }}
              cover={
                <span
                  style={{
                    overflow: 'hidden',
                    borderRadius: '25px',
                    borderBottomLeftRadius: '0',
                    borderBottomRightRadius: '0',
                  }}
                >
                  <img className="techCardsCover" alt="example" src={complianceImg} />
                </span>
              }
            >
              <p style={{ textAlign: 'left', fontSize: '18px' }}>
                In today's business environment following diverse and complex regulations is
                becoming increasingly important for the success of a company. Our compliance
                technologies will help you to stay on the right side of the regulations
              </p>
              <ul
                style={{
                  fontSize: '16px',
                  marginTop: '15px',
                  listStyle: 'none',
                  textAlign: 'left',
                  lineHeight: '2.4',
                }}
              >
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Respond to alarming situations with automated actions
                </li>
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Automatic backup and recovery of infrastructure configuration
                </li>
                <li>
                  <Icon
                    style={{ fontSize: '20px', marginRight: '10px' }}
                    type="check-circle"
                    theme="twoTone"
                  />
                  Provide automatic configuration of infrastructure in accordance to customer needs
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Technologies;
