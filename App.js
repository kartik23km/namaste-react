import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {}, "hello")

// const jsxHeading = <h1>Heading</h1>

// const Title = () => {
//     return <h2>This is title</h2>
// }

// const HeadingComponent = () => {
//     return (

//         <div><Title /><h1>Heading from component</h1></div>
//     )
// }

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg" />
        </div>
        <div className="nav-container">
            <ul className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>

            </ul>
        </div>
    </div>
)



const ResturantCard = (props) => {
    const { resData } = props
    const { name, avgRating, cloudinaryImageId, cuisines, costForTwo, sla } = resData?.info

    return (
        <div className="res-card">
            <img className="res-card-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

const obj = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "11106",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/c1f6ee28-bdf4-41c9-8c35-13711eff62f0_11106.jpg",
            "locality": "Prem Nagar",
            "areaName": "Tilak Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "9.3K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-22 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6853bce9-2d45-4876-9909-ad5dcbae1685"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/delhi/pizza-hut-prem-nagar-tilak-nagar-rest11106",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "254117",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/199a7c7b-d3f0-4d1e-a1cd-60be14ec5020_254117.JPG",
            "locality": "Ashok Nagar",
            "areaName": "Tilak Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "28K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-22 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/bolt%206.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/bolt%206.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹117"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6853bce9-2d45-4876-9909-ad5dcbae1685"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/delhi/mcdonalds-ashok-nagar-tilak-nagar-rest254117",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "545333",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "J Block",
            "areaName": "Rajouri Garden",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "61955",
            "avgRatingString": "4.1",
            "totalRatingsString": "2.2K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-22 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6853bce9-2d45-4876-9909-ad5dcbae1685"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/delhi/chinese-wok-j-block-rajouri-garden-rest545333",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "752532",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/203616e4-97f0-485e-a6ad-a845a97693c0_752532.JPG",
            "locality": "Rajouri Garden Market",
            "areaName": "Rajouri Garden",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Rolls & Wraps",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.5K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-22 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6853bce9-2d45-4876-9909-ad5dcbae1685"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/delhi/kfc-market-rajouri-garden-rest752532",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "138434",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/97c2765d-4ea8-45dc-bc36-7360a70d140d_138434.jpg",
            "locality": "Ashok Nagar",
            "areaName": "Ashok Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.4,
            "parentId": "166",
            "avgRatingString": "4.4",
            "totalRatingsString": "27K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-22 06:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/bolt%206.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/bolt%206.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6853bce9-2d45-4876-9909-ad5dcbae1685"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/delhi/burger-king-ashok-nagar-rest138434",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "157773",
            "name": "The Good Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/68ef0fa4-e8ff-4bc7-89c2-6f85b92a521c_157773.jpg",
            "locality": "Shivaji place",
            "areaName": "Rajouri Garden",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "7918",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.7K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-21 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6853bce9-2d45-4876-9909-ad5dcbae1685"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/delhi/the-good-bowl-shivaji-place-rajouri-garden-rest157773",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }]

const Body = () => {
    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                {
                    obj.map((res) => <ResturantCard key={res.info.id} resData={res} />)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)