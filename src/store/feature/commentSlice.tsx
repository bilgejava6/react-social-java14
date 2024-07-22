import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ICommentState{
    postId: number
}

const initialCommentState:ICommentState ={
    postId: 0
}
export interface IAddCommentPayload{
    postId: number,
    token: string,
    comment: string
}
export const fetchAddComment = createAsyncThunk(
    'comment/fetchAddComment',
     async(payload: IAddCommentPayload)=>{
       const res = fetch('http://localhost:9090/comment/add-comment',{
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

        })
    }
})
export const {
    setPostId
}  = commentSlice.actions;

export default commentSlice.reducer;