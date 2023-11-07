import { APPWRITE_DATABASE_ID, APPWRITE_TODOS_COLLECTION_ID } from "./configs";
import { database } from "@/appwrite"

export const getTodosGroupedByColumn = async () => {
    const data = await database.listDocuments(
        APPWRITE_DATABASE_ID!,
        APPWRITE_TODOS_COLLECTION_ID!
    )


    const todos = data.documents
    const column = todos.reduce((acc, todo) => {
        if (!acc.get(todo.state)) {
            acc.set(todo.status, {
                id: todo.status,
                todos: []
            })
            acc.get(todo.status)?.todos.push({
                $id: todo.$id,
                $createdAt: todo.$createdAt,
                title: todo.title,
                status: todo.status,
                ...(todo.image && { image: todo.image })
            })
        }
        return acc
    }, new Map<TypedColumn, Column>)

    const columnTypes: TypedColumn[] = ['doing', "done", "todo"]
    for (const columnType of columnTypes) {
        if (!column.get(columnType)) {
            column.set(columnType, {
                id: columnType,
                todos: []
            })
        }
    }

    const sortColumns = new Map(
        Array.from(column.entries()).sort((a, b) => (columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])))
    )

    const board :Board={
        columns:sortColumns
    }
    return board
}