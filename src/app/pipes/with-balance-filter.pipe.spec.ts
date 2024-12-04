import { WithBalanceFilterPipe } from './with-balance-filter.pipe';

describe('WithBalanceFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new WithBalanceFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
