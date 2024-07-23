import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialFollowState = {
    followList: [],
    userId: 0,
    followId: 0
}
interface IFetchAddFollowPayload{
    token: string,
    followId: number
}
export const fetchAddFollow = createAsyncThunk(
    'follow/fetchAddFollow',
    async (payload:IFetchAddFollowPayload)=>{
        const res = fetch('http://localhost:9090/follow/add-follow',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'token': payload.token,
                'followId': payload.followId
            })
        }).then(data=>data.json())
        return res;
    }
)

interface IFetchUnFollowPayload{
    token: string,
    followId: number
}
export const fetchUnFollow = createAsyncThunk(
    'follow/fetchUnFollow',
   async (payload: IFetchUnFollowPayload)=>{
    const res = fetch('http://localhost:9090/follow/un-follow',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'token': payload.token,
            'followId': payload.followId
        })
    }).then(data=>data.json())
    return res;
    }
)

const followSlice = createSlice({
    name: 'follow',
    initialState: initialFollowState,
    reducers:{},
    extraReducers: (build)=>{

    }
});

export default followSlice.reducer;