import './index.css';
import React from 'react';
import i18n from '../../i18n';
import { Carousel, Row, Col, Card, Divider, Tabs } from 'antd';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

const { TabPane } = Tabs;

class Solutions extends React.Component {
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
        <Row className="contentBlock">
          <h1 className="wwa_header">{i18n.t('solutions')}</h1>
          <div className="blockFullWidth">
            <Row>
              <h2 className="mainDesc">{i18n.t('solutions_desc')}</h2>
            </Row>
          </div>
          <Col md={8} >
            <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('monitoring_management')}</h3>}>
              Monitoring and management of multi-vendor, multi-technology infrastructures
            </Card>
          </Col>
          <Col md={8} >
            <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Life Cycle Management')}</h3>} >
              Infrastructure life-cycle management
            </Card>
          </Col>
          <Col md={8} >
            <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Capacity & Usage')}</h3>}>
              Monitor availability and capacity usage on ports
            </Card>
          </Col>
        </Row>
        <Row className="contentBlock">
          <Col md={8} >
            <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('monitoring_management')}</h3>}>
              Monitoring and management of multi-vendor, multi-technology infrastructures
            </Card>
          </Col>
          <Col md={8} >
            <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Life Cycle Management')}</h3>} >
              Infrastructure life-cycle management
            </Card>
          </Col>
          <Col md={8} >
            <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('Capacity & Usage')}</h3>}>
              Monitor availability and capacity usage on ports
            </Card>
          </Col>
        </Row>
      </div>
      
    );
  }
}

export default Solutions;