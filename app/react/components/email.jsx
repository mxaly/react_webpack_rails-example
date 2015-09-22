import React from 'react';

class EmailComponent extends React.Component {
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6">
          {this.props.email.body}
        </div>
        <div className="col-xs-3">
          {this.props.email.from}
        </div>
        <div className="col-xs-3">
          TODO: actions
        </div>
        <hr/>
      </div>
    );
  }
}

export default EmailComponent;
