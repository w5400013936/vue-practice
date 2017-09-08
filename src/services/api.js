export default {
    getData(type,callback){
            $.getJSON('http://api.tianapi.com/'+type+'/?key=8f0cea2a81cc905aea4e0dd82d5b60ea&num=50',(res)=>{
                callback(res.newslist);
            })
    }
}