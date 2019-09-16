import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Card, Icon } from 'antd';
import banner1 from '../../assets/Expertise_zeminsiz.png';

class Gp extends React.Component {
  render() {
    return (
      <div id="expertise" className="homeDiv">
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span className="highlightsHeader">{i18n.t('expertise')}</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="doubleBannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Col lg={24} xl={12}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '340px', minHeight: '340px', overflow: 'scroll' }}
            >
              <div style={{ marginTop: '30px' }}>
                <Icon style={{ fontSize: '40px' }} type="deployment-unit" />
              </div>
              <div style={{ fontSize: '20px', marginTop: '20px', marginBottom: '15px' }}>
                Networking Technologies
              </div>
              <div>
                While creating software solutions that helps our customers to operate their network
                infrastructures, we acquired extensive networking domain knowledge. We are a team of
                software developers who can communicate with network engineers in their jargon which
                we believe is a key-point in successful network integration & automation projects
              </div>
            </Card>
          </Col>
          <Col lg={24} xl={12}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '340px', minHeight: '340px', overflow: 'scroll' }}
            >
              <div style={{ marginTop: '30px' }}>
                <Icon style={{ fontSize: '40px' }} type="database" />
              </div>
              <div style={{ fontSize: '20px', marginTop: '20px', marginBottom: '15px' }}>
                Big Data Technologies
              </div>
              <div style={{ fontSize: '18px' }}>
                Working in telecommunications domain requires dealing with huge amounts of bulk and
                streaming data. We've built up expertise on selecting, using, improving and scaling
                several big data technologies to help our customers to solve their unique problems
              </div>
            </Card>
          </Col>
          <Col lg={24} xl={12}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '340px', minHeight: '340px', overflow: 'scroll' }}
            >
              <div style={{ marginTop: '30px' }}>
                <Icon style={{ fontSize: '40px' }} type="apartment" />
              </div>
              <div style={{ fontSize: '20px', marginTop: '20px', marginBottom: '15px' }}>
                Cisco Devnet
              </div>
              <div style={{ fontSize: '18px' }}>
                Network infrastructures are rapidly evolving into a sofware-defined model. With this
                new-era, companies are facing several aspects which were being used in
                software-engineering domain, such as DevOps & CI/CD, now starting to be applied to
                network infrastructures as well. We're well aligned to help our customers to
                monetize this paradigm shift. Thanks to our solid software engineering, networking
                and R&D skills.
              </div>
            </Card>
          </Col>
          <Col lg={24} xl={12}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '340px', minHeight: '340px', overflow: 'scroll' }}
            >
              <div style={{ marginTop: '30px' }}>
                <Icon style={{ fontSize: '40px' }} type="rocket" />
              </div>
              <div style={{ fontSize: '20px', marginTop: '20px', marginBottom: '15px' }}>DPI</div>
              <div style={{ fontSize: '18px' }}>
                Be it a customer experience use case or a regulatory requirement; operating a DPI
                network requires different skill sets ranging from BSS (Business Support Systems)
                solutions integration to handling the DPI generated huge data. Through our partner
                network, we have taken part in several DPI related projects and created several
                scalable solutions.
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Gp;
