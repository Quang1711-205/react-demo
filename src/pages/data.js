export const products = [
  {
    id: 1,
    name: "Áo thun nam Classic Fit cao cấp",
    price: "320.000đ",
    originalPrice: "400.000đ",
    discount: "-20%",
    rating: "4.5",
    reviewCount: 120,
    category: 'quần áo',
    image: "https://picsum.photos/600/600",
    thumbnails: [
      "https://picsum.photos/600/600",
      "https://picsum.photos/601/600",
      "https://picsum.photos/600/601",
      "https://picsum.photos/601/601"
    ],
    isFeatured: true,
    isFlashSale: true,
    flashSalePrice: "299.000đ",
    hotSelling: true,
    soldCount: 89,
    // Tùy chọn
    options: {
      colors: [
        { id: 1, name: "Đen", value: "black", available: true },
        { id: 2, name: "Xanh", value: "blue", available: true },
        { id: 3, name: "Đỏ", value: "red", available: true },
        { id: 4, name: "Xanh lá", value: "green", available: true }
      ],
      sizes: [
        { id: 1, name: "S", available: true },
        { id: 2, name: "M", available: true },
        { id: 3, name: "L", available: true },
        { id: 4, name: "XL", available: true },
        { id: 5, name: "XXL", available: false }
      ]
    },
    // Thông tin chi tiết
    details: {
      description: "Áo thun nam Classic Fit được thiết kế với phong cách đơn giản nhưng tinh tế, phù hợp cho mọi dịp, từ đi làm, đi chơi đến các hoạt động thể thao nhẹ. Với chất liệu 100% cotton cao cấp, áo mang lại cảm giác mềm mại, thoáng khí và thấm hút mồ hôi tốt, giúp bạn luôn cảm thấy thoải mái khi mặc.",
      specifications: [
        { label: "Chất liệu", value: "100% Cotton" },
        { label: "Form dáng", value: "Classic Fit" },
        { label: "Màu sắc", value: "Đen, Xanh, Đỏ, Xanh lá" },
        { label: "Kích thước", value: "S, M, L, XL, XXL" },
        { label: "Xuất xứ", value: "Việt Nam" }
      ],
      usageGuide: [
        "Giặt máy ở chế độ nhẹ với nước dưới 30°C.",
        "Không sử dụng chất tẩy mạnh.",
        "Phơi trong bóng râm để giữ màu sắc bền lâu.",
        "Ủi ở nhiệt độ trung bình."
      ]
    },
    // Thông tin người bán
    seller: {
      name: "SAHADOR - Tổng Kho Sỉ Giày Đẹp",
      logo: "https://via.placeholder.com/50",
      lastOnline: "38 Phút Trước",
      metrics: {
        reviews: "46,8k",
        responseRate: "92%",
        products: "161",
        responseTime: "trong vòng giờ",
        joinTime: "6 năm trước",
        followers: "91,3k"
      }
    },
    // Thông tin thêm
    breadcrumb: [
      { name: "Trang chủ", link: "/" },
      { name: "Sản phẩm", link: "/san-pham" },
      { name: "Áo thun", link: "/san-pham/ao-thun" },
      { name: "Áo thun nam Classic Fit cao cấp", link: null }
    ]
  },
  {
    id: 2,
    name: "Váy liền thân thời trang công sở",
    price: "499.000đ",
    originalPrice: "550.000đ",
    discount: "-10%",
    rating: "4.8",
    reviewCount: 78,
    category: 'quần áo',
    image: "https://picsum.photos/600/601",
    thumbnails: [
      "https://picsum.photos/600/601",
      "https://picsum.photos/602/601",
      "https://picsum.photos/600/602",
      "https://picsum.photos/602/602"
    ],
    isFeatured: true,
    isFlashSale: true,
    flashSalePrice: "379.000đ",
    hotSelling: true,
    soldCount: 45,
    // Tùy chọn
    options: {
      colors: [
        { id: 1, name: "Đen", value: "black", available: true },
        { id: 2, name: "Xanh đậm", value: "darkblue", available: true },
        { id: 3, name: "Đỏ", value: "red", available: true }
      ],
      sizes: [
        { id: 1, name: "S", available: true },
        { id: 2, name: "M", available: true },
        { id: 3, name: "L", available: true }
      ]
    },
    // Thông tin chi tiết
    details: {
      description: "Váy liền thân công sở thiết kế thanh lịch, sang trọng với form dáng ôm nhẹ, tôn dáng người mặc. Chất liệu vải cao cấp giúp thoáng khí, không nhăn và dễ chăm sóc, phù hợp cho môi trường văn phòng và các cuộc gặp gỡ quan trọng.",
      specifications: [
        { label: "Chất liệu", value: "65% Polyester, 35% Cotton" },
        { label: "Form dáng", value: "A-line" },
        { label: "Màu sắc", value: "Đen, Xanh đậm, Đỏ" },
        { label: "Kích thước", value: "S, M, L" },
        { label: "Xuất xứ", value: "Việt Nam" }
      ],
      usageGuide: [
        "Giặt tay hoặc giặt máy ở chế độ nhẹ.",
        "Không sử dụng chất tẩy mạnh.",
        "Phơi trong bóng râm.",
        "Ủi ở nhiệt độ thấp hoặc trung bình."
      ]
    },
    // Thông tin người bán
    seller: {
      name: "MintStyle - Thời Trang Nữ",
      logo: "https://via.placeholder.com/50",
      lastOnline: "15 Phút Trước",
      metrics: {
        reviews: "32,4k",
        responseRate: "95%",
        products: "245",
        responseTime: "trong vòng giờ",
        joinTime: "4 năm trước",
        followers: "76,5k"
      }
    },
    // Thông tin thêm
    breadcrumb: [
      { name: "Trang chủ", link: "/" },
      { name: "Sản phẩm", link: "/san-pham" },
      { name: "Váy", link: "/san-pham/vay" },
      { name: "Váy liền thân thời trang công sở", link: null }
    ]
  },
  {
    id: 3,
    name: "Giày thể thao nam chạy bộ",
    price: "649.000đ",
    originalPrice: "800.000đ",
    discount: "-19%",
    rating: "4.3",
    reviewCount: 215,
    category: 'giày dép',
    image: "https://picsum.photos/602/600",
    thumbnails: [
      "https://picsum.photos/602/600",
      "https://picsum.photos/603/600",
      "https://picsum.photos/602/603",
      "https://picsum.photos/603/603"
    ],
    isFeatured: true,
    isFlashSale: true,
    flashSalePrice: "599.000đ",
    hotSelling: false,
    soldCount: 113,
    // Tùy chọn
    options: {
      colors: [
        { id: 1, name: "Đen", value: "black", available: true },
        { id: 2, name: "Trắng", value: "white", available: true },
        { id: 3, name: "Xanh", value: "blue", available: true }
      ],
      sizes: [
        { id: 1, name: "39", available: true },
        { id: 2, name: "40", available: true },
        { id: 3, name: "41", available: true },
        { id: 4, name: "42", available: true },
        { id: 5, name: "43", available: true }
      ]
    },
    // Thông tin chi tiết
    details: {
      description: "Giày thể thao nam chạy bộ được thiết kế với công nghệ đệm tiên tiến, giúp hấp thụ lực tác động và hỗ trợ chuyển động tự nhiên của bàn chân. Đế cao su bền bỉ, chống trơn trượt, phù hợp cho các hoạt động thể thao và đi lại hàng ngày.",
      specifications: [
        { label: "Chất liệu", value: "Vải lưới, đế cao su" },
        { label: "Công nghệ", value: "Đệm khí, chống sốc" },
        { label: "Màu sắc", value: "Đen, Trắng, Xanh" },
        { label: "Kích thước", value: "39, 40, 41, 42, 43" },
        { label: "Xuất xứ", value: "Việt Nam" }
      ],
      usageGuide: [
        "Tránh ngâm nước quá lâu.",
        "Làm sạch bằng vải ẩm.",
        "Phơi trong bóng râm.",
        "Không đặt gần các nguồn nhiệt cao."
      ]
    },
    // Thông tin người bán
    seller: {
      name: "SportMax - Đồ Thể Thao Chính Hãng",
      logo: "https://via.placeholder.com/50",
      lastOnline: "5 Phút Trước",
      metrics: {
        reviews: "58,2k",
        responseRate: "90%",
        products: "327",
        responseTime: "trong vòng 2 giờ",
        joinTime: "5 năm trước",
        followers: "112,7k"
      }
    },
    // Thông tin thêm
    breadcrumb: [
      { name: "Trang chủ", link: "/" },
      { name: "Sản phẩm", link: "/san-pham" },
      { name: "Giày", link: "/san-pham/giay" },
      { name: "Giày thể thao nam chạy bộ", link: null }
    ]
  },
  {
    id: 4,
    name: "Túi xách nữ thời trang cao cấp",
    price: "899.000đ",
    originalPrice: "1.200.000đ",
    discount: "-25%",
    rating: "4.8",
    reviewCount: 67,
    category: 'túi ví',
    image: "https://picsum.photos/603/601",
    thumbnails: [
      "https://picsum.photos/603/601",
      "https://picsum.photos/604/601",
      "https://picsum.photos/603/604",
      "https://picsum.photos/604/604"
    ],
    isFeatured: true,
    isFlashSale: true,
    flashSalePrice: "884.700đ",
    hotSelling: false,
    limitedQuantity: true,
    remainingQuantity: 4,
    // Tùy chọn
    options: {
      colors: [
        { id: 1, name: "Đen", value: "black", available: true },
        { id: 2, name: "Nâu", value: "brown", available: true },
        { id: 3, name: "Đỏ đô", value: "darkred", available: true }
      ],
      sizes: [
        { id: 1, name: "Nhỏ", available: false },
        { id: 2, name: "Vừa", available: true },
        { id: 3, name: "Lớn", available: true }
      ]
    },
    // Thông tin chi tiết
    details: {
      description: "Túi xách nữ thời trang cao cấp được chế tác từ da thật 100%, với thiết kế thanh lịch và tinh tế. Phù hợp cho cả trang phục công sở và dạo phố, túi có nhiều ngăn tiện lợi và đường may tỉ mỉ, thể hiện sự sang trọng và đẳng cấp.",
      specifications: [
        { label: "Chất liệu", value: "Da bò thật 100%" },
        { label: "Kích thước", value: "Nhỏ: 25x18x10cm, Vừa: 30x22x12cm, Lớn: 35x25x15cm" },
        { label: "Màu sắc", value: "Đen, Nâu, Đỏ đô" },
        { label: "Ngăn", value: "3 ngăn chính, 2 ngăn phụ" },
        { label: "Xuất xứ", value: "Ý" }
      ],
      usageGuide: [
        "Tránh tiếp xúc với nước và hóa chất mạnh.",
        "Lau chùi bằng vải mềm khô hoặc ẩm nhẹ.",
        "Bảo quản trong túi vải khi không sử dụng.",
        "Tránh ánh nắng trực tiếp và nơi ẩm ướt."
      ]
    },
    // Thông tin người bán
    seller: {
      name: "LuxuryBags - Túi Xách Cao Cấp",
      logo: "https://via.placeholder.com/50",
      lastOnline: "25 Phút Trước",
      metrics: {
        reviews: "28,5k",
        responseRate: "97%",
        products: "156",
        responseTime: "trong vòng giờ",
        joinTime: "7 năm trước",
        followers: "85,2k"
      }
    },
    // Thông tin thêm
    breadcrumb: [
      { name: "Trang chủ", link: "/" },
      { name: "Sản phẩm", link: "/san-pham" },
      { name: "Túi xách", link: "/san-pham/tui-xach" },
      { name: "Túi xách nữ thời trang cao cấp", link: null }
    ]
  },
  {
    id: 5,
    name: "Đồng hồ nam thời trang chống nước",
    price: "1.250.000đ",
    originalPrice: "1.630.000đ",
    discount: "-23%",
    rating: "5",
    reviewCount: 93,
    category: 'đồng hồ',
    image: "https://picsum.photos/605/600",
    thumbnails: [
      "https://picsum.photos/605/600",
      "https://picsum.photos/606/600",
      "https://picsum.photos/605/606",
      "https://picsum.photos/606/606"
    ],
    isFeatured: false,
    isFlashSale: true,
    flashSalePrice: "1.215.830đ",
    hotSelling: true,
    soldCount: 56,
    // Tùy chọn
    options: {
      colors: [
        { id: 1, name: "Đen", value: "black", available: true },
        { id: 2, name: "Bạc", value: "silver", available: true },
        { id: 3, name: "Vàng", value: "gold", available: true }
      ],
      sizes: []
    },
    // Thông tin chi tiết
    details: {
      description: "Đồng hồ nam thời trang chống nước có thiết kế sang trọng và hiện đại, kết hợp giữa phong cách thể thao và lịch lãm. Máy Quartz Nhật Bản chính xác cao, kính sapphire chống xước, khả năng chống nước 50m, phù hợp cho cả hoạt động thường ngày và những dịp đặc biệt.",
      specifications: [
        { label: "Loại máy", value: "Quartz Nhật Bản" },
        { label: "Đường kính mặt", value: "42mm" },
        { label: "Độ dày", value: "11mm" },
        { label: "Chất liệu vỏ", value: "Thép không gỉ 316L" },
        { label: "Chất liệu dây", value: "Thép không gỉ/Da thật" },
        { label: "Chống nước", value: "50m" },
        { label: "Xuất xứ", value: "Thụy Sĩ" }
      ],
      usageGuide: [
        "Tránh va đập mạnh.",
        "Không điều chỉnh nút chỉnh giờ khi đang ở dưới nước.",
        "Vệ sinh thường xuyên bằng vải mềm.",
        "Tránh từ trường mạnh."
      ]
    },
    // Thông tin người bán
    seller: {
      name: "WatchElite - Đồng Hồ Chính Hãng",
      logo: "https://via.placeholder.com/50",
      lastOnline: "10 Phút Trước",
      metrics: {
        reviews: "42,3k",
        responseRate: "96%",
        products: "198",
        responseTime: "trong vòng giờ",
        joinTime: "8 năm trước",
        followers: "102,8k"
      }
    },
    // Thông tin thêm
    breadcrumb: [
      { name: "Trang chủ", link: "/" },
      { name: "Sản phẩm", link: "/san-pham" },
      { name: "Đồng hồ", link: "/san-pham/dong-ho" },
      { name: "Đồng hồ nam thời trang chống nước", link: null }
    ]
  },
  {
    id: 6,
    name: "[IN Áo Theo YÊU CẦU] Áo SWEATER NAM NỮ nỉ bông in tên chữ ảnh nội dung theo yêu cầu form unisex hàng may kỹ",
    price: "197.600đ",
    originalPrice: "380.000đ",
    discount: "-48%",
    rating: "4.9",
    reviewCount: 911,
    category: 'quần áo',
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m28egc4eb2r805.webp",
    thumbnails: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m28egc4eb2r805.webp",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2bwkbj6k6nm20.webp",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2bwkbj6k6no18.webp",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2bwkbj6is38b5.webp",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m27nlhdrr838e7.webp"
    ],
    isFeatured: false,
    isFlashSale: true,
    flashSalePrice: "149.999đ",
    hotSelling: true,
    soldCount: 56,
    // Tùy chọn
    options: {
      colors: [
        { id: 1, name: "Đen", value: "black", available: true },
        { id: 2, name: "Xanh", value: "blue", available: true },
        { id: 3, name: "Vàng", value: "gold", available: true }
      ],
      sizes: [
        { id: 1, name: "M", available: true },
        { id: 2, name: "L", available: true },
        { id: 3, name: "XL", available: true },
        { id: 4, name: "XXL", available: false }
      ]
    },
    // Thông tin chi tiết
    details: {
      description: `
----------- ĐẾN VỚI SHOP BẠN ĐƯỢC GÌ ----------------------------

☑️Lên hình mẫu áo cho khách xem trước (free)
☑️Hỗ trợ thiết kế lại ảnh cho khách, nếu ảnh ko đảm bảo chất lượng (free)
☑️Khách duyệt ảnh đến khi nào hài lòng mới in
☑️Khách đừng lo lắng vì ngại làm phiền shop, mà hãy lo lắng sản phẩm có đúng ý mình chưa. 
- Chúng tôi in áo thun bằng công nghệ tiên tiến nhất, đảm bảo sản phẩm lên màu chuẩn, sắc nét, bền và đẹp nhất dù in trên bất kỳ chất liệu vải hay màu sắc nào. (cam kết shop không ngại áo màu gì, vải gì)
`,
      specifications: [
        { label: "Chất liệu", value: "65% Polyester, 35% Cotton" },
        { label: "Form dáng", value: "A-line" },
        { label: "Màu sắc", value: "Đen, Xanh, Vàng" },
        { label: "Kích thước", value: "S, M, L" },
        { label: "Xuất xứ", value: "Việt Nam" }
      ],
      usageGuide: [
        "Giặt máy ở chế độ nhẹ với nước dưới 30°C.",
        "Không sử dụng chất tẩy mạnh.",
        "Phơi trong bóng râm để giữ màu sắc bền lâu.",
        "Ủi ở nhiệt độ trung bình."
      ]
    },
    // Thông tin người bán
    seller: {
      name: "HighX Print",
      logo: "https://down-vn.img.susercontent.com/file/8c4fadd16c3b240738eef16f6e841ca9@resize_w160_nl.webp",
      lastOnline: "10 Phút Trước",
      metrics: {
        reviews: "2,3k",
        responseRate: "96%",
        products: "73",
        responseTime: "trong vòng giờ",
        joinTime: "25 tháng trước",
        followers: "3,6k"
      }
    },
    // Thông tin thêm
    breadcrumb: [
      { name: "Trang chủ", link: "/" },
      { name: "Sản phẩm", link: "/san-pham" },
      { name: "Áo sweater", link: "/san-pham/ao-sweater" },
      { name: "Áo SWEATER NAM NỮ nỉ bông in tên chữ ảnh nội dung theo yêu cầu form unisex hàng may kỹ", link: null }
    ]
  }
];

export default products;