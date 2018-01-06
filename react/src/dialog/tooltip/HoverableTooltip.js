// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from './Tooltip';

import './HoverableTooltip.scss';

/**
 * Description 组件 HoverableTooltip
 */
export default class HoverableTooltip extends Component {
  static propTypes = {
    label: PropTypes.node.isRequired,

    tip: PropTypes.node.isRequired
  };

  static defaultProps = {
    label: 'Label'
  };

  state = {
    showTooltip: false
  };

  /**
   * @function 默认构造函数
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function 组件挂载完成回调
   */
  componentDidMount() {}

  /**
   * @function 默认渲染函数
   */
  render() {
    return (
      <section
        className="tooltip__container"
        onMouseEnter={() => {
          this.setState({ showTooltip: true });
        }}
        onMouseLeave={() => {
          this.setState({ showTooltip: false });
        }}
      >
        <Tooltip
          show={this.state.showTooltip}
          horizontalPosition="center"
          verticalPosition="bottom"
          label={this.props.tip}
        />
        {this.props.label}
      </section>
    );
  }
}
