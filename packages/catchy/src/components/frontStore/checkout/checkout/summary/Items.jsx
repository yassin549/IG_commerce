import PropTypes from 'prop-types';
import React from 'react';

import './Items.scss';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';

function ItemVariantOptions({ options = [] }) {
  if (!Array.isArray(options) || !options || options.length === 0) {
    return null;
  }

  return (
    <div className="cart-item-variant-options mt-2">
      <ul>
        {options.map((o, i) => (
          <li key={i}>
            <span className="attribute-name">{o.attribute_name}: </span>
            <span>{o.option_text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ItemVariantOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      attribute_name: PropTypes.string,
      option_text: PropTypes.string
    })
  )
};

ItemVariantOptions.defaultProps = {
  options: []
};

function Items({ items, priceIncludingTax }) {
  return (
    <div id="summary-items">
      <table className="listing items-table">
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="product-thumbnail">
                  <div className="thumbnail">
                    {item.thumbnail && (
                      <img src={item.thumbnail} alt={item.productName} />
                    )}
                    {!item.thumbnail && (
                      <ProductNoThumbnail width={45} height={45} />
                    )}
                  </div>
                  <span className="qty">{item.qty}</span>
                </div>
              </td>
              <td>
                <div className="product-column">
                  <div>
                    <span className="font-semibold">{item.productName}</span>
                  </div>
                  <ItemVariantOptions
                    options={JSON.parse(item.variantOptions || '[]')}
                  />
                </div>
              </td>
              <td>
                <span>
                  {priceIncludingTax
                    ? item.lineTotalInclTax.text
                    : item.lineTotal.text}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string,
      productName: PropTypes.string,
      variantOptions: PropTypes.string,
      qty: PropTypes.number,
      lineTotalInclTax: PropTypes.shape({
        text: PropTypes.string
      }),
      lineTotal: PropTypes.shape({
        text: PropTypes.string
      })
    })
  ),
  priceIncludingTax: PropTypes.bool
};

Items.defaultProps = {
  items: [],
  priceIncludingTax: false
};

export { Items };
