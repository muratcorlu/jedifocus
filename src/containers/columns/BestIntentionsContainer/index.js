import BestIntentions from '../../../components/columns/BestIntentions';

import * as actions from './actions';
import { connect } from 'kink';

export default connect(
    BestIntentions,
    actions,
    ( { bestIntentions } ) => ( { items: bestIntentions.toJSON() } )
);
