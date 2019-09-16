import { Layout, Menu, Divider, Row, Col, Icon } from 'antd';
import React, { Fragment } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import i18n from './i18n';
import global from './global';
import './layout.css';
import logo from './assets/skyz colorful.png';
import memberOf from './assets/soitron-group.png';
import Home from './views/Home';
import Technologies from './views/Technologies';
import Solutions from './views/Solutions';
import Expertise from './views/Expertise';
import Career from './views/Career';
import Contact from './views/Contact';
import gp_file from './docs/gp.pdf';
import kvkk_a from './docs/kvkk_a.pdf';
import kvkk_b from './docs/kvkk_b.pdf';

const { Header, Content, Footer } = Layout;

class GlobalLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      user: {},
      windowHeight: window.innerHeight,
      visible: false,
      scrollPos: 0,
    };
  }

  updateHeight = () => {
    this.setState({ windowHeight: window.innerHeight });
  };

  handleScroll = event => {
    let position = event.srcElement.documentElement.scrollTop;
    this.setState({ scrollPos: position });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateHeight);
  }

  render() {
    const { scrollPos } = this.state;
    const path = window.location.pathname;
    return (
      <Layout
        onScroll={this.checkScroll}
        id="layout"
        style={{ minHeight: this.state.windowHeight, zIndex: 3 }}
      >
        <Header
          className="headerBar"
          style={
            scrollPos > 100
              ? { background: 'rgba(0,0,0,0.82)', boxShadow: '0px 2px 12px 1px rgba(0, 0, 0, 0.9)' }
              : undefined
          }
        >
          <Row
            className="contentBlock"
            style={{
              marginLeft: '0',
              marginRight: '0',
              paddingRight: '15%',
              paddingLeft: '15%',
              background: 'transparent',
            }}
          >
            <Link
              style={{ color: 'white' }}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Col className="logoDiv">
                <img
                  style={scrollPos > 100 ? { filter: 'brightness(10)' } : undefined}
                  src={logo}
                  className="logoImg"
                />
              </Col>
            </Link>
            <Col>
              <Menu
                className="headerUl"
                mode="horizontal"
                defaultSelectedKeys={
                  path == '/home'
                    ? ['1']
                    : path == '/technologies'
                    ? ['2']
                    : path == '/solutions'
                    ? ['3']
                    : path == '/expertise'
                    ? ['4']
                    : path == '/career'
                    ? ['5']
                    : path == '/contact'
                    ? ['6']
                    : ['1']
                }
                style={{
                  lineHeight: '45px',
                  float: 'left',
                  background: 'transparent',
                  color: 'white',
                  marginLeft: '25px',
                  marginTop: '10px',
                  borderBottom: 'none',
                }}
              >
                <Menu.Item key="1">
                  <Link
                    style={{ color: 'white' }}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {i18n.t('about')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link
                    style={{ color: 'white' }}
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {i18n.t('technologies')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link
                    style={{ color: 'white' }}
                    activeClass="active"
                    to="solutions"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {i18n.t('solutions')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link
                    style={{ color: 'white' }}
                    activeClass="active"
                    to="expertise"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {i18n.t('expertise')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link
                    style={{ color: 'white' }}
                    activeClass="active"
                    to="career"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {i18n.t('career')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link
                    style={{ color: 'white' }}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {i18n.t('contact')}
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ float: 'right' }}>
              <div className="memberOfDiv">
                <div style={{ marginTop: '-10px' }}>
                  <a
                    style={{
                      color: 'white',
                      marginRight: '8px',
                      fontSize: '10px',
                      fontWeight: '700',
                      fontFamily: 'Source Sans Pro", "sans-serif',
                    }}
                  >
                    MEMBER OF
                  </a>
                  <img style={{ marginBottom: '7px' }} src={memberOf} />
                </div>
              </div>
            </Col>
          </Row>
        </Header>
        <Divider style={{ margin: '0' }} />
        <Content className="responsive-content">
          <Home />
          <Technologies />
          <Solutions />
          <Expertise />
          <Career />
          <Contact />
        </Content>
        <div style={{ height: '100px', background: '#CED5D8' }} />
        <Footer style={{ textAlign: 'center', backgroundColor: '#333333' }}>
          <Fragment>
            <Row className="contentBlock" style={{ color: '#fff' }}>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('about')}</b>
                </p>
                <Divider />
                <p>{i18n.t('who_we_are')}</p>
                <p>{i18n.t('highlights')}</p>
                <p>{i18n.t('our_mang_team')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('technologies')}</b>
                </p>
                <Divider />
                <p>{i18n.t('visibility')}</p>
                <p>{i18n.t('automation')}</p>
                <p>{i18n.t('compliance')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('solutions')}</b>
                </p>
                <Divider />
                <p>{i18n.t('Network Visibility Suite')}</p>
                <p>{i18n.t('Discovery & Inventory Suite')}</p>
                <p>{i18n.t('Peta Scale Logger')}</p>
                <p>{i18n.t('LoTT IoT Platform')}</p>
                <p>{i18n.t('Broadband CEM')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('expertise')}</b>
                </p>
                <Divider />
                <p>{i18n.t('Networking Technologies')}</p>
                <p>{i18n.t('Big Data Technologies')}</p>
                <p>{i18n.t('Cisco Devnet')}</p>
                <p>{i18n.t('DPI')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('career')}</b>
                </p>
                <Divider />
                <p>{i18n.t('Why should you work with us?')}</p>
                <p>{i18n.t('The Selection Process')}</p>
                <p>{i18n.t('Life at Skyz')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('contact')}</b>
                </p>
                <Divider />
                <p>{i18n.t('Adress')}</p>
                <p>{i18n.t('Group Companies')}</p>
              </Col>
            </Row>
            <Divider style={{ margin: '12px 0', background: 'gray' }} />
            <Row className="contentBlock" style={{ color: '#fff' }}>
              <Col md={12}>
                <a
                  href="https://www.linkedin.com/company/sekom-yazilim?trk=job_view_topcard_company_name"
                  target="_blank"
                >
                  <Icon style={{ fontSize: '24px' }} type="linkedin" />
                </a>
              </Col>
              <Col md={4}>
                <a href={gp_file} target="_blank">
                  Gizlilik Politikas
                </a>
              </Col>
              <Col md={4}>
                <a href={kvkk_a} target="_blank">
                  KVKK Aydınlatma Metni
                </a>
              </Col>
              <Col md={4}>
                <a href={kvkk_b} target="_blank">
                  KVKK Kişi Başvuru Formu
                </a>
              </Col>
            </Row>
          </Fragment>
        </Footer>
      </Layout>
    );
  }
}

export default GlobalLayout;
