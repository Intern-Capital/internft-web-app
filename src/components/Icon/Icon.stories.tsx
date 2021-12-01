import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from './Icon';
import * as iconTypes from './types';

const options = Object.keys(iconTypes).reduce((acc, type) => {
  acc[type] = type;
  return acc;
}, {});

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    type: { control: { type: 'select', options } },
  },
} as Meta;

export const Default: Story<IconProps> = (args) => <Icon {...args} />;
Default.args = {
  type: 'unknown',
  className: 'l-12 w-12',
};

export const List: Story<IconProps> = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
      {Object.keys(options).map((opt) => (
        <span key={opt} className="bg-gray-100 rounded-3xl">
          <div className="flex justify-center py-4">
            <Icon type={opt} className="l-20 w-20" />
          </div>
          <div className="text-center text-xs bg-gray-800 text-white px-2 py-1">
            <span>{opt}</span>
          </div>
        </span>
      ))}
    </div>
  );
};
