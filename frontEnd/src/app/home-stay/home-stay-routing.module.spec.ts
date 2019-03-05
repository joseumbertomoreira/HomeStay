import { HomeStayRoutingModule } from './home-stay-routing.module';

describe('HomeStayRoutingModule', () => {
  let homeStayRoutingModule: HomeStayRoutingModule;

  beforeEach(() => {
    homeStayRoutingModule = new HomeStayRoutingModule();
  });

  it('should create an instance', () => {
    expect(homeStayRoutingModule).toBeTruthy();
  });
});
