// @flow
import transitions from '../../shared/animation/transitions';

export function getStyles(props, theme, state) {
  const verticalPosition = props.verticalPosition;
  const horizontalPosition = props.horizontalPosition;
  const touchMarginOffset = props.touch ? 10 : 0;
  const touchOffsetTop = props.touch ? -20 : -10;
  const offset =
    verticalPosition === 'bottom'
      ? 14 + touchMarginOffset
      : -14 - touchMarginOffset;

  const { fontFamily, zIndex, tooltip, borderRadius } = theme;

  const styles = {
    root: {
      position: 'absolute',
      fontFamily,
      fontSize: '10px',
      lineHeight: '22px',
      padding: '0 8px',
      zIndex: zIndex.tooltip,
      color: tooltip.color,
      overflow: 'hidden',
      top: -10000,
      borderRadius,
      userSelect: 'none',
      opacity: 0,
      right: horizontalPosition === 'left' ? 12 : null,
      left:
        horizontalPosition === 'center'
          ? (state.offsetWidth - 48) / 2 * -1
          : horizontalPosition === 'right' ? 12 : null,
      transition: `${transitions.easeOut(
        '0ms',
        'top',
        '450ms'
      )}, ${transitions.easeOut(
        '450ms',
        'transform',
        '0ms'
      )}, ${transitions.easeOut('450ms', 'opacity', '0ms')}`
    },
    label: {
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    ripple: {
      position: 'absolute',
      left:
        horizontalPosition === 'center'
          ? '50%'
          : horizontalPosition === 'left' ? '100%' : '0%',
      top: verticalPosition === 'bottom' ? 0 : '100%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: `${transitions.easeOut(
        '0ms',
        'width',
        '450ms'
      )}, ${transitions.easeOut(
        '0ms',
        'height',
        '450ms'
      )}, ${transitions.easeOut('450ms', 'backgroundColor', '0ms')}`
    },
    rootWhenShown: {
      top: verticalPosition === 'top' ? touchOffsetTop : 36,
      opacity: 0.9,
      transform: `translate(0px, ${offset}px)`,
      transition: `${transitions.easeOut(
        '0ms',
        'top',
        '0ms'
      )}, ${transitions.easeOut(
        '450ms',
        'transform',
        '0ms'
      )}, ${transitions.easeOut('450ms', 'opacity', '0ms')}`
    },
    rootWhenTouched: {
      fontSize: '14px',
      lineHeight: '32px',
      padding: '0 16px'
    },
    rippleWhenShown: {
      backgroundColor: tooltip.rippleBackgroundColor,
      transition: `${transitions.easeOut(
        '450ms',
        'width',
        '0ms'
      )}, ${transitions.easeOut(
        '450ms',
        'height',
        '0ms'
      )}, ${transitions.easeOut('450ms', 'backgroundColor', '0ms')}`
    }
  };

  return styles;
}
