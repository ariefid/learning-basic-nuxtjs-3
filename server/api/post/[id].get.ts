export default defineEventHandler(async (event) => {
    const post = await $fetch(
        `https://jsonplaceholder.typicode.com/posts/${event.context.params.id}`,
        {
            headers: {
                Accept: "application/json",
                "Cache-Control": "no-cache",
            },
            method: "GET",
            parseResponse: JSON.parse,
        }
    );

    return post;
});
