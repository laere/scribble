import React, { Component } from 'react';

// COMPONENTS
import Input from '../../Components/Input';
import FormWrapper from '../../Components/FormWrapper';

class DraftContainer extends Component {

  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
  }

  render() {

    return (
      <FormWrapper className="draftContainer" header="So. What are you thinking?" >
        <Input className="draftTitle" type="text" placeholder="Title"/>
        <div className="draftPostContent">
          <textarea></textarea>
        </div>
        <Input className="draftSubmitBtn" type="submit" value="Submit" onClick={this.handleOnSubmit}/>
      </FormWrapper>
    );
  }
}
export default DraftContainer;
