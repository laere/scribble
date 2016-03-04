import React, { Component } from 'react';
import Input from '../../Components/Input';

class DraftContainer extends Component {
  render() {

    return (
      <div className="draftContainer">
        <Input className="draftTitle" type="text" placeholder="Title"/>
        <div className="draftPostContent">
          <textarea></textarea>
        </div>
        <Input className="draftSubmitBtn" type="submit" value="Submit" />
      </div>
    );
  }
}

export default DraftContainer;
