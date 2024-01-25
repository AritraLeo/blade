import type { CounterProps } from '../Counter';
import { Counter } from '../Counter';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

const colors: CounterProps['color'][] = [
  'primary',
  'information',
  'negative',
  'neutral',
  'notice',
  'positive',
];

describe('<Counter />', () => {
  it('should render Counter with default props', () => {
    const { toJSON } = renderWithTheme(<Counter value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should limit value with max prop', () => {
    const { getByText } = renderWithTheme(<Counter value={20} max={10} />);
    expect(getByText('10+')).toBeTruthy();
  });

  it('should render small size Counter', () => {
    const { toJSON } = renderWithTheme(<Counter size="small" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render medium size Counter', () => {
    const { toJSON } = renderWithTheme(<Counter size="medium" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render large size Counter', () => {
    const { toJSON } = renderWithTheme(<Counter size="large" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  colors.forEach((color) => {
    it(`should render subtle emphasis ${color} color Counter`, () => {
      const { toJSON } = renderWithTheme(<Counter color={color} emphasis="subtle" value={20} />);
      expect(toJSON()).toMatchSnapshot();
    });

    it(`should render intense emphasis ${color} color Counter`, () => {
      const { toJSON } = renderWithTheme(<Counter color={color} emphasis="intense" value={20} />);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('should render subtle emphasis positive color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="positive" emphasis="subtle" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render intense emphasis positive color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="positive" emphasis="intense" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render subtle emphasis negative color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="negative" emphasis="subtle" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render intense emphasis negative color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="negative" emphasis="intense" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render subtle emphasis notice color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="notice" emphasis="subtle" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render intense emphasis notice color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="notice" emphasis="intense" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render subtle emphasis information color Counter', () => {
    const { toJSON } = renderWithTheme(
      <Counter color="information" emphasis="subtle" value={20} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render intense emphasis information color Counter', () => {
    const { toJSON } = renderWithTheme(
      <Counter color="information" emphasis="intense" value={20} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render subtle emphasis neutral color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="neutral" emphasis="subtle" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render intense emphasis neutral color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="neutral" emphasis="intense" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render subtle emphasis primary color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="primary" emphasis="subtle" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render intense emphasis primary color Counter', () => {
    const { toJSON } = renderWithTheme(<Counter color="primary" emphasis="intense" value={20} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should accept testID', () => {
    const { getByTestId } = renderWithTheme(<Counter value={20} testID="counter-test" />);
    expect(getByTestId('counter-test')).toBeTruthy();
  });
});
