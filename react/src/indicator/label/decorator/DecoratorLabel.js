// @flow
import React, { Component, PropTypes } from 'react';

require('./DecoratorLabel.scss');

/**
 * Description 附带其他装饰效果的标签
 */
export default class DecoratorLabel extends Component {
  static propTypes = {
    label: PropTypes.node,
    className: PropTypes.string,
    required: PropTypes.bool
  };

  static defaultProps = {
    label: '王下邀月熊',
    className: 'class_name',
    required: true
  };

  /**
   * @function 组件挂载完成回调
   */
  componentDidMount() {}

  /**
   * @function 默认渲染函数
   */
  render() {
    const { label, required, className } = this.props;

    const classNames = [];

    if (required) classNames.push('required');

    return (
      <section className="decorator_label__container">
        <span className={`${className} ${classNames.join(' ')}`}>
          {label}
        </span>
      </section>
    );
  }
}
