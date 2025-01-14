import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditFormComponent } from './blog-editform.component';

describe('BlogEditformComponent', () => {
  let component: BlogEditFormComponent;
  let fixture: ComponentFixture<BlogEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
