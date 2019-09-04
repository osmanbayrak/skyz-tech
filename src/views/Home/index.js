import './index.css';
import React from 'react';
import i18n from '../../i18n';
import { Carousel, Row, Col, Card, Divider } from 'antd';
import banner1 from '../../assets/homepage_zeminsiz.png';
import rdFocusImg from '../../assets/rdFocusImg.png';
import visibilityImg from '../../assets/visibilityImg.jpg';
import automationImg from '../../assets/automationImg.jpg';
import complianceImg from '../../assets/complianceImg.jpg';

class HomePage extends React.Component {
  render() {
    return (
      <div id="home" className="homeDiv">
        <div className="bannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row style={{marginTop: '50px', marginBottom: '0'}} className="contentBlock">
          <h1 style={{fontSize: '30px'}}>{i18n.t('wwa_h2_desc')}</h1>
          <h3>{i18n.t('wwa_p_desc')}</h3>
        </Row>
        <Row className="contentBlock">
          <Col className="titleCol">
            <span className="highlightsHeader">{i18n.t('highlights')}</span>
          </Col>
          <Col lg={6} style={{cursor: 'pointer'}}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={rdFocusImg} /></span>}>
              R&D Focus:  a certified R&D center by the Ministry of Industry and Technology since 2017
            </Card>
          </Col>
          <Col lg={6} style={{cursor: 'pointer'}}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={visibilityImg} /></span>}>
              Scalable Solutions: Proven solutions with integration capabilities for multi vendor networks
            </Card>
          </Col>
          <Col lg={6} style={{cursor: 'pointer'}}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={automationImg} /></span>}>
              Cutting Edge Technologies in Visibility, Automation and Compliance areas
            </Card>
          </Col>
          <Col lg={6} style={{cursor: 'pointer'}}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={complianceImg} /></span>}>
              Expertise on maintaining large scale networks, Big Data technologies and scalable packet level data handling 
            </Card>
          </Col>
        </Row>
      </div>
      
    );
  }
}

export default HomePage;

