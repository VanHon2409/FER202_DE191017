import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchExpenses = createAsyncThunk(
    "expenses/fetchExpenses",
    async (userId, { rejectWithValue }) => {
        try {
            // NOTE: We fetch all and filter in JS to avoid string vs number issues 
            // with JSON Server query parameters like ?userId=1
            const response = await api.get("/expenses");
            const userExpenses = response.data.filter(
                (exp) => String(exp.userId) === String(userId)
            );
            return userExpenses;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch expenses");
        }
    }
);

export const addExpense = createAsyncThunk(
    "expenses/addExpense",
    async (expense, { rejectWithValue }) => {
        try {
            const response = await api.post("/expenses", expense);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to add expense");
        }
    }
);

export const updateExpense = createAsyncThunk(
    "expenses/updateExpense",
    async (expense, { rejectWithValue }) => {
        try {
            const response = await api.put(`/expenses/${expense.id}`, expense);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to update expense");
        }
    }
);

export const deleteExpense = createAsyncThunk(
    "expenses/deleteExpense",
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/expenses/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to delete expense");
        }
    }
);

const expenseSlice = createSlice({
    name: "expenses",
    initialState: {
        items: [],
        filterCategory: "",
        status: "idle",
        error: null,
    },
    reducers: {
        setFilter: (state, action) => {
            state.filterCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExpenses.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchExpenses.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchExpenses.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(addExpense.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateExpense.fulfilled, (state, action) => {
                const index = state.items.findIndex((e) => e.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteExpense.fulfilled, (state, action) => {
                state.items = state.items.filter((e) => e.id !== action.payload);
            });
    },
});

export const { setFilter } = expenseSlice.actions;
export default expenseSlice.reducer;
