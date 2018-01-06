// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getStyles } from './styles';
import { lightBaseTheme } from '../../shared/style/theme/theme';

/**
 * Description 提示插件
 */
export default class Tooltip extends Component {
  static propTypes = {
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    horizontalPosition: PropTypes.oneOf(['left', 'right', 'center']),
    label: PropTypes.node.isRequired,
    show: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    touch: PropTypes.bool,
    verticalPosition: PropTypes.oneOf(['top', 'bottom'])
  };

  state = {
    offsetWidth: null
  };

  componentDidMount() {
    this.setRippleSize();
    this.setTooltipPosition();
  }

  componentWillReceiveProps() {
    this.setTooltipPosition();
  }

  componentDidUpdate() {
    this.setRippleSize();
  }

  setRippleSize() {
    const ripple = this.refs.ripple;
    const tooltip = this.refs.tooltip;
    const tooltipWidth =
      parseInt(tooltip.offsetWidth, 10) /
      (this.props.horizontalPosition === 'center' ? 2 : 1);
    const tooltipHeight = parseInt(tooltip.offsetHeight, 10);

    const rippleDiameter = Math.ceil(
      Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2
    );
    if (this.props.show) {
      ripple.style.height = `${rippleDiameter}px`;
      ripple.style.width = `${rippleDiameter}px`;
    } else {
      ripple.style.width = '0px';
      ripple.style.height = '0px';
    }
  }

  setTooltipPosition() {
    this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
  }

  render() {
    const {
      horizontalPosition, // eslint-disable-line no-unused-vars
      label,
      show, // eslint-disable-line no-unused-vars
      touch, // eslint-disable-line no-unused-vars
      verticalPosition, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const styles = getStyles(this.props, lightBaseTheme, this.state);

    return (
      <div
        {...other}
        ref="tooltip"
        style={Object.assign(
          styles.root,
          this.props.show && styles.rootWhenShown,
          this.props.touch && styles.rootWhenTouched,
          this.props.style
        )}
      >
        <div
          ref="ripple"
          style={Object.assign(
            styles.ripple,
            this.props.show && styles.rippleWhenShown
          )}
        />
        <span style={styles.label}>
          {label}
        </span>
      </div>
    );
  }
}
