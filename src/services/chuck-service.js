import axios from 'axios';

export default class ChuckService {
  constructor(){
    this.url = 'https://api.chucknorris.io/jokes/'
  }

  async getApiData(input){
    const res = await axios.get(this.url + input);
    return res;
  }

  async getAllCategories(){
    const res = await this.getApiData('categories')
    return res;
  }

  async getRandomJoke(){
    const res = await this.getApiData('random')
    return res;
  }

  async getJokeFromCateg(categoryName){
    const res = await this.getApiData(`random?category=${categoryName}`)
    return res;
  }

  async getJokeByText(text){
    const res = await this.getApiData(`search?query=${text}`)
    return res;
  }

}
