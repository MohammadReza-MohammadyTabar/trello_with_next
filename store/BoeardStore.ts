import { getTodosGroupedByColumn } from '@/lib/GetTodosGroupedByColumn';
import { create } from 'zustand'


interface BoardState {
  board:Board; 
  getBoard:()=>void;
}

export const useBoardStore = create<BoardState>((set)=>({
    board:{
        column:new Map<TypedColumn,Column >()
    },
    getBoard:async () =>{
        const board=await getTodosGroupedByColumn();
        set({board})
    }
}))