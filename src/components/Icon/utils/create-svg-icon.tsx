import { ReactElement, FunctionComponent, Ref, forwardRef, memo } from 'react';

export interface SvgIconProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess?: boolean | 'true' | 'false';
  /**
   * Allows you to redefine what the coordinates without units mean inside
   * an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left
   * corner (0,0) to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox?: string;
}

/**
 *
 * @param path
 * @param displayName
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui-icons/src/utils/createSvgIcon.js
 */
export function createSvgIcon(
  path: ReactElement<SVGElement>,
  displayName: string
): FunctionComponent {
  const Component = memo(
    forwardRef((props: SvgIconProps, ref: Ref<SVGSVGElement>) => {
      // eslint-disable-next-line react/prop-types
      const { viewBox = '0 0 24 24', titleAccess = false, ...others } = props;
      return (
        <svg
          focusable="false"
          data-barusu-test={displayName + 'Icon'}
          viewBox={viewBox}
          aria-hidden={titleAccess ? undefined : 'true'}
          role={titleAccess ? 'img' : 'presentation'}
          ref={ref}
          {...others}
        >
          {path}
        </svg>
      );
    })
  );

  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`;
  }

  (Component as any).barusuName = 'SvgIcon';
  return Component;
}
