import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IResponse } from "../../components/models/IResponse";
import { IPost } from "../../components/models/IPost";

interface IInitialPost{
    postList: IPost[],
    isPostLoading: boolean
}

const initialPostState: IInitialPost= {
    postList: [],
    isPostLoading: false
}
interface ICreatePostPayload{
    token: string,
    url: string,
    comment: string
}
export const fetchCreatePost= createAsyncThunk(
    'post/fetchCreatePost',
    async(payload: ICreatePostPayload)=>{
        const response = fetch('http://localhost:9090/post/create-post',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'token': payload.token,
                'comment': payload.comment,
                'url': payload.url
            })
        }).then(data=>data.json());
        return response;
    }
)
export const fetchGetPostList = createAsyncThunk(
    'post/fetchGetPostList',
    async(token: string)=>{
        const result = await fetch('http://localhost:9090/post/get-post-list?token='+ token)
        .then(data=>data.json());
        return result;
    }
);
const postSlice = createSlice({
    name: 'post',
    initialState: initialPostState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchCreatePost.fulfilled, (state,action)=>{            
        });
        build.addCase(fetchGetPostList.pending,(state)=>{
            state.isPostLoading = true;
        });
        build.addCase(fetchGetPostList.fulfilled,(state,action: PayloadAction<IResponse>)=>{
            state.postList = action.payload.data;
            state.isPostLoading= false;
        })
    }
});

export default postSlice.reducer;