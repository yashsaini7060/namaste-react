import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <svg viewBox="0 0 559 825" height="49" width="34" fill="#fc8019">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
          fill="url(#paint0_linear_19447_66107)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_19447_66107"
            x1="445.629"
            y1="63.8626"
            x2="160.773"
            y2="537.598"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF993A"></stop>
            <stop offset="1" stopColor="#F15700"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="nav-items">
      <ul>
        <li>Search</li>
        <li>Offers</li>
        <li>Help</li>
        <li>Signin</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const SliderCard = (props) => (
  <div className="slider-card">
    <img src={props.imgLink} className="slidercard-img" />
  </div>
);

const Slider = () => (
  <div className="slider">
    <SliderCard imgLink="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" />
    <SliderCard imgLink="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" />
    <SliderCard imgLink="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt" />
    <SliderCard imgLink="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tgnvusbs3fnzz7xupeno" />
  </div>
);

const DishesNav = () => (
  <div className="dishes-bar">
    <h3 className="restro-count">527 restaurents</h3>
    <div className="left-filter">
      <ul>
        <li>Relevance</li>
        <li>Delivery Time</li>
        <li>Rating</li>
        <li>Cost: Low To High</li>
        <li>Cost: High To Low</li>
        <li>Filter</li>
      </ul>
    </div>
  </div>
);

