import React from 'react';
import _ from 'lodash';
import Mail from './email';

class MailBoxComponent extends React.Component {
  static get propTypes() {
    return {
      emails: React.PropTypes.array,
    };
  }

  constructor(props) {
    super(props);
    this.onEmailRemove = this.onEmailRemove.bind(this);
    this.state = {emails: this.props.emails};
  }

  onEmailRemove(emailId) {
    $.ajax(`/emails/${emailId}.json`, {
      type: 'DELETE',
      success: () => {
        let emails = this.state.emails;
        _.remove(emails, {id: emailId});
        this.setState({emails: emails});
      }
    })
  }

  render() {
    const list = this.props.emails.map((email) =>
      <Mail email={email} onRemove={this.onEmailRemove} key={email.id}/>
    );
    return <div>{list}</div>;
  }
}

export default MailBoxComponent;
