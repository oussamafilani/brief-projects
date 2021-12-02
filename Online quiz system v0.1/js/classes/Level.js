"use strict";

export default class Level {
  constructor(id, description, min, max ) {
   this.id = id;
   this.description = description;
   this.min = min;
   this.max = max;
  }

  static async GetAll(){
    try {
      const response = await fetch('http://localhost:3000/levels',
        {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    } catch (error) {
      return console.warn(error);
    }
  }
}