const resList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "486966",
        name: "Annapurna Bhojanalya",
        uuid: "c9f07920-885b-4fef-ad1c-4d75c03109f7",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "fnxxohtkdy4ke4nrz76w",
        cuisines: ["Indian"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        slaString: "40 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "annapurna-bhojnalya-raj-nagar-raj-nagar-5",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "RDC",
        parentId: 34010,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5000,
          message: "",
          title: "Delivery Charge",
          amount: "5000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6659102~p=1~eid=00000187-ea5c-b88b-276f-a78a00b4014e~49301",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              description: "",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=486966",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 40,
          minDeliveryTime: 40,
          maxDeliveryTime: 40,
          lastMileTravel: 0,
          lastMileDistance: 5.5,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.8",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "450169",
        name: "Chaayos Chai+Snacks=Relax",
        uuid: "f81f0354-a3f8-4444-8f4f-4285ca706c05",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "0a6f66d75eb042123e34d89bef7189ce",
        cuisines: [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets",
        ],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "chaayos-meri-wali-chai-raj-nagar-ck-ghaziabad-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "sector 23",
        parentId: 281782,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "40% off",
          shortDescriptionList: [
            {
              meta: "40% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹80 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "40% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹80 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5000,
          message: "",
          title: "Delivery Charge",
          amount: "5000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=450169",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 0,
          lastMileDistance: 5,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "340382",
        name: "KFC",
        uuid: "d75d6afe-e4e5-4eb2-b68a-1594e7e3a1d7",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "kfc-raj-nagar-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "P And T Colony",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "40% off",
          shortDescriptionList: [
            {
              meta: "40% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹80 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "40% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹80 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5600,
          message: "",
          title: "Delivery Charge",
          amount: "5600",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.2 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=340382",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 0,
          lastMileDistance: 6.2,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "108285",
        name: "Jain sudh bhojanlya",
        uuid: "2effd43d-5a07-42e2-921c-e5e1ba6f1b68",
        city: "24",
        area: "Ambedkar Road",
        totalRatingsString: "",
        cloudinaryImageId: "pbkuyaz5amimbumil6mb",
        cuisines: ["Jain", "Chinese", "North Indian"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        slaString: "39 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "jain-sudh-bhojanlya-ghaziabad-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "Navyug Market",
        parentId: 108998,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "10% off",
          shortDescriptionList: [
            {
              meta: "10% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "10% off up to ₹40 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "10% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "10% off up to ₹40 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 6200,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 6200,
          message: "",
          title: "Delivery Charge",
          amount: "6200",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6662861~p=2~eid=00000187-ea5c-b88b-276f-a78b00b40201~49301",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "7.3 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=108285",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 39,
          minDeliveryTime: 39,
          maxDeliveryTime: 39,
          lastMileTravel: 0,
          lastMileDistance: 7.3,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "366256",
        name: "Mithaas",
        uuid: "2ac64028-c5eb-4635-a760-3469c00a8d84",
        city: "24",
        area: "Kavi Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "tffkatewxt8zcieztpzx",
        cuisines: ["Sweets", "Snacks", "Bakery"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        slaString: "32 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "mithaas-sweets-&-restaurant-raj-nagar-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "C Block",
        parentId: 4150,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "25% off",
          shortDescriptionList: [
            {
              meta: "25% off | Use SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "25% off | Use code SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "25% OFF",
          shortDescriptionList: [
            {
              meta: "Use SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "25% off | Use code SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5000,
          message: "",
          title: "Delivery Charge",
          amount: "5000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=366256",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 32,
          minDeliveryTime: 32,
          maxDeliveryTime: 32,
          lastMileTravel: 0,
          lastMileDistance: 5.5,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "335364",
        name: "Natural Ice Cream",
        uuid: "e2bf3e54-79fe-4fa1-ba8a-fdb8794d4a24",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "xqdk9hq4prt7eupdxegd",
        cuisines: ["Ice Cream", "Desserts"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "natural-ice-cream-rajnagar-fc-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "RDC Concrete (India) Pvt Ltd",
        parentId: 2093,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "20% off",
          shortDescriptionList: [
            {
              meta: "20% off | Use SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "20% OFF",
          shortDescriptionList: [
            {
              meta: "Use SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5600,
          message: "",
          title: "Delivery Charge",
          amount: "5600",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.1 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=335364",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 0,
          lastMileDistance: 6.1,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.4",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "634719",
        name: "Goila Butter Chicken",
        uuid: "202ba172-b5b3-4dea-bf59-c7c8e4af5e03",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "5e19832da032dd69547565e27104706f",
        cuisines: ["North Indian", "Mughlai", "Biryani", "Indian"],
        tags: [],
        costForTwo: 60000,
        costForTwoString: "₹600 FOR TWO",
        deliveryTime: 44,
        minDeliveryTime: 44,
        maxDeliveryTime: 44,
        slaString: "44 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "goila-butter-chicken-ghaziabad-tahsil-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "P And T Colony",
        parentId: 322587,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5600,
          message: "",
          title: "Delivery Charge",
          amount: "5600",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6679201~p=3~eid=00000187-ea5c-b88b-276f-a78c00b40349~49301",
        badges: {
          imageBased: [
            {
              imageId: "v1669879258/GFF_logo_new_xbycg6.png",
              description: "gourmet",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.2 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=634719",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 44,
          minDeliveryTime: 44,
          maxDeliveryTime: 44,
          lastMileTravel: 0,
          lastMileDistance: 6.2,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.9",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "57276",
        name: "Burger King",
        uuid: "be238855-525b-4056-aa93-deaf4d343468",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "28fb13049b4e55297bb3f703cde63c35",
        cuisines: ["Burgers", "American"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 43,
        minDeliveryTime: 43,
        maxDeliveryTime: 43,
        slaString: "43 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant:
            "burger-king-raj-nagar-district-center-ghaziabad-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "A Block",
        parentId: 166,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5600,
          message: "",
          title: "Delivery Charge",
          amount: "5600",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.3 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=57276",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 43,
          minDeliveryTime: 43,
          maxDeliveryTime: 43,
          lastMileTravel: 0,
          lastMileDistance: 6.3,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "346573",
        name: "Apni Veg Rasoi",
        uuid: "43085f61-e3b0-4f40-8ef4-51a749e27a33",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "oimdnn8q65veuj9d3vx6",
        cuisines: ["North Indian", "Chinese"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        slaString: "40 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "homely-bowl-raj-nagar-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "RDC Concrete (India) Pvt Ltd",
        parentId: 22092,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5000,
          message: "",
          title: "Delivery Charge",
          amount: "5000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              description: "",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=346573",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 40,
          minDeliveryTime: 40,
          maxDeliveryTime: 40,
          lastMileTravel: 0,
          lastMileDistance: 5.5,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "416439",
        name: "Biryani By Kilo",
        uuid: "0b3413e5-aa7a-48a8-8caf-96500a963d33",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "hw3onzfyd6hyv88ccsgm",
        cuisines: [
          "Biryani",
          "Hyderabadi",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Desserts",
        ],
        tags: [],
        costForTwo: 60000,
        costForTwoString: "₹600 FOR TWO",
        deliveryTime: 56,
        minDeliveryTime: 56,
        maxDeliveryTime: 56,
        slaString: "56 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "biryani-by-kilo-raj-nagar-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "Gaur Mall",
        parentId: 130,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FLAT125 off",
          shortDescriptionList: [
            {
              meta: "FLAT125 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT125 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT125 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5600,
          message: "",
          title: "Delivery Charge",
          amount: "5600",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6677115~p=4~eid=00000187-ea5c-b88b-276f-a78d00b4043f~49301",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.2 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=416439",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 56,
          minDeliveryTime: 56,
          maxDeliveryTime: 56,
          lastMileTravel: 0,
          lastMileDistance: 6.2,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.1",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "320854",
        name: "Bikaner Express",
        uuid: "a1c703ce-52b7-420f-bb38-1d768fd00c19",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "tkak8edvopolrr4yrajj",
        cuisines: ["North Indian", "Chinese"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 43,
        minDeliveryTime: 43,
        maxDeliveryTime: 43,
        slaString: "43 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "bikanerwala-express-raj-nagar-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "sector 10",
        parentId: 45851,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5000,
          message: "",
          title: "Delivery Charge",
          amount: "5000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=320854",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 43,
          minDeliveryTime: 43,
          maxDeliveryTime: 43,
          lastMileTravel: 0,
          lastMileDistance: 5.5,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.4",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "116198",
        name: "Nathu's Sweets",
        uuid: "4c08ea9a-a5b6-439b-a177-8db48b795851",
        city: "24",
        area: "Dubai Mall",
        totalRatingsString: "",
        cloudinaryImageId: "mlredl6hkkqh33tcg9ks",
        cuisines: ["North Indian", "South Indian", "Sweets"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 61,
        minDeliveryTime: 61,
        maxDeliveryTime: 61,
        slaString: "61 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "nathus-sweets-raj-nagar-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "Raj Nagar",
        parentId: 1945,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "20% off",
          shortDescriptionList: [
            {
              meta: "20% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "20% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5600,
          message: "",
          title: "Delivery Charge",
          amount: "5600",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.1 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=116198",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 61,
          minDeliveryTime: 61,
          maxDeliveryTime: 61,
          lastMileTravel: 0,
          lastMileDistance: 6.1,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "417720",
        name: "Cake'O'Clocks",
        uuid: "918edb7d-492d-44f4-8565-f287ba46749e",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "ahkwxupjwxg109xvkktc",
        cuisines: ["Bakery"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 43,
        minDeliveryTime: 43,
        maxDeliveryTime: 43,
        slaString: "43 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "cake-o-clocks-test_noida-test_noida",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "sector 10",
        parentId: 55230,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use GUILTFREE",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹150 | Use code GUILTFREE",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use GUILTFREE",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹150 | Use code GUILTFREE",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5000,
          message: "",
          title: "Delivery Charge",
          amount: "5000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6623122~p=5~eid=00000187-ea5c-b88b-276f-a78e00b4050a~49301",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5.6 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=417720",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 43,
          minDeliveryTime: 43,
          maxDeliveryTime: 43,
          lastMileTravel: 0,
          lastMileDistance: 5.6,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "306919",
        name: "Ghar ka tadka",
        uuid: "553ee669-8ae9-4c14-8675-7e9d8fa0527c",
        city: "24",
        area: "Raj Nagar",
        totalRatingsString: "",
        cloudinaryImageId: "zoi1spzrb0htmaxzcckb",
        cuisines: ["Indian", "North Indian", "Chinese", "Home Food"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        slaString: "40 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "ghar-ka-tadka-raj-nagar-raj-nagar",
          city: "Noida",
        },
        cityState: "24",
        address: "",
        locality: "sector 10",
        parentId: 8838,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5000,
              message: "",
            },
            {
              name: "BASE_TIME",
              fee: 0,
              message: "",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5000,
          message: "",
          title: "Delivery Charge",
          amount: "5000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              description: "",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        cta: {
          link: "swiggy://menu?restaurant_id=306919",
          type: "DEEPLINK",
          text: "RESTAURANT_MENU",
        },
        sla: {
          restaurantId: "",
          deliveryTime: 40,
          minDeliveryTime: 40,
          maxDeliveryTime: 40,
          lastMileTravel: 0,
          lastMileDistance: 5.5,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];

const DishesCard = (props) => {

  const {resData} = props;
  const data = resData?.data?.data;
  const {cloudinaryImageId, name, cuisines, avgRating,slaString,costForTwoString} = data;
 

  return (
    <div className="dishes-card">
      <div className="dishes-image">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          className="card-img"
        />
      </div>
      <h4 className="res-head">{name}</h4>
      <p className="res-des">{cuisines[0]}</p>
      <div className="res-details">
        <div className="rating">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABBElEQVR4nOXSvUoDURCG4Rj0AiwUIVcg6UXBW0hhp73gDwRbLZQgaGqr9KK1hd6FqcULEBH86YQI6iMLCy5xQ3biphA/OHDgzHlfmJlK5V8FxzgaF3zJdxbHITjPCM7Khs+ilxG8Ya5MwYGf2S8LPom7HME9piKgGtbQxCE6uEDX4HTTmk76p5kyanmCW+XlJk/QLlHQHtSmHXz8AvyJ1rBZrOB1BHgPq0UHvoCHAPwJy4XgGUkjIGiE4KlgLyDYHUVwFRBcRuETeA4IXlCNCOo5kEespye596ceEWz27fYpZjLv0zjBe6ZuIyLYTj9dJys7ZJ2TmiRbEUEV80X6Gqn9m/kCKVxjI19mbBIAAAAASUVORK5CYII="
            className="star"
          />
          <p>{avgRating}</p>
        </div>
        <div>•</div>
        <div className="time">{slaString}</div>
        <div>•</div>
        <div className="two-price">{costForTwoString}</div>
      </div>
    </div>
  );
};

const DishesContainer = () => {
  return (
    <div className="dishes-continer">
      <DishesNav />
      <div className="cards-container">
        {resList.map(restaurant => <DishesCard key={restaurant.data.data.id} resData={restaurant}/>)}
      </div>
    </div>
  );
};

const AppLayout = () => (
  <>
    <Header />
    <Slider />
    <DishesContainer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
