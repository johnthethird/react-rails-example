/** @jsx React.DOM */
var Nav = React.createClass({
  render: function() {
    return (
      <div className="pure-u id-nav">
          <a href="#nav" className="nav-menu-button">Menu</a>

          <div className="nav-inner">
              <a className="pure-button primary-button" href="#">Compose</a>

              <div className="pure-menu pure-menu-open">
                  <ul>
                      <li><a href="#">Inbox <span className="email-count">(2)</span></a></li>
                      <li><a href="#">Important</a></li>
                      <li><a href="#">Sent</a></li>
                      <li><a href="#">Drafts</a></li>
                      <li><a href="#">Trash</a></li>
                      <li className="pure-menu-heading">Labels</li>
                      <li><a href="#"><span className="email-label-personal"></span>Personal</a></li>
                      <li><a href="#"><span className="email-label-work"></span>Work</a></li>
                      <li><a href="#"><span className="email-label-travel"></span>Travel</a></li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
});