
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Spinner from './Spinner'
import AppBar from 'material-ui/AppBar'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span>Movies</span>}
          iconStyleLeft={{display: 'none'}}
          style={{position: 'fixed', 'margin-left':'-15px'}}
          />
        <Spinner style={{position: 'fixed', top: '66px'}} />
      </div>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading
  };
}

export default connect(mapStateToProps)(Header);
