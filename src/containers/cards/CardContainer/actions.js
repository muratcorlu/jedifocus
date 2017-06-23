import { JFDI_EDIT_CARD } from '../../../lib/constants';

const editCard = ( bucket, id ) => ( {
    type: JFDI_EDIT_CARD,
    payload: {
        bucket,
        id
    }
} );

export { editCard };
