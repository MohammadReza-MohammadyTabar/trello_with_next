'use client'
import { useBoardStore } from '@/store/BoeardStore';
import React, { useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
function Board() {

    const getBoard=useBoardStore((state)=>state.getBoard)
    useEffect(()=>{
        getBoard()
    },[getBoard])
  return (
    <h1>sasa</h1>
    // <DragDropContext>
    //     <Droppable droppableId='bord' direction='horizental' type='column'>
    //         {(provided)=>(
    //                 <div>
    //                     {/* rendering all columns */}
    //                 </div>
    //         )}
    //     </Droppable>
    // </DragDropContext>
  )
}

export default Board