import { FC, ElementType, memo, HTMLAttributes } from 'react';
import * as iconTypes from './types';

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  type?: string;
  color?: string;
}

export const Icon: FC<IconProps> = memo(({ type, color, ...props }) => {
  const Component: ElementType<any> =
    (iconTypes as any)[type] || iconTypes.unknown;
  return <Component {...props} style={color && { fill: color }} />;
});

Icon.defaultProps = {
  type: 'unknown',
};

Icon.displayName = 'Icon';
