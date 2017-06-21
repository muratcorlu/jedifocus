import React from 'react';

import BestIntentions from '../../../components/columns/BestIntentions';
import ToDo from '../../../components/columns/ToDo';
import InProgress from '../../../components/columns/InProgress';
import Done from '../../../components/columns/Done';

const App = () => (
    <div className="container">
        <BestIntentions />
        <ToDo />
        <InProgress />
        <Done />
    </div>
);

export default App;
