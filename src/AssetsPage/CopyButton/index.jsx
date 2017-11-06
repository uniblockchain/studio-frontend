import React from 'react';
import PropTypes from 'prop-types';
import Button from '@edx/paragon/src/Button';
import copy from 'copy-to-clipboard';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import classNames from 'classnames';

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
      //<i class="fa fa-clipboard" aria-hidden="true"></i>

        // className={[FontAwesomeStyles.fa, FontAwesomeStyles['fa-files-o']]}
        label={!this.state.wasClicked ? (
          <span>
            <span className={classNames(FontAwesomeStyles.fa, FontAwesomeStyles['fa-files-o'])}/>
            {this.props.label}
          </span>)
          : this.props.onCopyLabel}
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
