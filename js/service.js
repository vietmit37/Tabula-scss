function Service() {
  this.fectData = function () {
    let promise = axios({
      url: "https://625bc0d550128c5702070781.mockapi.io/api/product",
      method: "get",
    });
    return promise;
  };
}
