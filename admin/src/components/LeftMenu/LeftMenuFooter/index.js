/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import Wrapper from './Wrapper';

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by
        &nbsp;
        <a
          href="https://github.com/m7he4rt"
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          m7he4rt
        </a>
        
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
