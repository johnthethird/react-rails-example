/** @jsx React.DOM */
var Main = React.createClass({
  render: function() {
    return (
      <div className="pure-u id-main">
        <div className="content">
          <div className="email-content pure-g">
            <div className="email-content-header pure-g">
              <div className="pure-u-1-2">
                <h1 className="email-content-title">{this.props.email.subject}</h1>
                <p className="email-content-subtitle">
                  From <a>{this.props.email.name}</a> at <span>{this.props.email.timestamp}</span>
                </p>
              </div>

              <div className="pure-u-1-2 email-content-controls">
                <a className="pure-button secondary-button">Reply</a>
                <a className="pure-button secondary-button">Forward</a>
                <a className="pure-button secondary-button">Move to</a>
              </div>
            </div>

            <div className="email-content-body pure-u-1" dangerouslySetInnerHTML={{__html: this.props.email.content}} />
          </div>
        </div>
      </div>
    );
  }
});