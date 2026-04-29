import { GoogleGenAI } from "@google/genai";
import supabaseAdmin from "../supabase/supabaseAdmin";

const generateImage = async (result: any) => {
    const prompt = result.content;

    const ai = new GoogleGenAI({})


    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-image-preview",
            contents: prompt,
        });
        for (const part of response.candidates[0].content.parts) {

            if (part.inlineData) {
                const imageData = part.inlineData.data;
                const buffer = Buffer.from(imageData, "base64");
                console.log(buffer)

            }
        }

    } catch (error) {
        console.log(error)
    }







    // const fileName = `posts/${Date.now()}.png`;

    // const { error: uploadError } = await supabaseAdmin.storage
    //     .from("post-images")
    //     .upload(fileName, blob, {
    //         contentType: "image/png",
    //     });

    // if (uploadError) throw uploadError;

    // // 🔹 Step 3: Generate signed URL (PRIVATE bucket safe)
    // const { data, error: urlError } = await supabaseAdmin.storage
    //     .from("post-images")
    //     .createSignedUrl(fileName, 60 * 60);

    // if (urlError) throw urlError;

    // return {
    //     success: true,
    //     imageURL: data.signedUrl,
    // };
};

export default generateImage;
