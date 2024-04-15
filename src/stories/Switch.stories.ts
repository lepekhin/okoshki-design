import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Switch } from './Switch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Switch',
  component: Switch,
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
    big: { control: 'boolean' },
    checked: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn(), label: 'Скрыть услугу для клиентов', sublabel: 'Если вы не хотите показывать эту услугу клиентам, скройте её. Вы можете вернуть её обратно в любой момент.' },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};