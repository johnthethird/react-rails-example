/** @jsx React.DOM */
var EmailItem = React.createClass({
  render: function() {
    var cx = React.addons.classSet;
    var classes = React.addons.classSet({
      'email-item': true,
      'pure-g': true,
      'email-item-selected':this.props.selected,
      'email-item-unread': this.props.unread
    })
    return this.transferPropsTo(
      <div className={classes}>
        <div className="pure-u">
          <img className="email-avatar"  src={this.props.avatar} height="65" width="65"/>
        </div>

        <div className="pure-u-3-4">
          <h5 className="email-name">{this.props.name}</h5>
          <h4 className="email-subject">{this.props.subject}</h4>
          <p className="email-desc">
            {this.props.children}
          </p>
        </div>
      </div>
    );
  }
});