import { HomeStayModule } from './home-stay.module';

describe('HomeStayModule', () => {
  let homeStayModule: HomeStayModule;

  beforeEach(() => {
    homeStayModule = new HomeStayModule();
  });

  it('should create an instance', () => {
    expect(homeStayModule).toBeTruthy();
  });
});
