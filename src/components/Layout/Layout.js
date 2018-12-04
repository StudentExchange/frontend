/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Media from 'react-media';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    console.log(this.props.isMobile); // eslint-disable-line
    return (
      <div>
        <Header />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

Layout.defaultProps = {
  isMobile: false,
};

Layout.propTypes = {
  isMobile: PropTypes.bool,
};

const mapState = () => ({});

const mapDispatch = {};

export default withStyles(normalizeCss, s)(
  connect(
    mapState,
    mapDispatch,
  )(props => (
    <Media query="(max-width: 599px)">
      {isMobile => <Layout {...props} isMobile={isMobile} />}
    </Media>
  )),
);
