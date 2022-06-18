const semesters = [
    {
        id: 1,
        name: "Học kì 1 năm 1",
        subjects: [
            {
                id: 1,
                code: "BAS1111",
                name: "Những nguyên lý cơ bản của Chủ nghĩa Mác Lênin 1",
                credit: 2
            },
            {
                id: 2,
                code: "BAS1203",
                name: "Giải tích 1",
                credit: 3
            },
            {
                id: 3,
                code: "INT1154",
                name: "Tin học cơ sở 1",
                credit: 2
            },
            {
                id: 4,
                code: "BAS1201",
                name: "Đại số",
                credit: 3
            }
        ]
    },
    {
        id: 2,
        name: "Học kì 2 năm 1",
        subjects: [
            {
                id: 1,
                code: "INT1155",
                name: "Tin học cơ sở 2",
                credit: 2
            },
            {
                id: 2,
                code: "BAS1204",
                name: "Giải tích 2",
                credit: 3
            },
            {
                id: 3,
                code: "BAS1224",
                name: "Vật lý 1 và thí nghiệm",
                credit: 4
            },
            {
                id: 4,
                code: "BAS1143",
                name: "Tiếng Anh A11/A21",
                credit: 3
            },
            {
                id: 5,
                code: "BAS1112",
                name: "Những nguyên lý cơ bản của Chủ nghĩa Mác Lênin 2",
                credit: 3
            },
            {
                id: 6,
                code: "BAS1226",
                name: "Xác suất thống kê",
                credit: 2
            }
        ]
    },
    {
        id: 3,
        name: "Học kì 1 năm 2",
        subjects: [
            {
                id: 1,
                code: "BAS1122",
                name: "Tư tưởng Hồ Chí Minh",
                credit: 2
            },
            {
                id: 2,
                code: "BAS1144",
                name: "Tiếng Anh A12/A22",
                credit: 4
            },
            {
                id: 3,
                code: "INT1339",
                name: "Ngôn ngữ lập trình C++",
                credit: 3
            },
            {
                id: 4,
                code: "INT1358",
                name: "Toán rời rạc 1",
                credit: 3
            },
            {
                id: 5,
                code: "BAS1227",
                name: "Vật lý 3 và thí nghiệm",
                credit: 4
            },
            {
                id: 6,
                code: "ELE1433",
                name: "Kỹ thuật số",
                credit: 2
            }
        ]
    },
    {
        id: 4,
        name: "Học kì 2 năm 2",
        subjects: [
            {
                id: 1,
                code: "BAS1102",
                name: "Đường lối cách mạng của Đảng cộng sản Việt Nam",
                credit: 3
            },
            {
                id: 2,
                code: "BAS1145",
                name: "Tiếng Anh A21/B11",
                credit: 3
            },
            {
                id: 3,
                code: "ELE1330",
                name: "Xử lý tín hiệu số",
                credit: 2
            },
            {
                id: 4,
                code: "INT1323",
                name: "Kiến trúc máy tính",
                credit: 2
            },
            {
                id: 5,
                code: "INT1306",
                name: "Cấu trúc dữ liệu và giải thuật",
                credit: 3
            },
            {
                id: 6,
                code: "ELE1319",
                name: "Lý thuyết thông tin",
                credit: 3
            },
            {
                id: 7,
                code: "INT1359",
                name: "Toán rời rạc 2",
                credit: 3
            }
        ]
    },
    {
        id: 5,
        name: "Học kì 1 năm 3",
        subjects: [
            {
                id: 1,
                code: "BAS1146",
                name: "Tiếng Anh A22/B12",
                credit: 4
            },
            {
                id: 2,
                code: "INT1330",
                name: "Kỹ thuật vi xử lý",
                credit: 3
            },
            {
                id: 3,
                code: "INT1332",
                name: "Lập trình hướng đối tượng",
                credit: 3
            },
            {
                id: 4,
                code: "INT1319",
                name: "Hệ điều hành",
                credit: 3
            },
            {
                id: 5,
                code: "INT1313",
                name: "Cơ sở dữ liệu",
                credit: 3
            },
            {
                id: 6,
                code: "SKD1108",
                name: "Phương pháp luận nghiên cứu khoa học",
                credit: 2
            }
        ]
    },
    {
        id: 6,
        name: "Học kì 2 năm 3",
        subjects: [
            {
                id: 1,
                code: "INT1341",
                name: "Nhập môn trí tuệ nhân tạo",
                credit: 3
            },
            {
                id: 2,
                code: "INT1303",
                name: "An toàn và bảo mật hệ thống thông tin",
                credit: 3
            },
            {
                id: 3,
                code: "INT1328",
                name: "Kỹ thuật đồ họa",
                credit: 2
            },
            {
                id: 4,
                code: "INT1336",
                name: "Mạng máy tính",
                credit: 3
            },
            {
                id: 5,
                code: "INT1362",
                name: "Xử lý ảnh",
                credit: 2
            },
            {
                id: 6,
                code: "INT1340",
                name: "Nhập môn công nghệ phần mềm",
                credit: 3
            }
        ]
    },
    {
        id: 7,
        name: "Học kì 1 năm 4",
        subjects: [
            {
                id: 1,
                code: "INT1450",
                name: "Quản lý dự án phần mềm",
                credit: 2
            },
            {
                id: 2,
                code: "INT1404",
                name: "Các hệ thống dựa trên tri thức",
                credit: 3
            },
            {
                id: 3,
                code: "INT1342M",
                name: "Phân tích và thiết kế hệ thống thông tin",
                credit: 3
            },
            {
                id: 4,
                code: "INT1433",
                name: "Lập trình mạng",
                credit: 3
            },
            {
                id: 5,
                code: "INT1414",
                name: "Cơ sở dữ liệu phân tán",
                credit: 2
            },
            {
                id: 6,
                code: "INT1434",
                name: "Lập trình Web",
                credit: 3
            }
        ]
    },
    {
        id: 8,
        name: "Học kì 2 năm 4",
        subjects: [
            {
                id: 1,
                code: "INT1418",
                name: "Hệ cơ sở dữ liệu đa phương tiện",
                credit: 3
            },
            {
                id: 2,
                code: "INT1446",
                name: "Phát triển hệ thống thương mại điện tử",
                credit: 3
            },
            {
                id: 3,
                code: "INT1409",
                name: "Chuyên đề hệ thống thông tin",
                credit: 1
            },
            {
                id: 4,
                code: "INT1445",
                name: "Phát triển hệ thống thông tin quản lý",
                credit: 3
            },
            {
                id: 5,
                code: "INT1405",
                name: "Các hệ thống phân tán",
                credit: 3
            },
            {
                id: 6,
                code: "INT1422",
                name: "Kho dữ liệu và khai phá dữ liệu",
                credit: 3
            }
        ]
    },
    {
        id: 9,
        name: "Kì thực tập hè",
        subjects: [
            {
                id: 1,
                code: "TTTN",
                name: "Thực tập tốt nghiệp",
                credit: 4
            }
        ]
    },
    {
        id: 10,
        name: "Đồ án tốt nghiệp",
        subjects: [
            {
                id: 1,
                code: "DATN",
                name: "Bảo vệ đồ án tốt nghiệp",
                credit: 6
            }
        ]
    }
];

export default semesters;
