/** @jsx React.DOM */
var EmailItem = React.createClass({
  render: function() {
    var classes = 'email-item pure-g';
    if (this.props.selected) {
      classes += ' email-item-selected';
    }
    if (this.props.unread) {
      classes += ' email-item-unread';
    }
    return this.transferPropsTo(
      <div class={classes}>
        <div class="pure-u">
          <img class="email-avatar" alt={this.props.name + '\'s avatar'} src={this.props.avatar} height="65" width="65"/>
        </div>

        <div class="pure-u-3-4">
          <h5 class="email-name">{this.props.name}</h5>
          <h4 class="email-subject">{this.props.subject}</h4>
          <p class="email-desc">
            {this.props.children}
          </p>
        </div>
      </div>
    );
  }
});