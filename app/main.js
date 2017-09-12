
import React from 'react'
import ReactDOM from 'react-dom'

import Grid from './cmp/Grid'



ReactDOM.render(
    <Grid
        data={[{ name: "xxxx", group: "yyyy", ff:333 }, { name: "wwww", group: "zzzz" }]}
        columns={[{ header: 'name', dataIndex: 'name' }, { header: 'group', dataIndex: 'group' }]}
    />,
    document.querySelector('#root'));