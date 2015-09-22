import React from 'react';

class EmailComponent extends React.Component {
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
    };
  }

  _iconClass(name) {
    return `btn btn-xs btn-default glyphicon glyphicon-${name}`;
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
          <div className="btn-group pull-right">
            <div className={this._iconClass('remove')}/>
            <div className={this._iconClass('share')}/>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default EmailComponent;
