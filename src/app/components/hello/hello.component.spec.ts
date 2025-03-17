import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('displayName', () => {
    it('returns "World" as displayName when no name is given', () => {
      expect(component.displayName).toEqual('World');
    });

    it('returns "Maxi" when name is "Maxi"', () => {
      const name = 'Maxi';

      component.name = name;

      expect(component.displayName).toEqual(name);
    });
  })
});
