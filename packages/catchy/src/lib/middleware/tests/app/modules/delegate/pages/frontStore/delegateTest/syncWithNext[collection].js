import jest from 'jest-mock';

export default jest.fn((request, response, delegates, next) => {
  next();
});
