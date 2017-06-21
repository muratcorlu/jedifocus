import ToDo from '../../../components/columns/ToDo';

import { connect } from 'kink';

export default connect(
    ToDo,
    {},
    ( { toDo } ) => ( { items: toDo.toJSON() } )
);
