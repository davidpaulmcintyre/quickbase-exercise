import React, { Component } from 'react';
import { Field } from 'redux-form';
import '../../styles/listItem.css';
const BUTTON_STATE_VISIBLE = 'inline-block';
const BUTTON_STATE_HIDDEN = 'hidden';

class EditableListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     canEdit: false,
  //     text: ''
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.children) {
  //     this.setState({
  //       text: nextProps.children
  //     });
  //   }
  // }

  // onEdit() {
  //   this.setState({ canEdit: true });
  // }

  // saveChanges() {
  //   this.setState({ canEdit: false });
  // }

  // cancelChanges() {
  //   this.setState({ canEdit: false });
  // }

  render() {
    // const input = this.props.input;

    let content = <div />;
    const text = this.props.text;
    const str1 = text.substr(0, 40);
    const str2 = text.substr(40, 50);

    /*const textComponent = this.state.canEdit
      ? <div className="formInput">
          <input {...input} placeholder={'Item value'} type="input" />
        </div>
      : <span>
          <span>{str1}</span>
          <span className="textExcess">{str2}</span>
        </span>;*/

    /*const buttonEdit = !this.state.canEdit
      ? <button
          type="button"
          title="Edit item"
          onClick={this.onEdit.bind(this)}
        >
          {'Edit'}
        </button>
      : null;*/

    /*const buttonSave = this.state.canEdit
      ? <button
          type="button"
          title="Edit item"
          onClick={this.saveChanges.bind(this)}
        >
          {'Save'}
        </button>
      : null;

    const buttonCancel = this.state.canEdit
      ? <button
          type="button"
          title="Edit item"
          onClick={this.cancelChanges.bind(this)}
        >
          {'Cancel'}
        </button>
      : null;*/

    /*content = (
      <div>
        {textComponent}
      </div>
    );*/
    return (
      <span>
        <span>{str1}</span>
        <span className="textExcess">{str2}</span>
      </span>
    );
  }
}

export default EditableListItem;
