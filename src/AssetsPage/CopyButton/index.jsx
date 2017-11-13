import React from 'react';
import PropTypes from 'prop-types';
import Button from '@edx/paragon/src/Button';
import copy from 'copy-to-clipboard';
import styles from './CopyButton.scss';

export default class CopyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wasClicked: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
  }

  onClick() {
    this.eventHandler();
  }

  onKeyDown(e) {
    if (e.key === 'Enter' || e.key === 'Space') {
      this.eventHandler();
    }
  }

  onBlur() {
    // console.log('onBlur', this.props.textToCopy);
    this.setState({
      wasClicked: false,
    });
    this.props.onEvent(false);
  }

  eventHandler() {
    this.setState({
      wasClicked: true,
    });
    this.buttonRef.focus();
    copy(`${this.props.textToCopy}`);
    this.props.onEvent(true);
  }

  compondentDidUpdate(prevState) {
    if (!prevState.wasClicked && this.state.wasClicked) {
      this.buttonRef.focus();
    }
  }

  render() {
    const label = this.state.wasClicked ? this.props.onCopyLabel : this.props.label;

    return (
      <Button
        className={[styles['button-width']]}
        aria-label={this.props.ariaLabel}
        label={label}
        inputRef={(input) => { this.buttonRef = input; }}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
      />
    );
  }
}

CopyButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onCopyLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  textToCopy: PropTypes.string.isRequired,
  onEvent: PropTypes.func,
};

CopyButton.defaultProps = {
  onEvent: () => {},
};
