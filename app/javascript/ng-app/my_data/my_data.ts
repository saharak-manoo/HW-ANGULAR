export class MyData {
  id: number;
  string_test: string;
  integer_test: number;
  boolean_test: boolean;

  constructor() {
    this.boolean_test = true;
  }

  getCreateParam() {
    return {
      my_data: {
        string_test: this.string_test,
        integer_test: this.integer_test,
        boolean_test: this.boolean_test
      }
    }
  }
}
