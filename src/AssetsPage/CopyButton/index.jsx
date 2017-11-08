import React from 'react';
import PropTypes from 'prop-types';
import Button from '@edx/paragon/src/Button';
import copy from 'copy-to-clipboard';

export default class CopyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wasClicked: false,
    };

    // this.onClick = this.onClick.bind(this);
    // this.onKeyDown = this.onKeyDown.bind(this);
    // this.eventHandler = this.eventHandler.bind(this);
  }

  // onClick() {
  //   console.log('bloop');
  //   this.eventHandler();
  // }

  // onKeyDown(e) {
  //   if (e.key === 'Enter' || e.key === 'Space') {
  //     this.eventHandler();
  //   }
  // }

  // eventHandler() {
  //   this.setState({
  //     wasClicked: true,
  //   });
  //   copy(`${this.props.textToCopy}`);
  // }

  render() {
    console.log('render', this.props.label);
    const label = this.state.wasClicked ? this.props.onCopyLabel : this.props.label;

    return (
      <Button
        className={[label]}
        aria-label={this.props.ariaLabel}
        label={
          <span role="region" aria-live="assertive">{label}</span>
        }
        inputRef={(input) => { this.buttonRef = input; }}
        // onClick={this.onClick}
        // onKeyDown={this.onKeyDown}
        onClick={(e) => {
          console.log('onClick', this.props.label);
          // this.buttonRef.focus();


          /*EVIL COPY COMMAND! */
          // copy(`${this.props.textToCopy}`);

          this.buttonRef.focus();
          this.setState({
            wasClicked: true,
          });

          /*
            let clickFast = () => {document.querySelector('.Studio').click(); document.querySelector('.Web').click(); }
          */
        }}
        onBlur={() => {
          console.log('onBlur', this.props.label);
          this.setState({
            wasClicked: false,
          });
        }}
      />
    );
  }
}

CopyButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onCopyLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  textToCopy: PropTypes.string.isRequired,
};
