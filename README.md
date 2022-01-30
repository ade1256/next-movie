### BNC Front End Web Engineer Technical Test

Test coding to create 3 web pages (list page, detail page, and favourite page)
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## #Demo
you can see the live result on this link [https://next-movie-eta.vercel.app](https://next-movie-eta.vercel.app)

## #Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## #Technology Used

On this repository, contains reactjs with typescript or tsx, and i'm using :
 - styled-components : for creating style scss to each component
 - next-seo : for implement seo each page
 - antd : is a library design
 - redux : management state

## #Custom Hooks
I made a several custom hooks

##### 1. useInfinityScroll
To detect user when scrolling reach at bottom page, it will load more movies

#### 2. useFavMovie
To manage favourite movies, saved on `localStorage`

#### 3. useTheme
to manage theme, like example change language between English and Bahasa Indonesia

## #Components
I made a several re-usable components
#### 1.MovieCard
to show card movie
you can use with this props
```
movie: {
    id: number;
    title: string;
    rating: number;
    year: number;
    imageUrl: string;
  };
  addFavourite: (movie: any) => void;
  removeFavourite: (movie: any) => void;
  isLiked: (movie: any) => boolean;
  ```
  
  #### 2.PopupImage
  Defined props
  ```
  src: string;
  isShow: boolean;
  handleToggle: () => void;
  ```
