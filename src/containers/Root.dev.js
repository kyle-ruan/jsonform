import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from '../components/app';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <LocaleProvider locale={enUS}><App /></LocaleProvider>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
