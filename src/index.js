import './styles/main.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux';
import 'moment/locale/tr';
import 'moment/locale/sk';
import 'moment/locale/cs';
import 'moment/locale/ro';
import 'react-day-picker/lib/style.css';

const history = createHistory();
const store = configureStore(undefined, history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
/* istanbul ignore if */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./Root', () => {
    // eslint-disable-next-line
    const NextApp = require('./Root').default;
    render(NextApp);
  });
}

registerServiceWorker();
