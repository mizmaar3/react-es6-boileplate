let React = require('react');
let ReactDOM = require('react-dom');
let WelcomeContent = require('./welcome-content.jsx');
let Dropdown = require('../common-ui/dropdown.jsx');

let Main = React.createClass({
  getInitialState(){
    return {
      loading: true
    }
  },
  componentDidMount(){
    return;
  },
  render() {

    return (
      <div >

        <Dropdown
          type="select"
          items={["value1", "value2", "value3"]}
          label="SELECT A CAMPAIGN" />

        <WelcomeContent  />

      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("main"));
