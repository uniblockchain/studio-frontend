import { defineMessages, formatNumber } from 'react-intl';

const messages = defineMessages({
  assetsResultsCountFiltered: {
    id: 'assetsResultsCountFiltered',
    defaultMessage: 'Showing {start}-{end} out of {wrappedTotal} {total, plural, one {possible match} other {possible matches}}.',
    description: 'Message above a paginated table describing what subset of a filtered result set is currently visible.',
  },
  assetsResultsCountTotal: {
    id: 'assetsResultsCountTotal',
    defaultMessage: 'Showing {start}-{end} out of {wrappedTotal} {total, plural, one {total file} other {total files}}.',
    description: 'Message above a paginated table of files describing what subset of all files is currently visible.',
  },
});

export default messages;
