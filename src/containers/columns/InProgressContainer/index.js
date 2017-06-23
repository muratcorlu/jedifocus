import InProgress from '../../../components/columns/InProgress';

import { connect } from 'kink';

export default connect(
    InProgress,
    {},
    ( { inProgress } ) => ( { items: inProgress.toJSON() } )
);
