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
        <h1 className="wwa_header">{i18n.t('who_we_are')}</h1>
        <div className="blockFullWidth">
          <Row className="contentBlock">
            <h2 style={{color: 'white'}}>{i18n.t('wwa_h2_desc')}</h2>
            <p>{i18n.t('wwa_p_desc')}</p>
          </Row>
        </div>
        <div>
          <Row className="contentBlock">
            <h1 className="highlightsHeader">{i18n.t('highlights')}</h1>
            <Col md={6} style={{cursor: 'pointer'}}>
              <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('rd_focus')}</h3>} cover={<img className="cardImageCover" alt="example" src={rdFocusImg} />}>
                a certified R&D center by the Ministry of Industry and Technology since 2017
              </Card>
            </Col>
            <Col md={6} style={{cursor: 'pointer'}}>
              <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('visibility')}</h3>} cover={<img className="cardImageCover" alt="example" src={visibilityImg} />}>
                Lorem ipsum elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien
              </Card>
            </Col>
            <Col md={6} style={{cursor: 'pointer'}}>
              <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('automation')}</h3>} cover={<img className="cardImageCover" alt="example" src={automationImg} />}>
                Lorem ipsum elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien
              </Card>
            </Col>
            <Col md={6} style={{cursor: 'pointer'}}>
              <Card style={{overflow: 'hidden'}} bodyStyle={{minHeight: '140px'}} title={<h3 style={{marginBottom: '15px'}}>{i18n.t('compliance')}</h3>} cover={<img className="cardImageCover" alt="example" src={complianceImg} />}>
                Lorem ipsum elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      
    );
  }
}

export default HomePage;

