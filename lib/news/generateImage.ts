
const generateImage = async (result: any) => {
    const prompt = result.content;


    const response = await fetch(
        "https://router.huggingface.co/fal-ai/fal-ai/ernie-image?_subdomain=queue",
        {
            headers: {
                Authorization: `Bearer ${process.env.HF_TOKEN}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(prompt),
        }
    );
    console.log("image ==========>", response)
    const data = await response.blob();
    return data;



}
export default generateImage;

    // try {
    //     console.log("prompt ================>")
    //     console.log(prompt)

    //     // Build the Pollinations URL
    //     const encodedPrompt = encodeURIComponent(prompt);
    //     const imageURL = `https://image.pollinations.ai/prompt/${encodedPrompt}?model=flux&width=${516}&height=${290}&nologo=true&enhance=true`;
    //     // Optional: You can fetch it here to verify or convert to base64 if needed
    //     const response = await fetch(imageURL);

    //     if (!response.ok) {
    //         throw new Error('Failed to generate image');
    //     }

    //     return {
    //         imageURL,
    //         success: true
    //     };

    // } catch (error) {
    //     console.log("image genaration failed ==> ", error)
    // }
