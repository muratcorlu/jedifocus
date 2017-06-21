import BestIntentions from '../../../components/columns/BestIntentions';

import { connect } from 'kink';

export default connect(
    BestIntentions,
    {},
    ( { bestIntentions } ) => ( { items: bestIntentions.toJSON() } )
);
