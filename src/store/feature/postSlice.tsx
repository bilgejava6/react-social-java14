import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialPostState= {
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
const postSlice = createSlice({
    name: 'post',
    initialState: initialPostState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchCreatePost.fulfilled, (state,action)=>{
            
        })
    }
});

export default postSlice.reducer;