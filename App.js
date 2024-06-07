import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "orange",
        padding: "10px 20px",
        borderBottom: "1px solid #e0e0e0",
        borderRadius: "2px ",
      }}
    >
      <div>
        <img
          style={{ width: "100px" }}
          src="data:image/png;base64,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"
          alt="restaurantLogo"
        />
      </div>
      <nav className="nav-items" style={{ display: "flex" }}>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyleType: "none",
            padding: 0,
          }}
        >
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Home
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            About Us
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Services
          </li>
        </ul>
      </nav>
    </div>
  );
};
// const cloudinaryImageId = "2b4f62d606d1b2bfba9ba9e5386fabb7";
// const imageLink = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

const data = [
  {
    info: {
      id: "89916",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "RDC",
      areaName: "Raj Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-rdc-raj-nagar-noida-89916",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "686202",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Raj Nagar",
      areaName: "VVIP Style Mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.1,
      parentId: "61955",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chinese-wok-raj-nagar-vvip-style-mall-noida-686202",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "57276",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "A Block",
      areaName: "Raj Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-a-block-raj-nagar-noida-57276",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "626553",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "mkbgksj3ou3gsc7znsdd",
      locality: "sector 10",
      areaName: "Raj Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-sector-10-raj-nagar-noida-626553",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "340382",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_340382.JPG",
      locality: "P And T Colony",
      areaName: "Raj Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-p-and-t-colony-raj-nagar-noida-340382",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "710824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "KHASRA",
      areaName: "RAJ NAGAR EXTENSION",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.7,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-khasra-raj-nagar-extension-noida-710824",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "543898",
      name: "Wow! China",
      cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
      locality: "NH 58 Bypass",
      areaName: "KW6 Mall",
      costForTwo: "₹400 for two",
      cuisines: [
        "Tibetan",
        "Chinese",
        "Asian",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.8,
      parentId: "226836",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-china-nh-58-bypass-kw6-mall-noida-543898",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "686203",
      name: "Big Bowl",
      cloudinaryImageId: "c99751d54e4e1847186c62b3309c1327",
      locality: "Raj Nagar",
      areaName: "VVIP Style Mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "434792",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹169",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/big-bowl-raj-nagar-vvip-style-mall-noida-686203",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "686204",
      name: "The Momo Co.",
      cloudinaryImageId: "9668a5819fcba35364dcff30d5f5cfbb",
      locality: "Raj Nagar",
      areaName: "VVIP Style Mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.1,
      parentId: "11442",
      avgRatingString: "4.1",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-momo-co-raj-nagar-vvip-style-mall-noida-686204",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "294330",
      name: "Biryani Badshah",
      cloudinaryImageId: "gci4gld8mo6ttfzmjk6b",
      locality: "Sector 16 C",
      areaName: "Gaur City 2",
      costForTwo: "₹350 for two",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "Andhra",
        "South Indian",
        "North Indian",
        "Mughlai",
        "Kebabs",
      ],
      avgRating: 4.3,
      parentId: "10703",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biryani-badshah-sector-16-c-gaur-city-2-noida-294330",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "58915",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "P & T Colony",
      areaName: "Raj Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 00:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-p-and-t-colony-raj-nagar-noida-58915",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "831280",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId: "dce75bf0d124fb1fa390597828d8ffd9",
      locality: "RDC",
      areaName: "Raj Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 4.2,
      parentId: "306806",
      avgRatingString: "4.2",
      totalRatingsString: "9",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-rdc-raj-nagar-noida-831280",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750375",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750375.JPG",
      locality: "RDC?Concrete (India) Pvt Ltd",
      areaName: "Raj Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.2,
      parentId: "444382",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-rdc-concrete-india-pvt-ltd-raj-nagar-noida-750375",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "681341",
      name: "GLOBO Ice Creams Of The World",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/04968076-c09c-464e-90e2-e0dd29ea1dfa_681341.JPG",
      locality: "RDC?Concrete (India) Pvt Ltd",
      areaName: "Raj Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts", "Bakery"],
      avgRating: 4.7,
      parentId: "22303",
      avgRatingString: "4.7",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/globo-ice-creams-of-the-world-rdc-concrete-india-pvt-ltd-raj-nagar-noida-681341",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "408980",
      name: "Nirula's",
      cloudinaryImageId: "a66fa8f5befa65947d9e20f29a863ce0",
      locality: "Kw Srishti",
      areaName: "Raj Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Ice Cream", "Pizzas", "Fast Food"],
      avgRating: 4.3,
      parentId: "1738",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 04:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nirulas-kw-srishti-raj-nagar-noida-408980",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "469268",
      name: "ZAZA Mughal Biryani",
      cloudinaryImageId: "e12f3a72ab92442dc088f803a04d4293",
      locality: "RDC?Concrete (India) Pvt Ltd",
      areaName: "Raj Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "North Indian", "Awadhi"],
      avgRating: 4.2,
      parentId: "22473",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/zaza-mughal-biryani-rdc-concrete-india-pvt-ltd-raj-nagar-noida-469268",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "692205",
      name: "BOOM Sandwich - Sub of India",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/1392089b-bfd1-4ac2-90f5-cdb914aa163a_692205.JPG",
      locality: "RDC?Concrete (India) Pvt Ltd",
      areaName: "Raj Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Snacks", "Indian", "Desserts"],
      avgRating: 4.5,
      parentId: "401169",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-rdc-concrete-india-pvt-ltd-raj-nagar-noida-692205",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "381722",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
      locality: "RDC",
      areaName: "Raj Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      avgRating: 4.4,
      veg: true,
      parentId: "236673",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-13 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-rdc-raj-nagar-noida-381722",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "469270",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
      locality: "RDC Concrete (India) Pvt Ltd",
      areaName: "Raj Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Punjabi", "Home Food"],
      avgRating: 4.5,
      parentId: "22452",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-rdc-concrete-india-pvt-ltd-raj-nagar-noida-469270",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "543897",
      name: "Wow! Momo",
      cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
      locality: "Food Court Area",
      areaName: "KW Delhi 6",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "1776",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-07 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Momos.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Momos.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-food-court-area-kw-delhi-6-noida-543897",
      type: "WEBLINK",
    },
  },
];

const ResturantCard = ({ resData }) => {
  const { name, areaName, cloudinaryImageId, cuisines } = resData?.info;
  return (
    <div
      className="resturant-card"
      style={{
        height: "300px",
        width: "150px",
        margin: "2px",
        padding: "2px",
        border: "1px solid black",
      }}
    >
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        style={{ width: "100px" }}
        alt=""
      />

      <h2>{name}</h2>
      <h2>{areaName}</h2>
      <h2>{cuisines}</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div
      className="body"
      style={{
        backgroundColor: "orange",
        height: "90%",
        margin: "2px",
        borderRadius: "5px ",
      }}
    >
      <div>Search</div>
      <div className="restuant-card" style={{ display: "flex" }}>
        {data.map((resturant) => (
          <ResturantCard resData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: "wrap",
        padding: "2px",
        margin: "2px",
        justifyContent: "space-around",
      }}
    >
      <p>Copyright @ Shubham </p>
      <p>Links </p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div
      className="app"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
