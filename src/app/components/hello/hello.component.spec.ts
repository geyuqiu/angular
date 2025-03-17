import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import { By } from '@angular/platform-browser';

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

  describe('by css', () => {
    it('shows "Hello World!" when no name is given', () => {
      const helloWorldParagraph
        = fixture.debugElement.query(By.css('#hello_world')).nativeElement;

      expect(helloWorldParagraph.innerText).toEqual('hello World!');
    });

    it('shows "Hello Maxi" when given name is Maxi', () => {
      component.name = 'Maxi';
      fixture.detectChanges();

      const helloWorldParagraph = fixture.debugElement
        .query(By.css('#hello_user'))
        .nativeElement;

      expect(helloWorldParagraph.innerText).toEqual('hello Maxi!');
    });
  });
});
