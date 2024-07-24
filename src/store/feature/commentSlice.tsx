import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IComment } from "../../components/models/IComment"
import { IResponse } from "../../components/models/IResponse"
import Rest from '../../config/RestApis';
interface ICommentState{
    postId: number,
    commentList: IComment[]
}

const initialCommentState:ICommentState ={
    postId: 0,
    commentList: []
}
export interface IAddCommentPayload{
    postId: number,
    token: string,
    comment: string
}
export const fetchAddComment = createAsyncThunk(
    'comment/fetchAddComment',
     async(payload: IAddCommentPayload)=>{
       const res = fetch(Rest.commentService+'/add-comment',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'postId': payload.postId,
                'token': payload.token,
                'comment': payload.comment
            })
       }).then(data=>data.json())
       return res;
    }
)
export interface IGetAllCommentByPostId{
    token: string,
    postId: number,
    size: number,
    page: number
}
export const fetchGetAllCommentByPostId = createAsyncThunk(
    'comment/fetchGetAllCommentByPostId',
    async (payload: IGetAllCommentByPostId)=>{
        const res = fetch(Rest.commentService+'/get-all-comments-by-postid',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'postId': payload.postId,
                'token': payload.token,
                'size': payload.size,
                'page': payload.page
            })
       }).then(data=>data.json())
       return res;
    }
);

const commentSlice = createSlice({
    name: 'comment',
    initialState: initialCommentState,
    reducers: {
        setPostId(state,action: PayloadAction<number>){
            state.postId = action.payload
        }
    },
    extraReducers: (build) =>{
        build.addCase(fetchAddComment.fulfilled,(state,action)=>{

        });
        build.addCase(fetchGetAllCommentByPostId.fulfilled, (state,action:PayloadAction<IResponse>)=>{
            state.commentList = [...state.commentList, ...action.payload.data]
        })
    }
})
export const {
    setPostId
}  = commentSlice.actions;

export default commentSlice.reducer;