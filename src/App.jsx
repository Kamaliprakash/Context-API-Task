
import React,{useState} from 'react'
import Cards from './components/Cards'
export const UserContext=React.createContext()
function App() {
let[products,setProducts]=useState([
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://images.search.yahoo.com/images/view;_ylt=Awr.1Tjb8N5lWW0JxpeJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzM3NDU2MGY4YTc2ZGFiOTA1NjM4YjgyNzBiYzMwZmZiBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Diphone%2B9%2Bimages%26type%3DE211US885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=736&h=736&imgurl=i.pinimg.com%2F736x%2F84%2Fee%2F48%2F84ee48dbb18b783a991c2a22103b5649.jpg&rurl=https%3A%2F%2Fwww.pinterest.ca%2Fpin%2Fapple-iphone-9-all-colors--767230486498594365%2F&size=28.8KB&p=iphone+9+images&oid=374560f8a76dab905638b8270bc30ffb&fr2=piv-web&fr=mcafee&tt=Apple+iPhone+9+all+colors+%7C+Iphone%2C+Iphone+9%2C+Apple+iphone&b=0&ni=21&no=2&ts=&tab=organic&sigr=9WIT65D0rgpO&sigb=LiZc1hPsHG_T&sigi=HB0s3sfF8lp6&sigt=YXBA4aF_Quqc&.crumb=utOJtwyjHub&fr=mcafee&fr2=piv-web&type=E211US885G0",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://images.search.yahoo.com/images/view;_ylt=AwrgzYVU8d5lkEEJxDGJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzhkNTljOGI1YmJlYjBkYzY5YmZjNjFiMGMxYmI0NzNmBGdwb3MDNARpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Diphone%2Bx%2Bimages%26ei%3DUTF-8%26type%3DE211US885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D4&w=1000&h=1000&imgurl=www.pngarts.com%2Ffiles%2F3%2FIPhone-X-Download-PNG-Image.png&rurl=https%3A%2F%2Fwww.pngarts.com%2Fexplore%2F74756&size=337.5KB&p=iphone+x+images&oid=8d59c8b5bbeb0dc69bfc61b0c1bb473f&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=IPhone+X+Download+PNG+Image+%7C+PNG+Arts&b=0&ni=100&no=4&ts=&tab=organic&sigr=R0JQsxZo1UU2&sigb=GI1qKxoTrQ.x&sigi=R5.bINdlz5tK&sigt=sq3uWPrEdjZC&.crumb=utOJtwyjHub&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211US885G0",
        "images": [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/5/1.jpg",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    }
]



)

  return <>
  
  <UserContext.Provider value={{products,setProducts}}> <Cards/> </UserContext.Provider>
  </>
}

export default App