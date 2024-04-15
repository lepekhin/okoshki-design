import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Btn } from './Btn';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Btn',
  component: Btn,
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
    hasPopup: { control: 'text' },
    hidden: { control: 'boolean' },
    href: { control: 'text' },
    id: { control: 'text' },
    loading: { control: 'boolean' },
    name: { control: 'text' },
    role: { control: 'text' },
    style: { control: 'text' },
    target: { control: 'text' },
    value: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), onFocus: fn(), view: 'primary', size: 'medium', type: 'button', label: 'Создать новый аккаунт' },
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof Btn>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { view: 'primary' }
};
export const Secondary: Story = {
  args: { view: 'secondary' }
};
export const Text: Story = {
  args: { view: 'text' }
};