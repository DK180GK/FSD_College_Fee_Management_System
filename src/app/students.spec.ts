import { Student } from './students';

describe('Student', () => {
  it('should create an instance', () => {
    const student = new Student();
    expect(student).toBeTruthy(); // Checks that the instance is created successfully
  });
});
