export interface NavItemData {
    label: string;
    url: string;
}

export interface NavSection {
    title?: string;
    items: NavItemData[];
}

export interface NavMenuData {
    id: string;
    label: string; // The trigger label (e.g., "Store", "Mac")
    sections: NavSection[];
}

export const globalNavData: NavMenuData[] = [
    {
        id: 'store',
        label: 'Store',
        sections: [
            {
                title: 'Shop',
                items: [
                    { label: 'Shop the Latest', url: '/store' },
                    { label: 'Mac', url: '/store/buy-mac' },
                    { label: 'iPad', url: '/store/buy-ipad' },
                    { label: 'iPhone', url: '/store/buy-iphone' },
                    { label: 'Apple Watch', url: '/store/buy-watch' },
                    { label: 'Apple Vision Pro', url: '/store/buy-vision' },
                    { label: 'Accessories', url: '/store/accessories' },
                ]
            },
            {
                title: 'Quick Links',
                items: [
                    { label: 'Find a Store', url: '/retail' },
                    { label: 'Order Status', url: '/store/order-status' },
                    { label: 'Apple Trade In', url: '/store/trade-in' },
                    { label: 'Financing', url: '/store/financing' },
                ]
            },
            {
                title: 'Shop Special Stores',
                items: [
                    { label: 'Certified Refurbished', url: '/store/refurbished' },
                    { label: 'Education', url: '/store/education' },
                    { label: 'Business', url: '/store/business' },
                    { label: 'Veterans and Military', url: '/store/veterans' },
                    { label: 'Government', url: '/store/government' },
                ]
            }
        ]
    },
    {
        id: 'mac',
        label: 'Mac',
        sections: [
            {
                title: 'Explore Mac',
                items: [
                    { label: 'Explore All Mac', url: '/mac' },
                    { label: 'MacBook Air', url: '/mac/macbook-air' },
                    { label: 'MacBook Pro', url: '/mac/macbook-pro' },
                    { label: 'iMac', url: '/mac/imac' },
                    { label: 'Mac mini', url: '/mac/mac-mini' },
                    { label: 'Mac Studio', url: '/mac/mac-studio' },
                    { label: 'Mac Pro', url: '/mac/mac-pro' },
                    { label: 'Displays', url: '/mac/displays' },
                ]
            },
            {
                title: 'Shop Mac',
                items: [
                    { label: 'Shop Mac', url: '/store/buy-mac' },
                    { label: 'Mac Accessories', url: '/mac/accessories' },
                    { label: 'Apple Trade In', url: '/store/trade-in' },
                    { label: 'Financing', url: '/store/financing' },
                ]
            },
            {
                title: 'More from Mac',
                items: [
                    { label: 'Mac Support', url: '/support/mac' },
                    { label: 'AppleCare+ for Mac', url: '/support/products/mac' },
                    { label: 'macOS Sequoia', url: '/macos/sequoia' },
                    { label: 'Apple Intelligence', url: '/apple-intelligence' },
                    { label: 'Apps by Apple', url: '/apps' },
                ]
            }
        ]
    },
    // We can populate others similarly; keeping it brief for demonstration of the pattern
    {
        id: 'ipad',
        label: 'iPad',
        sections: [
            {
                title: 'Explore iPad',
                items: [
                    { label: 'Explore All iPad', url: '/ipad' },
                    { label: 'iPad Pro', url: '/ipad/ipad-pro' },
                    { label: 'iPad Air', url: '/ipad/ipad-air' },
                    { label: 'iPad', url: '/ipad/ipad' },
                    { label: 'iPad mini', url: '/ipad/ipad-mini' },
                    { label: 'Apple Pencil', url: '/ipad/apple-pencil' },
                    { label: 'Keyboards', url: '/ipad/keyboards' },
                ]
            },
            {
                title: 'Shop iPad',
                items: [
                    { label: 'Shop iPad', url: '/store/buy-ipad' },
                    { label: 'iPad Accessories', url: '/ipad/accessories' },
                ]
            }
        ]
    },
    {
        id: 'iphone',
        label: 'iPhone',
        sections: [
            {
                title: 'Explore iPhone',
                items: [
                    { label: 'Explore All iPhone', url: '/iphone' },
                    { label: 'iPhone 16 Pro', url: '/iphone/iphone-16-pro' },
                    { label: 'iPhone 16', url: '/iphone/iphone-16' },
                    { label: 'iPhone 15', url: '/iphone/iphone-15' },
                    { label: 'iPhone 14', url: '/iphone/iphone-14' },
                    { label: 'iPhone SE', url: '/iphone/iphone-se' },
                ]
            },
            {
                title: 'Shop iPhone',
                items: [
                    { label: 'Shop iPhone', url: '/store/buy-iphone' },
                    { label: 'iPhone Accessories', url: '/iphone/accessories' },
                ]
            }
        ]
    },
    {
        id: 'watch',
        label: 'Watch',
        sections: [
            {
                title: 'Explore Watch',
                items: [
                    { label: 'Explore All Apple Watch', url: '/watch' },
                    { label: 'Apple Watch Series 10', url: '/watch/apple-watch-series-10' },
                    { label: 'Apple Watch Ultra 2', url: '/watch/apple-watch-ultra-2' },
                    { label: 'Apple Watch SE', url: '/watch/apple-watch-se' },
                    { label: 'Apple Watch Nike', url: '/watch/apple-watch-nike' },
                    { label: 'Apple Watch Hermès', url: '/watch/apple-watch-hermes' },
                ]
            },
            {
                title: 'Shop Watch',
                items: [
                    { label: 'Shop Apple Watch', url: '/store/buy-watch' },
                    { label: 'Apple Watch Studio', url: '/store/studio/apple-watch' },
                    { label: 'Apple Watch Bands', url: '/store/watch/bands' },
                    { label: 'Apple Watch Accessories', url: '/store/watch/accessories' },
                ]
            }
        ]
    },
    {
        id: 'vision',
        label: 'Vision',
        sections: [
            { title: 'Explore Vision', items: [{ label: 'Apple Vision Pro', url: '/apple-vision-pro' }] },
            { title: 'Shop Vision', items: [{ label: 'Shop Apple Vision Pro', url: '/store/buy-vision' }] }
        ]
    },
    {
        id: 'airpods',
        label: 'AirPods',
        sections: [
            {
                title: 'Explore AirPods',
                items: [
                    { label: 'Explore All AirPods', url: '/airpods' },
                    { label: 'AirPods Pro 2', url: '/airpods/airpods-pro-2' },
                    { label: 'AirPods 4', url: '/airpods/airpods-4' },
                    { label: 'AirPods Max', url: '/airpods/airpods-max' },
                ]
            }
        ]
    },
    {
        id: 'tv-home',
        label: 'TV & Home',
        sections: [
            {
                title: 'Explore TV & Home',
                items: [
                    { label: 'Explore TV & Home', url: '/tv-home' },
                    { label: 'Apple TV 4K', url: '/tv-home/apple-tv-4k' },
                    { label: 'HomePod', url: '/tv-home/homepod' },
                    { label: 'HomePod mini', url: '/tv-home/homepod-mini' },
                ]
            }
        ]
    },
    {
        id: 'entertainment',
        label: 'Entertainment',
        sections: [
            {
                title: 'Explore Entertainment',
                items: [
                    { label: 'Apple One', url: '/apple-one' },
                    { label: 'Apple TV+', url: '/apple-tv-plus' },
                    { label: 'Apple Music', url: '/apple-music' },
                    { label: 'Apple Arcade', url: '/apple-arcade' },
                    { label: 'Apple Fitness+', url: '/apple-fitness-plus' },
                ]
            }
        ]
    },
    {
        id: 'accessories',
        label: 'Accessories',
        sections: [
            {
                title: 'Shop Accessories',
                items: [
                    { label: 'Shop All Accessories', url: '/store/accessories' },
                    { label: 'Mac', url: '/store/mac/accessories' },
                    { label: 'iPad', url: '/store/ipad/accessories' },
                    { label: 'iPhone', url: '/store/iphone/accessories' },
                    { label: 'Apple Watch', url: '/store/watch/accessories' },
                ]
            }
        ]
    },
    {
        id: 'support',
        label: 'Support',
        sections: [
            {
                title: 'Explore Support',
                items: [
                    { label: 'iPhone', url: '/support/iphone' },
                    { label: 'Mac', url: '/support/mac' },
                    { label: 'iPad', url: '/support/ipad' },
                    { label: 'Watch', url: '/support/watch' },
                ]
            }
        ]
    }
];
