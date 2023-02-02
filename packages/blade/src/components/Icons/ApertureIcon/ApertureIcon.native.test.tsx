import ApertureIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<ApertureIcon />', () => {
  it('should render ApertureIcon', () => {
    const renderTree = renderWithTheme(
      <ApertureIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});