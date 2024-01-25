import SubscriptionsIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<SubscriptionsIcon />', () => {
  it('should render SubscriptionsIcon', () => {
    const { container } = renderWithTheme(
      <SubscriptionsIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
