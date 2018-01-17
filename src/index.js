import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Router,Route,IndexRoute,hashHistory } from 'react-router';
// import { Provider }  from 'react-redux';
// import { Router,Route,IndexRoute,hashHistory } from 'react-router';
// import store from './store';
// import './index.css';
import Home from './client/home';
import Root from './client/root';
import registerServiceWorker from './registerServiceWorker';

Route.propTypes = {
    path:PropTypes.string,
    component:PropTypes.func.isRequired
};
IndexRoute.propTypes = {
    component:PropTypes.func.isRequired,
};
Router.propTypes = {
    history:PropTypes.object.isRequired
};
// Provider.propTypes = {
//     store:PropTypes.object.isRequired,
//     // store:storeShape.isRequired
// };

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
            <IndexRoute component={Root} />
        </Route>
    </Router>,
    // <Provider store={store}>
    //     <Router history={hashHistory}>
    //         <Route path='/' component={Home}>
    //             <IndexRoute component={Root} />
    //         </Route>
    //     </Router>
    // </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
