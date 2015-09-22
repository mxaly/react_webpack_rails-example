import React from 'react';

class EmailComponent extends React.Component {
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.onRemoveClick = this.onRemoveClick.bind(this);

    this.state = {removing: false};
  }

  onRemoveClick() {
    this.setState({removing: true});
    // TODO: pass remove above
  }

  _iconClass(name) {
    return `btn btn-xs btn-default glyphicon glyphicon-${name}`;
  }

  render() {
    const hourglass = <div className={this._iconClass('hourglass')}/>;
    const removeButton = (
      <div
        className={this._iconClass('remove')}
        onClick={this.onRemoveClick}
      />
    );

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
            {this.state.removing ? hourglass : removeButton}
            <div className={this._iconClass('share')}/>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default EmailComponent;
