import React from 'react';
import i18n from '../../i18n';
import { Carousel, Row, Col, Card, Divider, Tabs, Icon } from 'antd';
import banner1 from '../../assets/Expertise_zeminsiz.png';

class Expertise extends React.Component {
  render() {
    return (
      <div id="home" className="homeDiv">
        <div className="bannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Col className="titleCol">
            <span className="highlightsHeader">{i18n.t('expertise')}</span>
          </Col>
          <Col md={8} >
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '70px'}} type="share-alt" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Network Visibility Suite</div>
                <div>Integrated Network Discovery, Performance Monitoring, Fault Management and Log Management Solutions</div>
              </div>
            </Card>
          </Col>
          <Col md={8} >
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '70px'}} type="wifi" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>IPAM</div>
                <div style={{fontSize: '18px'}}>Carrier Grade IP Address Management solution providing Live IP inventory</div>
              </div>
            </Card>
          </Col>
          <Col md={8} >
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '70px'}} type="cluster" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Discovery & Inventory</div>
                <div style={{fontSize: '18px'}}>A comprehensive Discovery, Network Resource Inventory and Reconciliation Solution for Telco Networks</div>
              </div>
            </Card>
          </Col>
          <Col md={8} >
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '70px'}} type="control" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Peta Scale Logger</div>
                <div style={{fontSize: '18px'}}>Regulatory traffic flow logging at Petabyte Scale</div>
              </div>
            </Card>
          </Col>
          <Col md={8} >
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '70px'}} type="global" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>LOTT IoT Platform</div>
                <div style={{fontSize: '18px'}}>Multi Tenant platform for collecting, processing and visualization of vast amounts of data from multi vendor sensors.</div>
              </div>
            </Card>
          </Col>
          <Col md={8} >
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '70px'}} type="usergroup-add" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Broadband Customer Experience Management</div>
                <div style={{fontSize: '18px'}}>Our Big Data solution for consolidating and analyzing business critical information from different information sources on the broadband access network </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Expertise;