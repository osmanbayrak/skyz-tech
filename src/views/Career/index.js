import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Card, Icon, Input, Form } from 'antd';
import banner1 from '../../assets/creer_zeminsiz.png';
import card1 from '../../assets/cardImage.jpg';
import card2 from '../../assets/cardImage2.png';
import card3 from '../../assets/cardImage3.png';
import card4 from '../../assets/cardImage4.png';

class Career extends React.Component {
  render() {
    return (
      <div id="career" className="homeDiv">
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider"></Col>
          <Col span={4} className="titleMiddleDiv">
            <span className="highlightsHeader">{i18n.t('career')}</span>
          </Col>
          <Col span={10} className="titleRowDivider"></Col>
        </Row>
        <div className="doubleBannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Row className="subtitleRow">
            <Col span={8} className="subtitleRowDivider"></Col>
            <Col span={8} className="subtitleMiddleDiv">
              <span className="subtitleSpan">{i18n.t('Why Work With Us?')}</span>
            </Col>
            <Col span={8} className="subtitleRowDivider"></Col>
          </Row>
          <Col lg={8}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card2} /></span>}>
              R&D Focus:  a certified R&D center by the Ministry of Industry and Technology since 2017
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card4} /></span>}>
              Scalable Solutions: Proven solutions with integration capabilities for multi vendor networks
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card3} /></span>}>
              Cutting Edge Technologies in Visibility, Automation and Compliance areas
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card1} /></span>}>
              Expertise on maintaining large scale networks, Big Data technologies and scalable packet level data handling 
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'hidden'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card3} /></span>}>
              Cutting Edge Technologies in Visibility, Automation and Compliance areas
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="homeCard" bodyStyle={{height: '160px', minHeight: '160px', overflow: 'scroll'}} cover={<span style={{overflow: 'hidden', borderRadius: '25px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}><img className="homeCardsCover" alt="example" src={card1} /></span>}>
              Expertise on maintaining large scale networks, Big Data technologies and scalable packet level data handling 
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}} className="contentBlock">
          <Row className="subtitleRow">
            <Col span={8} className="subtitleRowDivider"></Col>
            <Col span={8} className="subtitleMiddleDiv">
              <span className="subtitleSpan">{i18n.t('The Selection Process')}</span>
            </Col>
            <Col span={8} className="subtitleRowDivider"></Col>
          </Row>
          <Col md={8}>
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '40px'}} type="share-alt" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Lorem Ipsum</div>
                <div style={{fontSize: '18px'}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
              </div>
            </Card>
          </Col>
          <Col md={8} >
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '40px'}} type="wifi" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Lorem Ipsum</div>
                <div style={{fontSize: '18px'}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
              </div>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '40px'}} type="cluster" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Lorem Ipsum</div>
                <div style={{fontSize: '18px'}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
              </div>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '40px'}} type="control" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Lorem Ipsum</div>
                <div style={{fontSize: '18px'}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
              </div>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '40px'}} type="control" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Lorem Ipsum</div>
                <div style={{fontSize: '18px'}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
              </div>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="homeCard" bodyStyle={{minHeight: '280px'}}>
              <div className="overlayDiv">
                <div style={{marginTop: '30px'}}><Icon style={{fontSize: '40px'}} type="control" /></div>
                <div style={{fontSize: '20px', marginTop: '20px', marginBottom: '15px'}}>Lorem Ipsum</div>
                <div style={{fontSize: '18px'}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Career;