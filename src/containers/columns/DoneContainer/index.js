import Done from '../../../components/columns/Done';

import { connect } from 'kink';

export default connect(
    Done,
    {},
    ( { done } ) => ( { items: done.toJSON() } )
);
