import { translate } from '../../../../../lib/locale/translate/translate.js';
import { buildUrl } from '../../../../../lib/router/buildUrl.js';
import { setContextValue } from '../../../../graphql/services/contextHelper.js';

export default (request, response, delegate, next) => {
  // Check if the customer is logged in
  if (request.isCustomerLoggedIn()) {
    // Redirect to homepage
    response.redirect(buildUrl('homepage'));
  } else {
    setContextValue(request, 'pageInfo', {
      title: translate('Reset password'),
      description: translate('Reset password')
    });
    next();
  }
};
