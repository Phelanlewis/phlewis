import axios from 'axios';
import alt from './../alt/alt';

class DataActions {
  constructor() {
    const appUrl = "http://phlewis.seymourdigitalmedia.com/";

    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
    this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`;
  }

  //Method for getting the data from the provided end point URL
  api(endPoint) {
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((err) => {
        console.log(err);
        reject(err);
      });
    });
  }

  getPages(cb){
    this.api(this.pagesEndPoint).then((response) => {
      this.getPosts(response, cb)
    });
  }

  getPosts(pages, cb) {
    this.api(this.postsEndPoint).then((response) => {
      const posts   = response
      const payload = { pages, posts };

      this.getSuccess(payload); // Pass returned data to the store
      cb(payload); // this callback will be used for dynamic rout building
    });
  }

  //This returns an object with Pages and Posts data together
  // The alt store will isten for this methid to fire and will store returned data
  getSuccess(payload) {
    return payload;
  }
}

export default alt.createActions(DataActions);
