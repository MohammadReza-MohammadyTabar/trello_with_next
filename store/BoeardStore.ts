import { getTodosGroupedByColumn } from '@/lib/GetTodosGroupedByColumn';
import { create } from 'zustand'


interface BoardState {
  board:Board; 
  getBoard:()=>void;
}

export const useBoardStore = create<BoardState>((set)=>({
    board:{
        columns:new Map<TypedColumn,Column >()
    },
    getBoard:async () =>{
        const board=await getTodosGroupedByColumn();
        console.log(board);
        
        set({board})
    }
}))