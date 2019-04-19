import React, { Component } from "react";
import PropTypes from "prop-types";

import "./SingleProduct.css";

export class SingleProduct extends Component {
  state = { product: {} };

  componentDidMount() {
    fetch(https://openapi.etsy.com/v2/listings/638754067?api_key=ra7o2rsgh887dcigm03j86md
      )
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data });
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div className="home-page-single-product-card-wrapper">
        Single Product Card Wrapper
        <div className="each-product-card-container">Each Product Card</div>
      </div>
    );
  }
}
const productPropType = PropTypes.shape({
   "listing_id": PropTypes.number.isRequired,
    "state": PropTypes.string.isRequired,
    "user_id": PropTypes.number.isRequired,
    "category_id": PropTypes.number.isRequired,
    "title": PropTypes.string.isRequired,
    "description": PropTypes.string.isRequired,
    "creation_tsz": PropTypes.number.isRequired,
    "ending_tsz": PropTypes.number.isRequired,
    "original_creation_tsz": PropTypes.number.isRequired,
    "last_modified_tsz": PropTypes.number.isRequired,
    "price": PropTypes.string.isRequired,
    "currency_code": PropTypes.string.isRequired,
    "quantity": PropTypes.number.isRequired,
    "sku": PropTypes.arrayOf(PropTypes.string).isRequired,
    "tags": PropTypes.arrayOf(PropTypes.string).isRequired,
    "category_path": PropTypes.arrayOf(PropTypes.string).isRequired,
    "category_path_ids": PropTypes.arrayOf(PropTypes.number).isRequired,
    "materials": PropTypes.arrayOf(PropTypes.string).isRequired,
    "shop_section_id": PropTypes.number.isRequired,
    "featured_rank": PropTypes.oneOf([PropTypes.number, PropTypes.null]),
    "state_tsz": PropTypes.number.isRequired,
    "url": PropTypes.string.isRequired,
    "num_favorers": PropTypes.number.isRequired,
    "shipping_template_id": PropTypes.number.isRequired,
    "processing_min": PropTypes.number.isRequired,
    "processing_max": PropTypes,
    "who_made": PropTypes.string.isRequired,
    "is_supply": PropTypes.string.isRequired,
    "when_made": PropTypes.string.isRequired,
    "item_weight": PropTypes.null,
    "item_weight_unit": PropTypes.string.isRequired,
    "item_length": PropTypes.null,
    "item_width": PropTypes.null,
    "item_height": PropTypes.null,
    "item_dimensions_unit": PropTypes.string.isRequired,
    "is_private": PropTypes.bool.isRequired,
    "recipient":PropTypes.null,
    "occasion":PropTypes.null,
    "style": PropTypes.null,
    "non_taxable": PropTypes.bool.isRequired,
    "is_customizable": PropTypes.bool.isRequired,
    "is_digital": PropTypes.bool.isRequired,
    "file_data": PropTypes.string.isRequired,
    "should_auto_renew": PropTypes.bool.isRequired,
    "language": PropTypes.string.isRequired,
    "has_variations": PropTypes.bool.isRequired,
    "taxonomy_id": PropTypes.number.isRequired,
    "taxonomy_path": PropTypes.arrayOf(PropTypes.string).isRequired,
    "used_manufacturer": PropTypes.bool.isRequired,

})
const resultsPropTypes = PropTypes.shape({
  "count": PropTypes.number.isRequired,
    "results": PropTypes.arrayOf(productPropType),
  "params": PropTypes.shape({
      "listing_id": PropTypes.string.isRequired,
 }),
  "type": PropTypes.string.isRequired,
  "pagination": PropTypes.object.isRequired,
});

Product.PropTypes = {
  product: resultsPropTypes.isRequired,
  }