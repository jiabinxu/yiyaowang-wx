

function fetchHomeData() {
  return new Promise((resolve, reject) => {
    resolve({data:''})
    // wx.request({
    //   url: URI,
    //   data: params,
    //   header: { 'Content-Type': 'application/json' },
    //   success: resolve,
    //   fail: reject
    // });
  });
}

function fetchFirstCategory() {
  return new Promise((resolve, reject) => {
    resolve({data:''})
    // wx.request({
    //   url: URI,
    //   data: params2,
    //   header: { 'Content-Type': 'application/json' },
    //   success: resolve,
    //   fail: reject
    // });
  });
}

function fetchSecondCategory(id = 1000000) {
  let param = params3;
  param.fatherid = id;
  return new Promise((resolve, reject) => {
    resolve({data:''})
    // wx.request({
    //   url: URI,
    //   data: param,
    //   header: { 'Content-Type': 'application/json' },
    //   success: resolve,
    //   fail: reject
    // });
  });
}

function fetchCartData() {
  return new Promise((resolve, reject) => {
    resolve({data:''})
    // wx.request({
    //   url: URI3,
    //   header: { 'Content-Type': 'application/json' },
    //   success: resolve,
    //   fail: reject
    // });
  });
}


module.exports = { fetchHomeData, fetchFirstCategory, fetchSecondCategory, fetchCartData };
