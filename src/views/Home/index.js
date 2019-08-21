import './index.css';
import React from 'react';
import i18n from '../../i18n';
import { Carousel, Row, Col, Card, Divider } from 'antd';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import rdFocusImg from '../../assets/rdFocusImg.jpg';
import visibilityImg from '../../assets/visibilityImg.jpg';
import automationImg from '../../assets/automationImg.jpg';
import complianceImg from '../../assets/complianceImg.jpg';

class HomePage extends React.Component {
  render() {
    return (
      <div id="home" className="homeDiv">
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
        <Row style={{marginTop: '50px', marginBottom: '60px'}} className="contentBlock">
          <h1 style={{fontSize: '30px'}}>{i18n.t('wwa_h2_desc')}</h1>
          <h3>{i18n.t('wwa_p_desc')}</h3>
        </Row>
        <Row className="contentBlock">
          <h1 style={{marginBottom: '35px'}} className="highlightsHeader">{i18n.t('highlights')}</h1>
          <Col lg={6} style={{cursor: 'pointer'}}>
            <Card className="homeCard" style={{ fontSize: '20px', background: '#cbf0f7', paddingLeft: '0px', paddingRight: '0px', borderRadius: '5px'}} bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden'}}><img className="cardImageCover" alt="example" src={rdFocusImg} /></span>}>
              R&D Focus:  a certified R&D center by the Ministry of Industry and Technology since 2017
            </Card>
          </Col>
          <Col lg={6} style={{cursor: 'pointer'}}>
            <Card className="homeCard" style={{ fontSize: '20px', background: '#cbf0f7', paddingLeft: '0px', paddingRight: '0px', borderRadius: '5px'}} bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden'}}><img className="cardImageCover" alt="example" src={visibilityImg} /></span>}>
              Scalable Solutions: Proven solutions with integration capabilities for multi vendor networks
            </Card>
          </Col>
          <Col lg={6} style={{cursor: 'pointer'}}>
            <Card className="homeCard" style={{ fontSize: '20px', background: '#cbf0f7', paddingLeft: '0px', paddingRight: '0px', borderRadius: '5px'}} bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden'}}><img className="cardImageCover" alt="example" src={automationImg} /></span>}>
              Cutting Edge Technologies in Visibility, Automation and Compliance areas
            </Card>
          </Col>
          <Col lg={6} style={{cursor: 'pointer'}}>
            <Card className="homeCard" style={{ fontSize: '20px', background: '#cbf0f7', paddingLeft: '0px', paddingRight: '0px', borderRadius: '5px'}} bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden'}}><img className="cardImageCover" alt="example" src={complianceImg} /></span>}>
              Expertise on maintaining large scale networks, Big Data technologies and scalable packet level data handling 
            </Card>
          </Col>
        </Row>
      </div>
      
    );
  }
}

export default HomePage;

