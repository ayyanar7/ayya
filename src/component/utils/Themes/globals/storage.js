// The content of the schema.json file can be saved to a database
// so we can persist all the themes along with the theme selection. 
//For now, we will simply store it in the browser’s localStorage

export const setToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  
  export const getFromLS = key => {
    const value = window.localStorage.getItem(key);
  
    if (value) {
      return JSON.parse(value);
    }
  }