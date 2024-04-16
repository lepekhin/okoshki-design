import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './Input';
import { Label } from './Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Input',
  component: Input,
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
    ariaLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    hidden: { control: 'boolean' },
    required: { control: 'boolean' },
    id: { control: 'text' },
    name: { control: 'text' },
    role: { control: 'text' },
    style: { control: 'text' },
    value: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn(), onBlur: fn(), onFocus: fn(), onInput: fn(), label: 'Категория', sublabel: 'This is a tooltip', error: '', placeholder: 'Константин', type: 'text', name: 'name' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};