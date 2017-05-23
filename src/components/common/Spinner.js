// const React = require('react');
import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress'
import { connect } from 'react-redux'


class Spinner extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const loading = this.props.loading;
    console.log(loading,'loading');
    return (
        loading && <LinearProgress mode="indeterminate" style={this.props.style} />
    );
  }
}


Spinner.propTypes = {
  loading: PropTypes.bool,
  style: PropTypes.object
}

const mapStateToProps = state => ({
  loading: state.loading
})

export default connect(mapStateToProps)(Spinner);
