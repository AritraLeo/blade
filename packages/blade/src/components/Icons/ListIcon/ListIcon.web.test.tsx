import ListIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<ListIcon />', () => {
  it('should render ListIcon', () => {
    const { container } = renderWithTheme(
      <ListIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
