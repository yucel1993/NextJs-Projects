

export interface RandomUsers {

    id:string
    name:string
    image:string
}
export interface Like{
    id:string;
    user_id:string;
    post_id:string
}
export interface Post {
    id:string;
    user_id:string;
    video_url:string;
    text:string;
    created_at:string;
}


export interface Comment {
    id:string;
    user_id:string;
    post_id:string;
    text:string;
    created_at:string;
}

export interface PostMainCompTypes{
post:PostWithProfile 
}
export interface PostUserCompTypes {
    post:Post
}

export interface PostMainLikesCompTypes {
    post:PostWithProfile
 }
 

export interface PostWithProfile {

    id:string;
    user_id:string;
    video_url:string;
    text:string;
    created_at:string;
    profile:{
        user_id:string;
        name:string;
        image:string;
    }
}

export interface UploadError {

    type:string;
    message:string;
}

export interface ProfilePageTypes{
    params:{id:string;};
}


// ! LAYOUT INCLUDE TYPES

export interface MenuItemsTypes{

    iconString:string,
    colorString:string,
    sizeString:string
}

export interface  MenuItemFollowCompTypes {

    user:RandomUsers
}