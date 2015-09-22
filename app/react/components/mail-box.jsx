import React from 'react';
import Mail from './email';

class MailBoxComponent extends React.Component {
  static get propTypes() {
    return {
      emails: React.PropTypes.array,
    };
  }

  render() {
    const list = this.props.emails.map((email) =>
      <Mail email={email}/>
    );
    return <div>{list}</div>;
  }
}

export default MailBoxComponent;
