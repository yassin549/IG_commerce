import { NavigationItem } from '@components/admin/cms/NavigationItem';
import Icon from '@heroicons/react/solid/esm/GiftIcon';
import PropTypes from 'prop-types';
import React from 'react';

export default function NewProductQuickLink({ couponNew }) {
  return <NavigationItem Icon={Icon} title="New Coupon" url={couponNew} />;
}

NewProductQuickLink.propTypes = {
  couponNew: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'quickLinks',
  sortOrder: 30
};

export const query = `
  query Query {
    couponNew: url(routeId:"couponNew")
  }
`;
