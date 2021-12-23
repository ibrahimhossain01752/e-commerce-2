const initState = {
    products: [
        {
            id:1,
            name:'Summer Seal',
            image:'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0aWN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            price:20,
            discount:2,
            discountPrice:20 - 2 / 100 * 20,
            quantity:1

        
        },
        {
            id:2,
            name:'Summer Seal',
            image:'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            price:22,
            discount:2,
            discountPrice:22 - 2 / 100 * 22,
            quantity:1

        
        },
        {
            id:3,
            name:'Summer Seal',
            image:'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvc21ldGljfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            price:24,
            discount:2,
            discountPrice:24 - 2 / 100 * 24,
            quantity:1

        
        },
        {
            id:4,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/beauty-with-perfume-picture-id110938438?b=1&k=20&m=110938438&s=170667a&w=0&h=KgH-j0JoudhcUpaKRd6jlaDcFT8ddLumbxEeIroTgeI=',
            price:26,
            discount:2,
            discountPrice:26 - 2 / 100 * 26,
            quantity:1

        
        },
        {
            id:5,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/flat-lay-of-cosmetics-serum-and-and-laboratory-glassware-with-fresh-picture-id1336084356?b=1&k=20&m=1336084356&s=170667a&w=0&h=9wjXvQV4hQQzUBBHAOR_AC232REUtVcTfwsdwS6Crvo=',
            price:28,
            discount:2,
            discountPrice:28 - 2 / 100 * 28,
            quantity:1

        
        },
        {
            id:6,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/beauty-brushes-picture-id1161219638?b=1&k=20&m=1161219638&s=170667a&w=0&h=kdmXnmCENS_FU_yLhIe7bLjzAF_zWufVJKYCLHGzEQc=',
            price:30,
            discount:2,
            discountPrice:30 - 2 / 100 * 30,
            quantity:1

        
        },
        {
            id:7,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/makeup-cosmetics-on-red-geometric-background-with-red-cubes-picture-id1288322605?b=1&k=20&m=1288322605&s=170667a&w=0&h=ap3F0laRcH058aAaQ0JV2Kjo7jsxN7COvw3frW0pfBw=',
            price:32,
            discount:2,
            discountPrice:32 - 2 / 100 * 32,
            quantity:1

        
        },
        {
            id:8,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/make-up-cosmetics-products-against-pink-color-background-picture-id1221677097?b=1&k=20&m=1221677097&s=170667a&w=0&h=F53wAlLL7Q8syWNmaJq7c5afMzOFOdPY5aPh1H3bcpM=',
            price:34,
            discount:2,
            discountPrice:34 - 2 / 100 * 34,
            quantity:1

        
        },
        {
            id:9,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/ecofriendly-tubes-and-bottles-from-the-natural-wood-and-brown-glass-picture-id1302853050?b=1&k=20&m=1302853050&s=170667a&w=0&h=Dc7B_CVGMNzcN4KRfnFSvBV4oyl2dIQOwggvqS_zpD4=',
            price:36,
            discount:2,
            discountPrice:36 - 2 / 100 * 36,
            quantity:1

        
        },
        {
            id:10,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves-picture-id1136422297?b=1&k=20&m=1136422297&s=170667a&w=0&h=ewKG0s13zHQeZsE8zzoNRmnb84bTMX7RJ1PXt9ACQIg=',
            price:38,
            discount:2,
            discountPrice:38 - 2 / 100 * 38,
            quantity:1

        
        },
        {
            id:11,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/stone-podium-display-on-white-background-round-beige-frosted-glass-picture-id1287407716?b=1&k=20&m=1287407716&s=170667a&w=0&h=5HLKwNhNUGImG7zDQP83nbdEQzAmhBOW0yYFAWI_Tas=',
            price:40,
            discount:2,
            discountPrice:40 - 2 / 100 * 40,
            quantity:1

        
        },
        {
            id:12,
            name:'Summer Seal',
            image:'https://media.istockphoto.com/photos/background-wood-pedestal-podium-on-natural-palm-leaf-shadow-pastel-picture-id1288472948?b=1&k=20&m=1288472948&s=170667a&w=0&h=ib2m4LUBhFh2n3sLxM_ccs4-Ns5jotG9lEz8iYbO4gI=',
            price:42,
            discount:2,
            discountPrice:42 - 2 / 100 * 42,
            quantity:1

        
        }
    ]
}

const ProductReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state;
    }

}
export default ProductReducer;