/** @jsx React.DOM */
var List = React.createClass({

  render: function() {
    var items = this.props.emails.map(function(email, i) {
      return (
        <EmailItem
            key={i}
            onClick={this.props.onEmailSelected.bind(null, i)}
            avatar={email.avatar}
            selected={this.props.selected === i}
            name={email.name}
            unread={email.unread && !this.props.read[i]}
            subject={email.subject}>
          {email.desc}
        </EmailItem>
      );
    }.bind(this));

    return (
      <div className="pure-u id-list">
          <div className="content">
             {items}
          </div>
      </div>
    );
  }

});
