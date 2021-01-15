/**
* @author Roganovich R.M.
*/

export class Post {
  id?: number;
  title: string;
  text: string;

  constructor (id:number,title:string,text:string){
    this.id = id;
    this.title = title;
    this.text = text;

  }
}
