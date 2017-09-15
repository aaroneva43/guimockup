
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { createHistory } from 'history';
import Root from './containers/Root'


// import reducer from './reducers'
// import App from './containers/App'


const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    //   reducer,
    applyMiddleware(...middleware)
)

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
)


{/* <Grid
    data={[{ name: "xxxx", group: "yyyy", ff: 333 }, { name: "wwww", group: "zzzz" }]}
    columns={[{ header: 'name', dataIndex: 'name' }, { header: 'group', dataIndex: 'group' }]}
/> */}