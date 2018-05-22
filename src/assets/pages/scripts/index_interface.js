var resData = [
    { "id": "1", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "BOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000012300.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "2", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "COW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000023000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "3", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "DOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000016000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "4", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "GOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000004400.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "5", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "HOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000010900.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "6", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "KOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000008400.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "7", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "LOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000007100.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "8", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "MOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000011500.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "9", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "QOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000005200.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "10", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "UOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4N", "coun": "THB", "price": "000000800.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "11", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "VOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4N", "coun": "THB", "price": "000001600.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "12", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "YOW16B  ", "ow_rt": "1", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000016000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "13", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "BRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000019000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "14", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "CRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000035600.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "15", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "DRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000026000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "16", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "GRT3M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000006600.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "17", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "HRT6M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000016000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "18", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "KRT6M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000013000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "19", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "LRT3M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000011000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "20", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "MRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000017500.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "21", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "QRT3M16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000008000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "22", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "URT1M16B", "ow_rt": "2", "routing": "0001", "fn": "4N", "coun": "THB", "price": "000001100.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "23", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "VRT1M16B", "ow_rt": "2", "routing": "0001", "fn": "4N", "coun": "THB", "price": "000002200.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" },
    { "id": "24", "hs": "TH01", "tariff": "TPFG", "s_addr": "BKK", "d_addr": "KMG", "s_con": "TH", "d_con": "CN", "fare": "YRT1Y16B", "ow_rt": "2", "routing": "0001", "fn": "4M", "coun": "THB", "price": "000026000.", "s_time": "1-Jan-17", "e_time": "31-Dec-17" }
]

var interfaces = {
    searchFreight: function (data, fn) {
        var res = {
            data: [],
            total: 1
        }
        for (var i = 0; i < resData.length; i++) {
            var tt = resData[i];
            if (data.tariff) {
                if (data.tariff != tt.tariff) continue;
            }
            if (data.fare) {
                if (data.fare != tt.fare) continue;
            }
            if (tt) res.data.push(tt);
        }
        if (data.pageCount != -1 && res.data.length > data.pageCount) {
            res.total = res.data.length / data.pageCount;
            if (res.data.length % data.pageCount > 0) {
                res.total++;
            }
            for (var i = 0; i < data.pageCount; i++) {
                res.data[i] = res.data[(data.currPage - 1) * data.pageCount + i];
            }
            res.data.length = data.pageCount;
            for (var i = res.data.length; i > 0; i--) {
                if (!res.data[i]) {
                    res.data.length = i;
                }
            }
        }
        fn(res);
    },

}