import { PackagingsModule } from './packagings.module';

describe('PackagingsModule', () => {
  let packagingsModule: PackagingsModule;

  beforeEach(() => {
    packagingsModule = new PackagingsModule();
  });

  it('should create an instance', () => {
    expect(packagingsModule).toBeTruthy();
  });
});
