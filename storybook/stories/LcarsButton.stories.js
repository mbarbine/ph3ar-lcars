import LcarsButton from '../../components/atoms/LcarsButton.vue';

export default {
  title: 'Atoms/LcarsButton',
  component: LcarsButton,
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};

const Template = (args) => ({
  components: { LcarsButton },
  setup() {
    return { args };
  },
  template: '<LcarsButton v-bind="args">Click Me</LcarsButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
