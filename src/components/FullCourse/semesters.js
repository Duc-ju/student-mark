const semesters = {
    cntt: [
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
            name: "Kì thực tập",
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
    ],
    ttdpt: [
        {
            id: 1,
            name: "Học kì 1 năm 1",
            subjects: [
                {
                    id: 1,
                    code: "INT1154",
                    name: "Tin học cơ sở 1",
                    credit: 2
                },
                {
                    id: 2,
                    code: "MUL12117",
                    name: "Lịch sử văn minh thế giới",
                    credit: 2
                },
                {
                    id: 3,
                    code: "BSA1221",
                    name: "Pháp luật đại cương",
                    credit: 2
                },
                {
                    id: 4,
                    code: "BAS1150",
                    name: "Triết học Mác - Lênin",
                    credit: 3
                },
                {
                    id: 5,
                    code: "MUL1240",
                    name: "Cơ sở văn hóa Việt Nam",
                    credit: 2
                }
            ]
        },
        {
            id: 2,
            name: "Học kì 2 năm 1",
            subjects: [
                {
                    id: 1,
                    code: "BAS1143",
                    name: "Tiếng Anh A11/A21",
                    credit: 3
                },
                {
                    id: 2,
                    code: "MUL1313",
                    name: "Kỹ thuật nhiếp ảnh",
                    credit: 3
                },
                {
                    id: 3,
                    code: "MUL1395",
                    name: "Nhập môn PR",
                    credit: 2
                },
                {
                    id: 4,
                    code: "MUL1320",
                    name: "Nhập môn đa phương tiện",
                    credit: 2
                },
                {
                    id: 5,
                    code: "MAR1322",
                    name: "Marketing căn bản",
                    credit: 3
                },
                {
                    id: 6,
                    code: "BAS1152",
                    name: "Chủ nghĩa xã hội khoa học",
                    credit: 2
                },
                {
                    id: 7,
                    code: "MUL1391",
                    name: "Nhập môn truyền thông",
                    credit: 2
                },
                {
                    id: 8,
                    code: "BAS1151",
                    name: "Kinh tế chính trị Mác- Lênin",
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
                    code: "MUL13119",
                    name: "Các loại hình báo chí hiện đại",
                    credit: 2
                },
                {
                    id: 2,
                    code: "MUL13147",
                    name: "Quay phim",
                    credit: 3
                },
                {
                    id: 3,
                    code: "BAS1144",
                    name: "Tiếng Anh A22",
                    credit: 4
                },
                {
                    id: 4,
                    code: "MUL13120",
                    name: "Nhập môn quảng cáo",
                    credit: 2
                },
                {
                    id: 5,
                    code: "BAS1122",
                    name: "Tư tưởng Hồ Chí Minh",
                    credit: 2
                },
                {
                    id: 6,
                    code: "MUL1426",
                    name: "Thiết kế đồ họa cơ bản",
                    credit: 3
                },
                {
                    id: 7,
                    code: "MUL1289",
                    name: "Phương pháp nghiên cứu truyền thông",
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
                    code: "MUL14114",
                    name: "Ứng dụng thiết kế web",
                    credit: 3
                },
                {
                    id: 2,
                    code: "MUL14113",
                    name: "Ứng dụng đồ họa đa phương tiện",
                    credit: 3
                },
                {
                    id: 3,
                    code: "MUL1393",
                    name: "Truyền thông xã hội",
                    credit: 2
                },
                {
                    id: 4,
                    code: "BAS1145",
                    name: "Tiếng Anh B11",
                    credit: 3
                },
                {
                    id: 5,
                    code: "MUL1392M",
                    name: "Lý thuyết truyền thông",
                    credit: 2
                },
                {
                    id: 6,
                    code: "BAS1153",
                    name: "Lịch sử Đảng cộng sản Việt Nam",
                    credit: 2
                },
                {
                    id: 7,
                    code: "MUL13118",
                    name: "Pháp luật và đạo đức truyền thông",
                    credit: 2
                }
            ]
        },
        {
            id: 5,
            name: "Học kì 1 năm 3",
            subjects: [
                {
                    id: 1,
                    code: "MUL1463",
                    name: "Thiết kế ấn phẩm báo chí",
                    credit: 2
                },
                {
                    id: 2,
                    code: "MUL1399",
                    name: "Phỏng vấn: Lý thuyết và thực hành",
                    credit: 2
                },
                {
                    id: 3,
                    code: "MUL13102",
                    name: "Rủi ro và xử lý khủng hoảng truyền thông",
                    credit: 2
                },
                {
                    id: 4,
                    code: "MUL1396",
                    name: "Viết đa phương tiện",
                    credit: 2
                },
                {
                    id: 5,
                    code: "MUL1394",
                    name: "Truyền thông và dư luận xã hội",
                    credit: 2
                },
                {
                    id: 6,
                    code: "BAS1146",
                    name: "Tiếng Anh B12",
                    credit: 4
                },
                {
                    id: 7,
                    code: "MUL1397",
                    name: "Biên tập văn bản báo chí",
                    credit: 2
                },
                {
                    id: 8,
                    code: "MUL1398",
                    name: "Nghệ thuật kể chuyện đa phương tiện",
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
                    code: "SKD1108",
                    name: "Phương pháp luận nghiên cứu khoa học",
                    credit: 2
                },
                {
                    id: 2,
                    code: "MUL14110",
                    name: "Quảng cáo đa phương tiện",
                    credit: 2
                },
                {
                    id: 3,
                    code: "MUL14108",
                    name: "Lý thuyết PR",
                    credit: 2
                },
                {
                    id: 4,
                    code: "MUL14106",
                    name: "Báo chí đa phương tiện",
                    credit: 3
                },
                {
                    id: 5,
                    code: "MUL13101",
                    name: "Báo chí điều tra",
                    credit: 2
                },
                {
                    id: 6,
                    code: "MUL13100",
                    name: "Diễn thuyết trước công chúng",
                    credit: 2
                },
                {
                    id: 7,
                    code: "MUL14115",
                    name: "Ứng dụng sản xuất audio và video",
                    credit: 3
                },
                {
                    id: 8,
                    code: "MUL1423",
                    name: "Kịch bản đa phương tiện",
                    credit: 2
                }
            ]
        },
        {
            id: 7,
            name: "Học kì 1 năm 4",
            subjects: [
                {
                    id: 1,
                    code: "MUL14109",
                    name: "PR: Chiến lược và thực hành",
                    credit: 3
                },
                {
                    id: 2,
                    code: "MUL14107",
                    name: "Báo chí dữ liệu",
                    credit: 2
                },
                {
                    id: 3,
                    code: "MUL13104",
                    name: "Kinh tế truyền thông",
                    credit: 2
                },
                {
                    id: 4,
                    code: "MUL14111",
                    name: "Quảng cáo: Chiến lược và thực hành",
                    credit: 3
                },
                {
                    id: 5,
                    code: "MUL14112",
                    name: "Quản lý dự án truyền thông",
                    credit: 2
                },
                {
                    id: 6,
                    code: "MUL14116",
                    name: "Thực hành chuyên sâu",
                    credit: 4
                }
            ]
        },
        {
            id: 8,
            name: "Học kì 2 năm 4",
            subjects: []
        },
        {
            id: 9,
            name: "Kì thực tập",
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
            name: "Khoá luận tốt nghiệp",
            subjects: [
                {
                    id: 1,
                    code: "DATN",
                    name: "Bảo vệ khoá luận tốt nghiệp",
                    credit: 6
                }
            ]
        }
    ]
};

export default semesters;
