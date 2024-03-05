import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';


function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'Women Printed Tshirt', 
		price: 899,
		image: 
		'https://assets.ajio.com/medias/sys_master/root/20210521/CbFN/60a6b6c7aeb269a9e3c53e3e/-473Wx593H-410289295-07q-MODEL.jpg',
		description:"Stylish and comfortable girl's t-shirt featuring vibrant floral motifs, perfect for any occasion"
		},
		{ id: 2, 
		name: 'Men Printed Tshirt', 
		price: 799, 
		image: 
'https://www.burgerbaeclothing.com/cdn/shop/files/van-gogh-collection-starry-night-drop-sleeved-tee-t-shirt-burgerbae-1_1100x.jpg?v=1687511870',
description:"Crafted from premium cotton blend fabric, our men's t-shirt offers unbeatable comfort and breathability, making it a versatile essential for any wardrobe"
		},
		{ id: 3, 
		name: 'New Balance Sneakers Women', 
		price: 8999, 
		image: 
        'https://rukminim2.flixcart.com/image/850/1000/kziqvm80/shoe/m/n/f/3-wl373aa2-5-new-balance-canyon-violet-original-imagbghmpzxpgurh.jpeg?q=90&crop=false',
		description:"Crafted with premium materials, our women's sneakers combine style and durability for all-day comfort and fashion-forward appeal."
		},
        { id: 4, 
            name: 'New Balance Sneakers Men', 
            price: 8999,
            image: 
            'https://assets.ajio.com/medias/sys_master/root/20230523/NKRF/646ccefed55b7d0c63d2028f/-473Wx593H-469473103-tancream-MODEL.jpg',
			description:"Our NW Balance Sneakers are crafted from premium materials, offering durability and style for every step."
        },
        { id: 5, 
            name: 'Backpack Men', 
            price: 1699,
            image: 
            'https://images.dailyobjects.com/marche/product-images/1201/all-ivory-pedal-daypack-images/All-Ivory-Pedal-Daypack.png?tr=cm-pad_resize,v-2,w-600,h-558,dpr-2,q-60',
			description:"Men's Backpack: Durable and spacious, featuring multiple compartments and adjustable straps for optimal comfort and functionality."

        },
        { id: 6, 
            name: 'Backpack Women', 
            price: 1699,
            image: 
            'https://www.samsonite.in/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Samsonite/default/dw5f84b968/images/mobile-solution-eco-essential-bp-v2-antimicrobial/hi-res/145843_1041_hi-res_FRONT34_1.JPG?sw=500&sh=750',
			description:"Women's Backpack: Stylish and practical, with a sleek design, ample storage, and padded straps for comfortable wear throughout the day."
        },
        { id: 7, 
            name: 'Boat Rockerzz 450 Headphones', 
            price: 4599,
            image: 
            'https://www.boat-lifestyle.com/cdn/shop/products/e5881832-36f8-4c1c-a767-10f2c2a55a02_288x.png?v=1685708053',
			description:"Headphones: High-fidelity audio experience with cushioned ear cups and adjustable headband for maximum comfort during extended listening sessions."
        },
        { id: 8, 
            name: 'Chandbali Earrings', 
            price: 599,
            image: 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNKdDDwSu0OQZ5m9I4505hJ-5ZJkkyidE5A&usqp=CAU',
			description:"Chandbali Earrings: Exquisite traditional earrings crafted with intricate detailing and adorned with shimmering stones, perfect for adding a touch of elegance to any outfit."
        },
        { id: 9, 
            name: 'Joker and Witch Watches', 
            price: 999,
            image: 
            'https://www.jiomart.com/images/product/original/rvbz0x3ryc/joker-witch-white-analog-watch-for-women-product-images-rvbz0x3ryc-0-202305301121.jpg?im=Resize=(500,630)',
			description:"This Watch Combines Elegance With An Air Of Vintage. Featuring A 32 Mm Case With A White Dial And Chrono Details That Add An Edge To The Overall Look. This Timepiece Is Chic Minimal And Perfect For Your Everyday Looks."
        },
		{ id: 10, 
            name: 'Ray Ban Sunglasses Women', 
            price: 2999,
            image: 
            'https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/805289439899_render1-min.png',
			description:"Raymond Women's Sunglasses: Stylish and sophisticated eyewear from Raymond, crafted to complement women's fashion with elegant designs and superior sun protection."
        },
		{ id: 11, 
            name: 'Mac Book Air M1', 
            price: 95000,
            image: 
            'https://d1sh47nr05d35z.cloudfront.net/catalog/product/a/p/apple_13-inch_macbook_air_2020_m1_256gb_ssd_spacegrey-1.jpg?width=265&height=265&store=default&image-type=image',
			description:"Air Book - Lightweight and ultra-portable laptop perfect for on-the-go productivity."
        },
		{ id: 12, 
            name: 'Handbag', 
            price: 3999,
            image: 
            'https://imagescdn.thecollective.in/img/app/product/8/898448-10978066.jpg?w=900&auto=format',
			description:"Zara Handbag - Stylish and versatile handbag crafted with premium materials, featuring spacious compartments and chic design details",
		}
		

		





        
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;