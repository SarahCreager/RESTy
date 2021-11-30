// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import Form from '../components/form/index.js';
// import Results from '../components/results/index.js';

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json({}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Testing Request', async () => {
  
});