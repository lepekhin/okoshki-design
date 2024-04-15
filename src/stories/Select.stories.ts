import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Select } from './Select';
import { Label } from './Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Select',
  component: Select,
  subcomponents: {Label},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/JHmwAHgmhSad04QlZnN9Gn/Okoshki-%5BLepekhin-Studio%5D?type=design&node-id=538%3A6675&mode=design&t=WcnGuNfkmHTfTZhu-1',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    id: { control: 'text' },
    style: { control: 'text' },
    selected: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn(), onFocus: fn(), label: 'Выберите услугу', sublabel: 'This is a tooltip', error: 'Текст ошибки', name: 'service', list: { 'manicure': 'Маникюр' }, emptyOption: 'Любая', selected: 'manicure' },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
};