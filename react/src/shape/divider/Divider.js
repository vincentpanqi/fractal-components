// @flow
import React, { Component, PropTypes } from 'react';

require('./Divider.scss');

/**
 * 组件VerticalDivider，垂直分割线
 */
export default class Divider extends Component {
  static propTypes = {
    // 是否设置为竖直分割线
    vertical: PropTypes.bool
  };

  static defaultProps = {
    vertical: false
  };

  /**
   * @function 默认渲染函数
   */
  render() {
    const className = this.props.vertical ? 'vertical' : 'horizon';

    return (
      <section className={`divider__container ${className}`}>
        <div className="lineBox">
          <span className="line" />
        </div>
      </section>
    );
  }
}

export const VerticalDivider = () => <Divider vertical />;

export const HorizonDivider = () => <Divider vertical={false} />;
