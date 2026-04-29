import axios from "axios";
import * as cheerio from "cheerio";

export const createPreviewImage = async (url: string) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        return (
            $('meta[property="og:image"]').attr("content") ||
            $('meta[name="twitter:image"]').attr("content") ||
            $('meta[property="og:image:secure_url"]').attr("content") ||
            null
        );
    } catch (error) {
        return null;
    }
};
