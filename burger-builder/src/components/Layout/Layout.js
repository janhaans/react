import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Drawbar, Backdrop</div>
        {props.children}
    </Aux>   
);

export default layout;