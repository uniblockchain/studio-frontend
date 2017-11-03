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
  }

  render() {
    return (
      <Button
        label={!this.state.wasClicked ? this.props.label : this.props.onCopyLabel}
        onClick={() => {
          this.setState({
            wasClicked: true,
          });
          copy(`${this.props.textToCopy}`);
        }}
        onBlur={() => {
          this.setState({
            wasClicked: false,
          });
        }}
      />
    );
  }
}

CopyButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onCopyLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  textToCopy: PropTypes.string.isRequired,
};
