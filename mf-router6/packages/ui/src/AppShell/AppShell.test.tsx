import { render } from '@testing-library/react';
import { AppShell } from '.';


describe('AppShell', () => {
  it('renders', () => {
    const { queryAllByAltText } = render(<AppShell 
      title='Foo'
      navLinks={[]}
      routes={[{ path: '/', element: () => <div>Hello</div>}]}
    />);

    expect(queryAllByAltText('Foo')).toBeTruthy();
    expect(queryAllByAltText('Hello')).toBeTruthy();
  })
})