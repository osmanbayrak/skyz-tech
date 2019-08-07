import './index.css';
import React from 'react';
import i18n from '../../i18n';
import { Carousel, Row, Col, Card, Divider, Tabs } from 'antd';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

const { TabPane } = Tabs;

class Technologies extends React.Component {
  changeTab = (e) => {
    console.log(e)
  }
  render() {
    return (
      <div id="home" style={{marginTop: '100px'}}>
        <Carousel autoplay draggable={true}>
          <div>
            <img src={banner1} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src={banner2} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src={banner3} style={{ width: '100%', height: 'auto' }} />
          </div>
        </Carousel>
        <Tabs className="tabsMain" tabBarStyle={{background: '#333', color: 'white', height: '100px'}} defaultActiveKey="1" onChange={this.changeTab}>
          <TabPane tab={<div className="tabPaneTitle">{i18n.t('visibility')}</div>} key="1">
            <Row className="contentBlock">
              <h1 className="wwa_header">{i18n.t('visibility')}</h1>
              <div className="blockFullWidth">
                <Row>
                  <h2 className="mainDesc">{i18n.t('visibility_desc')}</h2>
                </Row>
              </div>
              <Col md={6} >
                <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('monitoring_management')}</h3>}>
                  Monitoring and management of multi-vendor, multi-technology infrastructures
                </Card>
              </Col>
              <Col md={6} >
                <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Life Cycle Management')}</h3>} >
                  Infrastructure life-cycle management
                </Card>
              </Col>
              <Col md={6} >
                <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Capacity & Usage')}</h3>}>
                  Monitor availability and capacity usage on ports
                </Card>
              </Col>
              <Col md={6} >
                <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Discovery & Reconciliation')}</h3>}>
                  Physical and Logical Network Resource Discovery and Reconciliation
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane className="tabsMain" tab={<div className="tabPaneTitle">{i18n.t('automation')}</div>} key="2">
              <Row className="contentBlock">
                <h1 className="wwa_header">{i18n.t('automation')}</h1>
                <div className="blockFullWidth">
                  <Row>
                    <h2 className="mainDesc">{i18n.t('automation_desc')}</h2>
                  </Row>
                </div>
                <Col md={6} >
                  <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Regulatory Reporting')}</h3>}>
                    Flexible and extensive regulatory reporting capabilities
                  </Card>
                </Col>
                <Col md={6} >
                  <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Data Storage')}</h3>}>
                    Ability to collect and store flow data (IPFIX) at a scalable level
                  </Card>
                </Col>
                <Col md={6} >
                  <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Usage')}</h3>}>
                    Satisfy regulations related to network resource usage
                  </Card>
                </Col>
                <Col md={6} >
                  <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Data Collection')}</h3>}>
                    Scalable, scheduled, distributed data collection
                  </Card>
                </Col>
              </Row>
          </TabPane>
          <TabPane  tab={<div className="tabPaneTitle">{i18n.t('compliance')}</div>} key="3">
            <Row className="contentBlock">
              <h1 className="wwa_header">{i18n.t('compliance')}</h1>
              <div className="blockFullWidth">
                <Row>
                  <h2 className="mainDesc">{i18n.t('compliance_desc')}</h2>
                </Row>
              </div>
              <Col md={8} >
                <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Configuration Management')}</h3>}>
                  Automatic backup and recovery of infrastructure configuration
                </Card>
              </Col>
              <Col md={8} >
                <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Provisioning')}</h3>}>
                  Provide automatic configuration of infrastructure in accordance to customer needs
                </Card>
              </Col>
              <Col md={8} >
                <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Fault management')}</h3>}>
                  Respond to alarming situations with automated actions
                </Card>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
      
    );
  }
}

export default Technologies;