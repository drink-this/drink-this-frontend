import { EventEmitter } from "events";

class CocktailStore extends EventEmitter {
  constructor() {
    super();
    this.cocktails = [];
    this.searchQuery = '';
    this.cocktail = {};
  }
  setCocktail = (cocktail) => {
    this.cocktail = cocktail;
  }
  setSearchQuery = (query) => {
    this.searchQuery = query;
  }
  setCocktails = (cocktails) => {
    this.cocktails = cocktails;
  }
}
const cocktailStore = new CocktailStore();
export default cocktailStore;