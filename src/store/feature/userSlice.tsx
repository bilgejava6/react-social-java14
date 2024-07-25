import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IResponse } from "../../components/models/IResponse"
import Rest from '../../config/RestApis';

export interface IUserProfile{
  name: string
  userName: string
  avatar: string
  followerCount: number
  followingCount: number
  about: string
  bornDate: number
  phone: string
  address: string
}
export interface ISearchUser{
    id: number,
    userName: string,
    name: string,
    avatar: string
}

interface IUserState {
    userProfile: IUserProfile | null,
    isLoading: boolean,
    userSearchList: ISearchUser[],
    searchUserName: string
}
const initialUserState: IUserState = {
    userProfile: null,
    isLoading: false,
    userSearchList: [],
    searchUserName: ''
}

export const fetchgetUserProfile = createAsyncThunk(
    'user/fetchgetUserProfile',
    async(payload: string)=>{
        const result = await fetch(Rest.userService+'/get-profile?token='+payload)
        .then(data=>data.json());
        return result;
    }
)
export interface IFetchSearchUserPayload{
    token: string,
    userName: string
}
export const fetchSearchUserList = createAsyncThunk(
    'user/fetchSearchUserList', 
   async (payload:IFetchSearchUserPayload)=>{
        const res = fetch(Rest.userService+'/search-user',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'token': payload.token,
                'userName': payload.userName
            })
        }).then(data=>data.json())
        return res;
   }
)
interface IFetchUpdateProfilePayload{
                email: string,
                avatar: string,
                name: string,
                about: string,
                bornDate: number,
                phone: string,
                address: string,
                token: string
}
export const fetchUpdateProfile = createAsyncThunk(
    'user/fetchUpdateProfile',
    async (payload: IFetchUpdateProfilePayload)=>{
        const res = await fetch(Rest.userService+'/edit-profile',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: payload.email,
                avatar: payload.avatar,
                name: payload.name,
                about: payload.about,
                bornDate: payload.bornDate,
                phone: payload.phone,
                address: payload.address,
                token: payload.token
            })
        }).then(data=>data.json());
        return res;
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setSearchUserName(state,action){
            state.searchUserName = action.payload
        }
    },
    extraReducers: (build)=>{
        build.addCase(fetchgetUserProfile.fulfilled,(state,action: PayloadAction<IResponse>)=>{
            if(action.payload.code===200){
                state.userProfile = action.payload.data;
            }else{
                
            }
        });
        build.addCase(fetchSearchUserList.fulfilled,(state,action:PayloadAction<IResponse>)=>{
            state.userSearchList = action.payload.data;
        })
    }
});
export const {
    setSearchUserName
} = userSlice.actions;
export default userSlice.reducer;