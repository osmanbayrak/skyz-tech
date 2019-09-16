import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Card, Icon } from 'antd';
import banner1 from '../../assets/creer_zeminsiz.png';
import card1 from '../../assets/cardImage.jpg';
import card2 from '../../assets/cardImage2.png';
import card3 from '../../assets/cardImage3.png';
import card4 from '../../assets/cardImage4.png';

class Career extends React.Component {
  state = {
    currentStep: 0,
    screenWidth: window.innerWidth,
  };

  updateWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    let isMd = false;
    if (this.state.screenWidth < 1200) {
      isMd = true;
    }
    return (
      <div id="career" className="homeDiv">
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span className="highlightsHeader">{i18n.t('career')}</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="doubleBannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Row className="subtitleRow">
            <Col span={8} className="subtitleRowDivider" />
            <Col span={8} className="subtitleMiddleDiv">
              <span className="subtitleSpan">{i18n.t('Why Work With Us?')}</span>
            </Col>
            <Col span={8} className="subtitleRowDivider" />
          </Row>
          <Col lg={8}>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'scroll' }}
            >
              <div>New Technologies</div>
              As an R&D company, we always follow up new technologies to provide our customers best
              of the breed solutions in the market.
            </Card>
          </Col>
          <Col lg={8}>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>Friendly & Dynamic Work Environment</div>
              <p>
                Our positive work environment and friendly atmosphere are the most important values
                of our company.
              </p>
              <p>We don’t force our employee to work, we motivate them to love their work.</p>
            </Card>
          </Col>
          <Col lg={8}>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>Private Life & Work-Life Balance</div>
              <p>
                Our team is able to deliver great results because we emphasize the importance of a
                good work / life balance, and take time to have fun together as a team.
              </p>
            </Card>
          </Col>
          <Col lg={8}>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'scroll' }}
            >
              <div>Career Model</div>
              <p>
                We provide our employees with a good career model and give them a chance to change
                their profession according to their talents.
              </p>
            </Card>
          </Col>
          <Col lg={8}>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>We help each other right from the start</div>
              <p>
                We introduce a body-model for our new employees. We assign a body employee for each
                new employee to accelerate and facilitate their adaption to our company and to help
                them right from the start.
              </p>
            </Card>
          </Col>
          <Col lg={8}>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'scroll' }}
            >
              <div>Creativity & New Business Ideas</div>
              <p>
                We support new technologies, innovations, and ideas - help them go to market. We
                also reward R&D ideas of our workers and make regular meetings to support new
                projects.
              </p>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px' }} className="contentBlock">
          <Row className="subtitleRow">
            <Col span={8} className="subtitleRowDivider" />
            <Col span={8} className="subtitleMiddleDiv">
              <span className="subtitleSpan">{i18n.t('The Selection Process')}</span>
            </Col>
            <Col span={8} className="subtitleRowDivider" />
          </Row>
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'scroll' }}
            >
              <div>New Technologies</div>
              As an R&D company, we always follow up new technologies to provide our customers best
              of the breed solutions in the market.
            </Card>
          </Col>
          <Col xl={1} md={24}>
            <Icon
              style={{
                fontSize: '36px',
                marginTop: isMd ? '25px' : '102px',
                marginBottom: isMd ? '25px' : '0',
                color: 'rgba(0,0,0,0.7)',
              }}
              type={isMd ? 'down' : 'right'}
            />
          </Col>
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>Friendly & Dynamic Work Environment</div>
              <p>
                Our positive work environment and friendly atmosphere are the most important values
                of our company.
              </p>
              <p>We don’t force our employee to work, we motivate them to love their work.</p>
            </Card>
          </Col>
          <Col xl={1} md={24}>
            <Icon
              style={{
                fontSize: '36px',
                marginTop: isMd ? '25px' : '102px',
                marginBottom: isMd ? '25px' : '0',
                color: 'rgba(0,0,0,0.7)',
              }}
              type={isMd ? 'down' : 'right'}
            />
          </Col>
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>Private Life & Work-Life Balance</div>
              <p>
                Our team is able to deliver great results because we emphasize the importance of a
                good work / life balance, and take time to have fun together as a team.
              </p>
            </Card>
          </Col>
          {isMd ? (
            <Col xl={1} md={24}>
              <Icon
                style={{
                  fontSize: '36px',
                  marginTop: '25px',
                  marginBottom: '25px',
                  color: 'rgba(0,0,0,0.7)',
                }}
                type="down"
              />
            </Col>
          ) : null}
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'scroll' }}
            >
              <div>Career Model</div>
              <p>
                We provide our employees with a good career model and give them a chance to change
                their profession according to their talents.
              </p>
            </Card>
          </Col>
          <Col xl={1} md={24}>
            <Icon
              style={{
                fontSize: '36px',
                marginTop: isMd ? '25px' : '102px',
                marginBottom: isMd ? '25px' : '0',
                color: 'rgba(0,0,0,0.7)',
              }}
              type={isMd ? 'down' : 'right'}
            />
          </Col>
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>We help each other right from the start</div>
              <p>
                We introduce a body-model for our new employees. We assign a body employee for each
                new employee to accelerate and facilitate their adaption to our company and to help
                them right from the start.
              </p>
            </Card>
          </Col>
          <Col xl={1} md={24}>
            <Icon
              style={{
                fontSize: '36px',
                marginTop: isMd ? '25px' : '102px',
                marginBottom: isMd ? '25px' : '0',
                color: 'rgba(0,0,0,0.7)',
              }}
              type={isMd ? 'down' : 'right'}
            />
          </Col>
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'scroll' }}
            >
              <div>Creativity & New Business Ideas</div>
              <p>
                We support new technologies, innovations, and ideas - help them go to market. We
                also reward R&D ideas of our workers and make regular meetings to support new
                projects.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Career;
