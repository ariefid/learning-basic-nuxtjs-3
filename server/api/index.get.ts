export default defineEventHandler(async (event) => {
    const posts = await $fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            Accept: "application/json",
            "Cache-Control": "no-cache",
        },
        method: "GET",
        parseResponse: JSON.parse,
    });

    return posts;
});
