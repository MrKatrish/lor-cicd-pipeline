import { render } from '@testing-library/react';
import App from '../App';

describe('<App/> Component', () => {

  it('Renders Without Error', () => {
    render(<App />);
  });

});
