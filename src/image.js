import { images } from "./model";
const accessKey = 'SmVk5YVKdi8-ZKHtTxnk1a7824PeVxf5X7Nn7nz6J4k';
const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=1`;

export async function getRandomImage() {
    try {
        const data = await(await fetch(url)).json();
        images.imageUrl = data[0].urls.regular;
    } catch (error) {
        return console.log(error)
    }
}
