import {render,screen,fireEvent} from '@testing-library/react';
import Counter from './Counter';
test('increments counter when button is clicked',()=>{
    render(<Counter/>);
    const button=screen.getByText(/Increment/i);
    const CountDisplay=screen.getByTestId('count');
    expect(CountDisplay.textContent).toBe('0');
    fireEvent.click(button);
    expect(CountDisplay.textContent).toBe('1');
})