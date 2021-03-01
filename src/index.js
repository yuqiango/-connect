import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './store/index';
import Provider from './store/provider';

const renderDom = Component => {
    render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('app')
    );
}
renderDom(App);
