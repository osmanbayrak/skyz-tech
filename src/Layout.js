import { Layout, Menu, Icon, Divider, Drawer, Row, Col, Input } from 'antd';
import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import i18n from './i18n';
import global from './global';
import './layout.css';
import logo from './assets/skyz white.png';
import memberOf from './assets/soitron-group.png';
import { GlobalFooter } from 'sky-react-components';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const { Search } = Input;

class GlobalLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      baseMenu: [],
      rootMenu: [],
      user: {},
      windowHeight: window.innerHeight,
      visible: false,
      scrollPos: 0,
    };
  }

  updateHeight = () => {
    this.setState({ windowHeight: window.innerHeight });
  };

  handleScroll = (event) => {
    let position = event.srcElement.documentElement.scrollTop
    this.setState({scrollPos: position})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateHeight);
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { baseMenu, rootMenu, scrollPos } = this.state;
    const path = window.location.pathname;
    return (
      <Layout onScroll={this.checkScroll} id="layout" style={{ minHeight: this.state.windowHeight, zIndex: 3 }}>
          <Header className="headerBar">
            <Row className="contentBlock" style={{marginLeft: '0', marginRight: '0', paddingRight: '15%', paddingLeft: '15%', background: 'transparent'}}>
              <Col className="logoDiv"><img src={logo} className="logoImg" /></Col>
              <Col>
                <Menu className="headerUl" mode="horizontal" defaultSelectedKeys={path == '/home' ? ['1'] : (path == '/technologies' ? ['2'] : (path == '/solutions' ? ['3'] : (path == '/expertise' ? ['4'] : (path == '/career' ? ['5'] : (path == '/contact' ? ['6'] : ['1'])))))} style={{lineHeight: '45px', float: 'left', background: 'transparent', color: 'white', marginLeft: '25px'}}>
                  <Menu.Item key="1"><Link style={{color: 'white'}} to="/home" >{i18n.t('about')}</Link></Menu.Item>
                  <Menu.Item key="2"><Link style={{color: 'white'}} to="/technologies" >{i18n.t('technologies')}</Link></Menu.Item>
                  <Menu.Item key="3"><Link style={{color: 'white'}} to="/solutions" >{i18n.t('solutions')}</Link></Menu.Item>
                  <Menu.Item key="4"><Link style={{color: 'white'}} to="/expertise" >{i18n.t('expertise')}</Link></Menu.Item>
                  <Menu.Item key="5"><Link style={{color: 'white'}} to="/career" >{i18n.t('career')}</Link></Menu.Item>
                  <Menu.Item key="6"><Link style={{color: 'white'}} to="/contact" >{i18n.t('contact')}</Link></Menu.Item>
                </Menu>
              </Col>
              <Col style={{float: 'right'}}>
                <div className="memberOfDiv">
                  <div style={{ marginTop: '-10px'}}>
                    <a style={{color: 'white', marginRight: '10px', fontSize: '18px', fontWeight: '700', fontFamily: 'Source Sans Pro", "sans-serif'}}>MEMBER OF</a>
                    <img style={{marginBottom: '10px', filter: 'brightness(10)'}} src={memberOf} />
                  </div>
                </div>
              </Col>
            </Row>
          </Header>
          <Divider style={{ margin: '0' }} />
          <Content className="responsive-content">
            {this.props.children}
          </Content>
          <div style={{height: '100px', background: 'whitesmoke'}}></div>
          <Footer style={{textAlign: 'center', backgroundColor: '#333333'}}>
            <Fragment>
              <Row gutter={24} style={{color: '#fff'}}>
                <Col md={4}>
                  <p><b style={{opacity: '0.7', fontSize: '16px'}}>{i18n.t('about')}</b></p>
                  <Divider />
                  <p>{i18n.t('who_we_are')}</p>
                  <p>{i18n.t('highlights')}</p>
                  <p>{i18n.t('our_mang_team')}</p>
                </Col>
                <Col md={4}>
                  <p><b style={{opacity: '0.7', fontSize: '16px'}}>{i18n.t('technologies')}</b></p>
                  <Divider />
                  <p>{i18n.t('visibility')}</p>
                  <p>{i18n.t('automation')}</p>
                  <p>{i18n.t('compliance')}</p>
                </Col>
                <Col md={4}>
                  <p><b style={{opacity: '0.7', fontSize: '16px'}}>{i18n.t('solutions')}</b></p>
                  <Divider />
                  <p>{i18n.t('Network Visibility Suite')}</p>
                  <p>{i18n.t('Discovery & Inventory Suite')}</p>
                  <p>{i18n.t('Peta Scale Logger')}</p>
                  <p>{i18n.t('LoTT IoT Platform')}</p>
                  <p>{i18n.t('Broadband CEM')}</p>
                </Col>
                <Col md={4}>
                  <p><b style={{opacity: '0.7', fontSize: '16px'}}>{i18n.t('expertise')}</b></p>
                  <Divider />
                  <p>{i18n.t('Networking Technologies')}</p>
                  <p>{i18n.t('Big Data Technologies')}</p>
                  <p>{i18n.t('Cisco Devnet')}</p>
                  <p>{i18n.t('DPI')}</p>
                </Col>
                <Col md={4}>
                  <p><b style={{opacity: '0.7', fontSize: '16px'}}>{i18n.t('career')}</b></p>
                  <Divider />
                  <p>{i18n.t('Why should you work with us?')}</p>
                  <p>{i18n.t('The Selection Process')}</p>
                  <p>{i18n.t('Life at Skyz')}</p>
                </Col>
                <Col md={4}>
                  <p><b style={{opacity: '0.7', fontSize: '16px'}}>{i18n.t('contact')}</b></p>
                  <Divider />
                  <p>{i18n.t('Adress')}</p>
                  <p>{i18n.t('Group Companies')}</p>
                </Col>
              </Row>
            </Fragment>
          </Footer>
      </Layout>
    );
  }
}

export default GlobalLayout;
