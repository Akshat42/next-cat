This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Tech used

I am more fronted-foucued so have implemented only the frontend part. I have built it using NextJs, Cloudinary and open-props library

open-props -> have used it because it provides CSS standard variabled and color out of the box.
Cloudinary -> For image optimization based on the screen size

# Thought Process

Since we need to deal with images, next/image is a excellent way to handle image optimization, it provides out of the box image optimization for static images, for CDN images, we can implement loaders to load images according to the screen size. It also provides out of the box placeholder support for handling image loading state.

I have used HTML draggable attribut to hanle drag and drop
I have implement an useOverlayHook to track state of modal opening and closing.
The Project has beed deployed on vercel with link - [Vercel Deployment Link](https://next-cat.vercel.app)

## Getting Started

Make sure you have NodeJs 20.x installed

First, run the development server:

```bash
npm install pnpm@9
pnpm install
pnpm dev
```
