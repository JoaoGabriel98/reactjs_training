import React from 'react'

import First from "./components/default/First";
import WithParam from "./components/default/WithParam";
import Fragment from "./components/default/Fragment";
import Random from "./components/default/Random";

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div id="app">
        <h1>React Fundaments</h1>

        <Random min={5141} max={105415} />

        <br/>

        <First />
        <WithParam
            title="Second Component"
            subtitle="Noicee!" />

        <Fragment />
    </div>
