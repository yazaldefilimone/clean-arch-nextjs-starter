import { render } from '@testing-library/react';
import { HelloFactory } from '~/infra/factories';
describe('Hello Component', () => {
  it('Should render the heading', () => {
    const { getByText } = render(<HelloFactory />);

    expect(getByText('Advanced FrontEnd')).toBeInTheDocument();
    // expect(container.firstChild).toMatchSnapshot();
  });
});
