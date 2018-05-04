import san from 'san';

import App from './components/App.san';

import {
    router
} from 'san-router';

router.add({
    rule: '/',
    Component: App,
    target: '#app'
});

router.start()