export class MyHomework {
  id: number;
  name: string;
  sex: string;
  age: number;
  address: string;
  skill: string;
  likecode: string;
  dead: boolean; 

  constructor() {
    this.dead = true;
  }

  getCreateParam() {
    return {
      my_data_home_work: {
        name: this.name,
        sex: this. sex,
        age: this.age,
        address: this.address,
        skill: this. skill,
        likecode: this.likecode,
        dead: this.dead
        
      }
    }
  }
}
