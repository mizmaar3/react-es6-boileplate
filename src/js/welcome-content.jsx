let React = require('react');

let WelcomeContent = React.createClass({
  render() {
    let theContent = "Welcome to react boilerplate"

    return (
      <div className="welcome-content">
        {theContent}
      </div>
    )
  }

});

module.exports = WelcomeContent;
