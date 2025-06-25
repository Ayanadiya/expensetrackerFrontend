import { createSlice } from "@reduxjs/toolkit"

const initialExpenseState={expenses:[]};

const expenseSlice= createSlice({
    name:'expense',
    initialState:initialExpenseState,
    reducers:{
        add(state,action){
            state.expenses=[...state.expenses,action.payload];
        },
        set(state,action){
            state.expenses=[...action.payload]
        },
        edit(state,action){
            console.log("edit in expenseslice");
            const {newexpense, id}=action.payload;
            console.log(newexpense, id);
            state.expenses=state.expenses.map((expense)=>
                expense._id===id?{...expense, ...newexpense } : expense
            )
        },
        delete(state,action){
            state.expenses=state.expenses.filter(expense=>expense._id!==action.payload)
        }
    }
})

export const expenseActions=expenseSlice.actions;

export default expenseSlice.reducer;