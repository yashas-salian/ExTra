import { useCallback, useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface data {
    "food": number;
    "rent": number;
    "travel": number
    "study": number
    "other": number
    "total": number
    "budget": number
    "spent": number
    "balance": number
}

export const useExpense = () => {


    const [expense, setExpense] = useState<data>();
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getData = useCallback( async () => {
        setIsLoading(true)
        try {
            const res = await axios.get(`${BACKEND_URL}/api/v1/expenses/getTotal`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            setExpense(res.data.expense)
        } catch (error) {
            setError(error as string)
        } finally {
            setIsLoading(false)
        }

    },[expense?.budget])

    useEffect(() => {
        getData()
    }, [getData])

    return {
        expense,
        error,
        isLoading
    }
}

