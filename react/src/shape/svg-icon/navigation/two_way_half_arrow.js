import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

/**
 * @function 双向单部分箭头
 */
export default class TwoWayHalfArrow extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 200 200">
        <g className="transform-group">
          <g transform="scale(0.1953125, 0.1953125)">
            <path
              d="M718.694037 305.975716l0 59.278081 59.279105 0 0-59.278081L718.694037 305.975716zM777.973142 365.253798l0 59.280128 59.278081 0 0-59.280128L777.973142 365.253798zM837.251224 424.532903l0 57.71754 59.279105 0 0-57.71754L837.251224 424.532903zM955.80841 541.529547l0-59.278081-59.279105 0 0 0.462534L127.567909 482.714l0-0.023536L68.190567 482.690464l0 58.839083 59.377342 0 0 58.842153 59.375296 0 0-58.842153L955.80841 541.529547zM305.647747 718.024284l0-58.814524-59.328223 0 0 58.814524L305.647747 718.024284zM246.319523 659.210783l0-58.839083-59.375296 0 0 58.839083L246.319523 659.210783z"
            />
          </g>
        </g>
      </SvgIcon>
    );
  }
}
