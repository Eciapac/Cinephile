import { create } from "zustand";
import { apiKey, apiUrl } from "./url";
import axios from "axios";

const recStore = create((set) => ({
    rec: null,
    fetchRec: async (type, id) => {
        try {
            const url = `${apiUrl}${type}/${id}/recommendations?language=ru-RU&api_key=${apiKey}`
            const response = await axios.get(url)
            let data = response.data.results
            let rec = []
            for (let i = 0; i < 4; i++) {
                rec.push(data[i])
            }
            set({ rec: rec })
        } catch (error) {
            console.error('Произошла ошибка в Rec', error);
        }
    }
}))
export const selectRec = (state) => state.rec
export default recStore