import React from "react";

import Counter from './Counter.jsx';

export default class App extends React.Component {

    render() {
      return  <div>
            <Counter initialValue={0} />
        </div>
    }
}

