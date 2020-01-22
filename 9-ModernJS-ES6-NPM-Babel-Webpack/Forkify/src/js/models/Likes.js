export default class Likes{
    constructor(){
        this.likes = [];
    }
    addLike(id, title, author, img){
        const like = {id, title, author, img};
        this.likes.push(like);

        //persist data in local storage

        return like;
    }
    deleteLike(id){
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index,1);
        //persist data in local storage
        
    }
    isLiked(id){
        return this.likes.findIndex(el => el.id === id) !== -1;
    }
    getNumLikes(){
        return this.likes.length;
    }
}