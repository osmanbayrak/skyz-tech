import React from 'react';
import i18n from '../../i18n';
import { Carousel, Row, Col, Card, Divider } from 'antd';
import banner1 from '../../assets/homepage_zeminsiz.png';
import card1 from '../../assets/cardImage.jpg';
import card2 from '../../assets/cardImage2.png';
import card3 from '../../assets/cardImage3.png';
import card4 from '../../assets/cardImage4.png';

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
          <Row className="subtitleRow">
            <Col span={10} className="titleRowDivider"></Col>
            <Col span={4} className="titleMiddleDiv">
              <span className="highlightsHeader">{i18n.t('highlights')}</span>
            </Col>
            <Col span={10} className="titleRowDivider"></Col>
          </Row>
          <Col lg={12} xl={6}>
            <div className="subtitleDiv">R&D Focus</div>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card2} /></span>}>
              A certified R&D center by the Ministry of Industry and Technology since 2017
            </Card>
          </Col>
          <Col lg={12} xl={6}>
            <div className="subtitleDiv">Scalable Solutions</div>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card4} /></span>}>
              Proven solutions with integration capabilities for multi vendor networks
            </Card>
          </Col>
          <Col lg={12} xl={6}>
            <div className="subtitleDiv">Cutting Edge Technologies</div>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card3} /></span>}>
              Cutting Edge Technologies in Visibility, Automation and Compliance areas
            </Card>
          </Col>
          <Col lg={12} xl={6}>
            <div className="subtitleDiv">Expertise on Big Data</div>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card1} /></span>}>
              Expertise on maintaining large scale networks, Big Data technologies and scalable packet level data handling 
            </Card>
          </Col>
        </Row>
      </div>
      
    );
  }
}

export default HomePage;

