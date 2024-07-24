import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IResponse } from "../../components/models/IResponse"
import { ISearchUser } from "./userSlice"
import Rest from '../../config/RestApis';
interface IFollowState{
    followList: ISearchUser[],
    userId: number,
    followId: number
}

const initialFollowState: IFollowState = {
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
        const res = fetch(Rest.followService+'/add-follow',{
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
    const res = fetch(Rest.followService+'/un-follow',{
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
export const fetchFollowList = createAsyncThunk(
    'follow/fetchFollowList',
    async(token: string)=>{
        const res = fetch(Rest.followService+'/get-all-following?token='+token)
        .then(data=>data.json());
        return res;
    }
)
const followSlice = createSlice({
    name: 'follow',
    initialState: initialFollowState,
    reducers:{},
    extraReducers: (build)=>{
        build.addCase(fetchFollowList.fulfilled,(state,action:PayloadAction<IResponse>)=>{
                state.followList = action.payload.data;
        });
    }
});

export default followSlice.reducer;