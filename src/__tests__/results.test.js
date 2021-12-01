import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Results from '../components/results/index.js';

describe('Testing Results component', () => {
  it('Should render data.text', () => {

    let dataProp = {text: 'test'};

    render(<Results data={dataProp}/>);
    let displayText = screen.getByTestId('data');
    expect(displayText).toHaveTextContent(dataProp.text);
  });
});



// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// import Results from '../components/results/index.js';

// import {rest} from 'msw'
// import {setupServer, rest} from 'msw/node'

// // setup our mocked API endpoint
// const server = setupServer(
//   rest.get('*', (req, res, ctx) => {
//     return res (
//       ctx.json({
//         count: 0,
//         body: null,
//         headers: null,
//       })
//     )
//   })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())


// describe('Testing Results component', () => {
//   it('Should render data.text', async () => {

//     // let dataProp = {text: 'test'};

//     // need to render something
//     render(<Results data={}/>);

//     // what is rendered should include elements with test id 'data'
//     let displayText = await screen.getByTestId('data');

//     expect(displayText).toHaveTextContent(dataProp.text);
//   });
// });





