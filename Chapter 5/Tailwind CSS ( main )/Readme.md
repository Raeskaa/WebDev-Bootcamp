## Why use Tailwind CSS?

> No reinventing og class names required.
> Your CSS doesn't grow with your html designs.
> When you make change, no risk of breaking existing templates!
> If you try to build the site using pure CSS, you will get answer to a lot of questions you have about tailwind

Will this make sites slow? Will it increase bundle size?

> Noo, only the classes are added in the files which we use in out html page

## How to setup Tailwind CSS?

---

npm init -y ( this initializes the director as a Node JS project )
npm install -D tailwindcss postcss autoprefixer vite ( install required packages )
npx tailwindcss init -p

## Create a CSS file "input.css", add it to your html and edit it with this content:

---

@tailwind base;
@tailwind components;
@tailwind utilities;

---

In your tailwind.config.js file

> Replace content:[] with content: ["*"],
> In package.json
> Add "start" : "vite" to your scripts

## Run npm run start comand to start a dev server
