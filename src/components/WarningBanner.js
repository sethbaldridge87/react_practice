import React from 'react';

function WarningBanner(props) {
    let result;
    !props.warn ? result = null : result = (<div className="warning">Warning!</div>);
    return result;
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: false};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
          <WarningBanner warn={this.state.showWarning} />
        </div>
      );
    }
  }

export default Page;