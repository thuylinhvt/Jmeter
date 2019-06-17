/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 194.0, "minX": 0.0, "maxY": 63023.0, "series": [{"data": [[0.0, 194.0], [0.1, 197.0], [0.2, 197.0], [0.3, 205.0], [0.4, 207.0], [0.5, 217.0], [0.6, 230.0], [0.7, 235.0], [0.8, 239.0], [0.9, 247.0], [1.0, 254.0], [1.1, 254.0], [1.2, 257.0], [1.3, 266.0], [1.4, 267.0], [1.5, 269.0], [1.6, 269.0], [1.7, 271.0], [1.8, 272.0], [1.9, 272.0], [2.0, 276.0], [2.1, 277.0], [2.2, 282.0], [2.3, 284.0], [2.4, 285.0], [2.5, 286.0], [2.6, 289.0], [2.7, 291.0], [2.8, 292.0], [2.9, 293.0], [3.0, 294.0], [3.1, 298.0], [3.2, 302.0], [3.3, 306.0], [3.4, 312.0], [3.5, 316.0], [3.6, 318.0], [3.7, 318.0], [3.8, 318.0], [3.9, 321.0], [4.0, 322.0], [4.1, 323.0], [4.2, 324.0], [4.3, 325.0], [4.4, 327.0], [4.5, 331.0], [4.6, 333.0], [4.7, 333.0], [4.8, 338.0], [4.9, 339.0], [5.0, 339.0], [5.1, 340.0], [5.2, 347.0], [5.3, 347.0], [5.4, 349.0], [5.5, 351.0], [5.6, 358.0], [5.7, 359.0], [5.8, 360.0], [5.9, 360.0], [6.0, 361.0], [6.1, 363.0], [6.2, 366.0], [6.3, 367.0], [6.4, 367.0], [6.5, 370.0], [6.6, 372.0], [6.7, 374.0], [6.8, 376.0], [6.9, 376.0], [7.0, 377.0], [7.1, 379.0], [7.2, 379.0], [7.3, 380.0], [7.4, 381.0], [7.5, 384.0], [7.6, 385.0], [7.7, 385.0], [7.8, 389.0], [7.9, 390.0], [8.0, 390.0], [8.1, 390.0], [8.2, 391.0], [8.3, 392.0], [8.4, 392.0], [8.5, 393.0], [8.6, 394.0], [8.7, 397.0], [8.8, 397.0], [8.9, 398.0], [9.0, 399.0], [9.1, 400.0], [9.2, 401.0], [9.3, 403.0], [9.4, 404.0], [9.5, 405.0], [9.6, 406.0], [9.7, 406.0], [9.8, 406.0], [9.9, 407.0], [10.0, 410.0], [10.1, 418.0], [10.2, 420.0], [10.3, 421.0], [10.4, 423.0], [10.5, 423.0], [10.6, 424.0], [10.7, 425.0], [10.8, 427.0], [10.9, 428.0], [11.0, 429.0], [11.1, 431.0], [11.2, 431.0], [11.3, 433.0], [11.4, 435.0], [11.5, 438.0], [11.6, 440.0], [11.7, 440.0], [11.8, 440.0], [11.9, 442.0], [12.0, 442.0], [12.1, 442.0], [12.2, 443.0], [12.3, 444.0], [12.4, 445.0], [12.5, 447.0], [12.6, 448.0], [12.7, 450.0], [12.8, 450.0], [12.9, 450.0], [13.0, 451.0], [13.1, 452.0], [13.2, 454.0], [13.3, 454.0], [13.4, 457.0], [13.5, 459.0], [13.6, 461.0], [13.7, 462.0], [13.8, 463.0], [13.9, 465.0], [14.0, 466.0], [14.1, 467.0], [14.2, 469.0], [14.3, 471.0], [14.4, 474.0], [14.5, 475.0], [14.6, 476.0], [14.7, 479.0], [14.8, 481.0], [14.9, 481.0], [15.0, 482.0], [15.1, 485.0], [15.2, 488.0], [15.3, 488.0], [15.4, 497.0], [15.5, 498.0], [15.6, 500.0], [15.7, 501.0], [15.8, 501.0], [15.9, 503.0], [16.0, 503.0], [16.1, 505.0], [16.2, 506.0], [16.3, 512.0], [16.4, 514.0], [16.5, 516.0], [16.6, 517.0], [16.7, 518.0], [16.8, 518.0], [16.9, 522.0], [17.0, 522.0], [17.1, 523.0], [17.2, 524.0], [17.3, 524.0], [17.4, 527.0], [17.5, 528.0], [17.6, 529.0], [17.7, 530.0], [17.8, 532.0], [17.9, 534.0], [18.0, 534.0], [18.1, 535.0], [18.2, 537.0], [18.3, 538.0], [18.4, 539.0], [18.5, 539.0], [18.6, 542.0], [18.7, 545.0], [18.8, 545.0], [18.9, 545.0], [19.0, 546.0], [19.1, 553.0], [19.2, 555.0], [19.3, 556.0], [19.4, 560.0], [19.5, 561.0], [19.6, 561.0], [19.7, 562.0], [19.8, 563.0], [19.9, 566.0], [20.0, 566.0], [20.1, 569.0], [20.2, 570.0], [20.3, 570.0], [20.4, 571.0], [20.5, 572.0], [20.6, 573.0], [20.7, 573.0], [20.8, 575.0], [20.9, 575.0], [21.0, 576.0], [21.1, 576.0], [21.2, 576.0], [21.3, 579.0], [21.4, 580.0], [21.5, 582.0], [21.6, 583.0], [21.7, 588.0], [21.8, 590.0], [21.9, 590.0], [22.0, 591.0], [22.1, 592.0], [22.2, 592.0], [22.3, 593.0], [22.4, 593.0], [22.5, 594.0], [22.6, 596.0], [22.7, 596.0], [22.8, 597.0], [22.9, 599.0], [23.0, 601.0], [23.1, 601.0], [23.2, 601.0], [23.3, 602.0], [23.4, 604.0], [23.5, 604.0], [23.6, 605.0], [23.7, 607.0], [23.8, 607.0], [23.9, 609.0], [24.0, 612.0], [24.1, 612.0], [24.2, 614.0], [24.3, 615.0], [24.4, 616.0], [24.5, 616.0], [24.6, 618.0], [24.7, 624.0], [24.8, 625.0], [24.9, 625.0], [25.0, 626.0], [25.1, 626.0], [25.2, 628.0], [25.3, 630.0], [25.4, 631.0], [25.5, 631.0], [25.6, 635.0], [25.7, 635.0], [25.8, 636.0], [25.9, 638.0], [26.0, 640.0], [26.1, 640.0], [26.2, 641.0], [26.3, 643.0], [26.4, 644.0], [26.5, 647.0], [26.6, 648.0], [26.7, 649.0], [26.8, 649.0], [26.9, 652.0], [27.0, 654.0], [27.1, 654.0], [27.2, 654.0], [27.3, 658.0], [27.4, 660.0], [27.5, 661.0], [27.6, 662.0], [27.7, 664.0], [27.8, 664.0], [27.9, 664.0], [28.0, 664.0], [28.1, 665.0], [28.2, 667.0], [28.3, 667.0], [28.4, 668.0], [28.5, 670.0], [28.6, 672.0], [28.7, 675.0], [28.8, 677.0], [28.9, 677.0], [29.0, 679.0], [29.1, 681.0], [29.2, 683.0], [29.3, 683.0], [29.4, 683.0], [29.5, 686.0], [29.6, 689.0], [29.7, 693.0], [29.8, 697.0], [29.9, 698.0], [30.0, 698.0], [30.1, 700.0], [30.2, 702.0], [30.3, 705.0], [30.4, 708.0], [30.5, 710.0], [30.6, 712.0], [30.7, 712.0], [30.8, 716.0], [30.9, 718.0], [31.0, 721.0], [31.1, 722.0], [31.2, 725.0], [31.3, 725.0], [31.4, 726.0], [31.5, 729.0], [31.6, 735.0], [31.7, 738.0], [31.8, 742.0], [31.9, 744.0], [32.0, 750.0], [32.1, 752.0], [32.2, 752.0], [32.3, 754.0], [32.4, 755.0], [32.5, 755.0], [32.6, 755.0], [32.7, 757.0], [32.8, 760.0], [32.9, 761.0], [33.0, 762.0], [33.1, 766.0], [33.2, 768.0], [33.3, 768.0], [33.4, 771.0], [33.5, 771.0], [33.6, 772.0], [33.7, 775.0], [33.8, 778.0], [33.9, 779.0], [34.0, 781.0], [34.1, 781.0], [34.2, 784.0], [34.3, 786.0], [34.4, 789.0], [34.5, 791.0], [34.6, 791.0], [34.7, 794.0], [34.8, 794.0], [34.9, 795.0], [35.0, 798.0], [35.1, 800.0], [35.2, 801.0], [35.3, 802.0], [35.4, 802.0], [35.5, 807.0], [35.6, 810.0], [35.7, 811.0], [35.8, 811.0], [35.9, 812.0], [36.0, 812.0], [36.1, 814.0], [36.2, 814.0], [36.3, 817.0], [36.4, 822.0], [36.5, 822.0], [36.6, 823.0], [36.7, 826.0], [36.8, 827.0], [36.9, 828.0], [37.0, 828.0], [37.1, 832.0], [37.2, 833.0], [37.3, 841.0], [37.4, 841.0], [37.5, 844.0], [37.6, 844.0], [37.7, 848.0], [37.8, 851.0], [37.9, 852.0], [38.0, 853.0], [38.1, 857.0], [38.2, 858.0], [38.3, 858.0], [38.4, 858.0], [38.5, 860.0], [38.6, 862.0], [38.7, 862.0], [38.8, 867.0], [38.9, 870.0], [39.0, 873.0], [39.1, 874.0], [39.2, 875.0], [39.3, 876.0], [39.4, 877.0], [39.5, 880.0], [39.6, 880.0], [39.7, 895.0], [39.8, 896.0], [39.9, 900.0], [40.0, 900.0], [40.1, 902.0], [40.2, 907.0], [40.3, 909.0], [40.4, 910.0], [40.5, 911.0], [40.6, 911.0], [40.7, 912.0], [40.8, 914.0], [40.9, 916.0], [41.0, 918.0], [41.1, 921.0], [41.2, 925.0], [41.3, 925.0], [41.4, 927.0], [41.5, 928.0], [41.6, 936.0], [41.7, 938.0], [41.8, 938.0], [41.9, 940.0], [42.0, 940.0], [42.1, 948.0], [42.2, 950.0], [42.3, 953.0], [42.4, 955.0], [42.5, 961.0], [42.6, 961.0], [42.7, 962.0], [42.8, 967.0], [42.9, 977.0], [43.0, 979.0], [43.1, 985.0], [43.2, 987.0], [43.3, 994.0], [43.4, 997.0], [43.5, 997.0], [43.6, 999.0], [43.7, 1002.0], [43.8, 1003.0], [43.9, 1003.0], [44.0, 1011.0], [44.1, 1012.0], [44.2, 1019.0], [44.3, 1020.0], [44.4, 1023.0], [44.5, 1027.0], [44.6, 1030.0], [44.7, 1033.0], [44.8, 1034.0], [44.9, 1035.0], [45.0, 1036.0], [45.1, 1040.0], [45.2, 1040.0], [45.3, 1041.0], [45.4, 1042.0], [45.5, 1047.0], [45.6, 1050.0], [45.7, 1052.0], [45.8, 1052.0], [45.9, 1077.0], [46.0, 1080.0], [46.1, 1091.0], [46.2, 1093.0], [46.3, 1097.0], [46.4, 1104.0], [46.5, 1113.0], [46.6, 1114.0], [46.7, 1118.0], [46.8, 1129.0], [46.9, 1130.0], [47.0, 1132.0], [47.1, 1142.0], [47.2, 1150.0], [47.3, 1152.0], [47.4, 1152.0], [47.5, 1154.0], [47.6, 1154.0], [47.7, 1156.0], [47.8, 1157.0], [47.9, 1160.0], [48.0, 1161.0], [48.1, 1162.0], [48.2, 1165.0], [48.3, 1167.0], [48.4, 1168.0], [48.5, 1169.0], [48.6, 1174.0], [48.7, 1176.0], [48.8, 1177.0], [48.9, 1177.0], [49.0, 1177.0], [49.1, 1178.0], [49.2, 1178.0], [49.3, 1180.0], [49.4, 1184.0], [49.5, 1199.0], [49.6, 1199.0], [49.7, 1201.0], [49.8, 1212.0], [49.9, 1215.0], [50.0, 1217.0], [50.1, 1223.0], [50.2, 1227.0], [50.3, 1228.0], [50.4, 1229.0], [50.5, 1238.0], [50.6, 1240.0], [50.7, 1246.0], [50.8, 1252.0], [50.9, 1256.0], [51.0, 1258.0], [51.1, 1267.0], [51.2, 1267.0], [51.3, 1268.0], [51.4, 1268.0], [51.5, 1273.0], [51.6, 1276.0], [51.7, 1278.0], [51.8, 1279.0], [51.9, 1281.0], [52.0, 1287.0], [52.1, 1289.0], [52.2, 1296.0], [52.3, 1298.0], [52.4, 1303.0], [52.5, 1306.0], [52.6, 1308.0], [52.7, 1312.0], [52.8, 1313.0], [52.9, 1314.0], [53.0, 1318.0], [53.1, 1319.0], [53.2, 1324.0], [53.3, 1324.0], [53.4, 1325.0], [53.5, 1328.0], [53.6, 1335.0], [53.7, 1341.0], [53.8, 1342.0], [53.9, 1344.0], [54.0, 1348.0], [54.1, 1349.0], [54.2, 1362.0], [54.3, 1363.0], [54.4, 1365.0], [54.5, 1367.0], [54.6, 1372.0], [54.7, 1375.0], [54.8, 1375.0], [54.9, 1378.0], [55.0, 1380.0], [55.1, 1381.0], [55.2, 1388.0], [55.3, 1391.0], [55.4, 1393.0], [55.5, 1395.0], [55.6, 1399.0], [55.7, 1401.0], [55.8, 1403.0], [55.9, 1424.0], [56.0, 1424.0], [56.1, 1425.0], [56.2, 1435.0], [56.3, 1446.0], [56.4, 1449.0], [56.5, 1461.0], [56.6, 1462.0], [56.7, 1462.0], [56.8, 1474.0], [56.9, 1474.0], [57.0, 1479.0], [57.1, 1499.0], [57.2, 1503.0], [57.3, 1503.0], [57.4, 1509.0], [57.5, 1511.0], [57.6, 1528.0], [57.7, 1528.0], [57.8, 1531.0], [57.9, 1535.0], [58.0, 1537.0], [58.1, 1550.0], [58.2, 1552.0], [58.3, 1556.0], [58.4, 1564.0], [58.5, 1574.0], [58.6, 1586.0], [58.7, 1587.0], [58.8, 1589.0], [58.9, 1598.0], [59.0, 1605.0], [59.1, 1610.0], [59.2, 1611.0], [59.3, 1612.0], [59.4, 1616.0], [59.5, 1617.0], [59.6, 1621.0], [59.7, 1633.0], [59.8, 1639.0], [59.9, 1645.0], [60.0, 1647.0], [60.1, 1650.0], [60.2, 1653.0], [60.3, 1657.0], [60.4, 1658.0], [60.5, 1659.0], [60.6, 1661.0], [60.7, 1671.0], [60.8, 1682.0], [60.9, 1697.0], [61.0, 1701.0], [61.1, 1706.0], [61.2, 1708.0], [61.3, 1713.0], [61.4, 1724.0], [61.5, 1728.0], [61.6, 1746.0], [61.7, 1746.0], [61.8, 1750.0], [61.9, 1755.0], [62.0, 1769.0], [62.1, 1770.0], [62.2, 1780.0], [62.3, 1785.0], [62.4, 1790.0], [62.5, 1808.0], [62.6, 1811.0], [62.7, 1813.0], [62.8, 1826.0], [62.9, 1828.0], [63.0, 1835.0], [63.1, 1841.0], [63.2, 1846.0], [63.3, 1860.0], [63.4, 1867.0], [63.5, 1869.0], [63.6, 1876.0], [63.7, 1893.0], [63.8, 1906.0], [63.9, 1912.0], [64.0, 1913.0], [64.1, 1919.0], [64.2, 1920.0], [64.3, 1920.0], [64.4, 1922.0], [64.5, 1930.0], [64.6, 1937.0], [64.7, 1938.0], [64.8, 1941.0], [64.9, 1945.0], [65.0, 1968.0], [65.1, 1970.0], [65.2, 1974.0], [65.3, 1976.0], [65.4, 1981.0], [65.5, 1988.0], [65.6, 1993.0], [65.7, 2001.0], [65.8, 2008.0], [65.9, 2032.0], [66.0, 2033.0], [66.1, 2044.0], [66.2, 2047.0], [66.3, 2055.0], [66.4, 2061.0], [66.5, 2070.0], [66.6, 2082.0], [66.7, 2090.0], [66.8, 2094.0], [66.9, 2107.0], [67.0, 2112.0], [67.1, 2116.0], [67.2, 2116.0], [67.3, 2119.0], [67.4, 2122.0], [67.5, 2128.0], [67.6, 2138.0], [67.7, 2150.0], [67.8, 2151.0], [67.9, 2152.0], [68.0, 2164.0], [68.1, 2170.0], [68.2, 2179.0], [68.3, 2180.0], [68.4, 2189.0], [68.5, 2190.0], [68.6, 2198.0], [68.7, 2200.0], [68.8, 2212.0], [68.9, 2214.0], [69.0, 2216.0], [69.1, 2219.0], [69.2, 2221.0], [69.3, 2226.0], [69.4, 2228.0], [69.5, 2229.0], [69.6, 2231.0], [69.7, 2234.0], [69.8, 2243.0], [69.9, 2245.0], [70.0, 2251.0], [70.1, 2252.0], [70.2, 2268.0], [70.3, 2268.0], [70.4, 2274.0], [70.5, 2326.0], [70.6, 2346.0], [70.7, 2346.0], [70.8, 2349.0], [70.9, 2350.0], [71.0, 2367.0], [71.1, 2368.0], [71.2, 2370.0], [71.3, 2376.0], [71.4, 2378.0], [71.5, 2395.0], [71.6, 2402.0], [71.7, 2402.0], [71.8, 2402.0], [71.9, 2418.0], [72.0, 2419.0], [72.1, 2421.0], [72.2, 2429.0], [72.3, 2442.0], [72.4, 2445.0], [72.5, 2446.0], [72.6, 2460.0], [72.7, 2462.0], [72.8, 2498.0], [72.9, 2501.0], [73.0, 2506.0], [73.1, 2507.0], [73.2, 2508.0], [73.3, 2510.0], [73.4, 2510.0], [73.5, 2517.0], [73.6, 2528.0], [73.7, 2529.0], [73.8, 2540.0], [73.9, 2546.0], [74.0, 2571.0], [74.1, 2573.0], [74.2, 2573.0], [74.3, 2577.0], [74.4, 2606.0], [74.5, 2613.0], [74.6, 2622.0], [74.7, 2628.0], [74.8, 2631.0], [74.9, 2634.0], [75.0, 2646.0], [75.1, 2650.0], [75.2, 2659.0], [75.3, 2668.0], [75.4, 2685.0], [75.5, 2707.0], [75.6, 2708.0], [75.7, 2718.0], [75.8, 2734.0], [75.9, 2734.0], [76.0, 2738.0], [76.1, 2752.0], [76.2, 2768.0], [76.3, 2775.0], [76.4, 2776.0], [76.5, 2780.0], [76.6, 2792.0], [76.7, 2801.0], [76.8, 2803.0], [76.9, 2803.0], [77.0, 2815.0], [77.1, 2818.0], [77.2, 2825.0], [77.3, 2827.0], [77.4, 2830.0], [77.5, 2863.0], [77.6, 2864.0], [77.7, 2874.0], [77.8, 2879.0], [77.9, 2887.0], [78.0, 2899.0], [78.1, 2901.0], [78.2, 2903.0], [78.3, 2907.0], [78.4, 2913.0], [78.5, 2919.0], [78.6, 2920.0], [78.7, 2923.0], [78.8, 2942.0], [78.9, 2943.0], [79.0, 2958.0], [79.1, 2976.0], [79.2, 2980.0], [79.3, 2992.0], [79.4, 3001.0], [79.5, 3009.0], [79.6, 3014.0], [79.7, 3040.0], [79.8, 3043.0], [79.9, 3104.0], [80.0, 3131.0], [80.1, 3145.0], [80.2, 3154.0], [80.3, 3162.0], [80.4, 3171.0], [80.5, 3176.0], [80.6, 3219.0], [80.7, 3223.0], [80.8, 3231.0], [80.9, 3236.0], [81.0, 3249.0], [81.1, 3252.0], [81.2, 3252.0], [81.3, 3255.0], [81.4, 3289.0], [81.5, 3289.0], [81.6, 3306.0], [81.7, 3322.0], [81.8, 3323.0], [81.9, 3341.0], [82.0, 3341.0], [82.1, 3342.0], [82.2, 3354.0], [82.3, 3396.0], [82.4, 3422.0], [82.5, 3425.0], [82.6, 3428.0], [82.7, 3436.0], [82.8, 3444.0], [82.9, 3446.0], [83.0, 3461.0], [83.1, 3465.0], [83.2, 3483.0], [83.3, 3497.0], [83.4, 3514.0], [83.5, 3532.0], [83.6, 3574.0], [83.7, 3579.0], [83.8, 3590.0], [83.9, 3599.0], [84.0, 3628.0], [84.1, 3642.0], [84.2, 3645.0], [84.3, 3648.0], [84.4, 3657.0], [84.5, 3700.0], [84.6, 3702.0], [84.7, 3708.0], [84.8, 3715.0], [84.9, 3738.0], [85.0, 3744.0], [85.1, 3757.0], [85.2, 3790.0], [85.3, 3799.0], [85.4, 3818.0], [85.5, 3832.0], [85.6, 3844.0], [85.7, 3866.0], [85.8, 3905.0], [85.9, 3934.0], [86.0, 3934.0], [86.1, 3951.0], [86.2, 3984.0], [86.3, 3990.0], [86.4, 3996.0], [86.5, 3997.0], [86.6, 4033.0], [86.7, 4046.0], [86.8, 4074.0], [86.9, 4079.0], [87.0, 4084.0], [87.1, 4095.0], [87.2, 4103.0], [87.3, 4116.0], [87.4, 4135.0], [87.5, 4167.0], [87.6, 4176.0], [87.7, 4177.0], [87.8, 4180.0], [87.9, 4198.0], [88.0, 4215.0], [88.1, 4217.0], [88.2, 4241.0], [88.3, 4255.0], [88.4, 4287.0], [88.5, 4289.0], [88.6, 4311.0], [88.7, 4317.0], [88.8, 4361.0], [88.9, 4387.0], [89.0, 4391.0], [89.1, 4406.0], [89.2, 4464.0], [89.3, 4534.0], [89.4, 4555.0], [89.5, 4602.0], [89.6, 4676.0], [89.7, 4701.0], [89.8, 4702.0], [89.9, 4720.0], [90.0, 4733.0], [90.1, 4772.0], [90.2, 4795.0], [90.3, 4841.0], [90.4, 4854.0], [90.5, 4884.0], [90.6, 4896.0], [90.7, 4926.0], [90.8, 4939.0], [90.9, 4947.0], [91.0, 4968.0], [91.1, 4999.0], [91.2, 5050.0], [91.3, 5052.0], [91.4, 5068.0], [91.5, 5084.0], [91.6, 5120.0], [91.7, 5148.0], [91.8, 5198.0], [91.9, 5268.0], [92.0, 5271.0], [92.1, 5275.0], [92.2, 5327.0], [92.3, 5358.0], [92.4, 5391.0], [92.5, 5436.0], [92.6, 5439.0], [92.7, 5459.0], [92.8, 5465.0], [92.9, 5488.0], [93.0, 5510.0], [93.1, 5560.0], [93.2, 5650.0], [93.3, 5668.0], [93.4, 5673.0], [93.5, 5718.0], [93.6, 5793.0], [93.7, 5871.0], [93.8, 5927.0], [93.9, 6056.0], [94.0, 6127.0], [94.1, 6400.0], [94.2, 6500.0], [94.3, 6607.0], [94.4, 6888.0], [94.5, 6917.0], [94.6, 7005.0], [94.7, 7292.0], [94.8, 7329.0], [94.9, 7725.0], [95.0, 7900.0], [95.1, 7931.0], [95.2, 7953.0], [95.3, 8111.0], [95.4, 8166.0], [95.5, 8313.0], [95.6, 8874.0], [95.7, 9085.0], [95.8, 9205.0], [95.9, 9440.0], [96.0, 9485.0], [96.1, 9540.0], [96.2, 9919.0], [96.3, 9955.0], [96.4, 10268.0], [96.5, 10350.0], [96.6, 10467.0], [96.7, 10498.0], [96.8, 10608.0], [96.9, 10652.0], [97.0, 10865.0], [97.1, 10897.0], [97.2, 11204.0], [97.3, 11232.0], [97.4, 12105.0], [97.5, 12653.0], [97.6, 12756.0], [97.7, 12851.0], [97.8, 13049.0], [97.9, 13291.0], [98.0, 13310.0], [98.1, 13319.0], [98.2, 13792.0], [98.3, 14315.0], [98.4, 14356.0], [98.5, 14426.0], [98.6, 14470.0], [98.7, 15585.0], [98.8, 16787.0], [98.9, 16898.0], [99.0, 20937.0], [99.1, 22793.0], [99.2, 25336.0], [99.3, 25823.0], [99.4, 25869.0], [99.5, 29192.0], [99.6, 44446.0], [99.7, 54642.0], [99.8, 55977.0], [99.9, 62816.0], [100.0, 63023.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 91.0, "series": [{"data": [[100.0, 3.0], [35300.0, 1.0], [200.0, 36.0], [55900.0, 1.0], [300.0, 73.0], [400.0, 80.0], [500.0, 91.0], [600.0, 87.0], [700.0, 62.0], [800.0, 59.0], [900.0, 46.0], [1000.0, 34.0], [1100.0, 40.0], [1200.0, 34.0], [1300.0, 40.0], [1400.0, 19.0], [1500.0, 22.0], [1600.0, 24.0], [1700.0, 19.0], [1800.0, 16.0], [1900.0, 23.0], [2000.0, 15.0], [2100.0, 22.0], [2200.0, 22.0], [2300.0, 14.0], [2400.0, 16.0], [2500.0, 18.0], [2600.0, 14.0], [2700.0, 15.0], [2800.0, 17.0], [2900.0, 16.0], [3000.0, 6.0], [3100.0, 9.0], [3200.0, 12.0], [3300.0, 10.0], [3400.0, 12.0], [3500.0, 7.0], [3600.0, 7.0], [3700.0, 11.0], [3800.0, 5.0], [3900.0, 9.0], [4000.0, 8.0], [4300.0, 6.0], [4100.0, 10.0], [4200.0, 7.0], [4400.0, 3.0], [4500.0, 2.0], [4600.0, 3.0], [4800.0, 5.0], [4700.0, 7.0], [5000.0, 5.0], [4900.0, 6.0], [5100.0, 4.0], [5300.0, 4.0], [5200.0, 3.0], [5600.0, 3.0], [5400.0, 6.0], [5500.0, 3.0], [5800.0, 1.0], [5700.0, 3.0], [6100.0, 1.0], [6000.0, 2.0], [5900.0, 1.0], [6600.0, 2.0], [6500.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7900.0, 3.0], [7700.0, 1.0], [8100.0, 2.0], [8000.0, 1.0], [8300.0, 1.0], [8900.0, 1.0], [8800.0, 1.0], [9000.0, 1.0], [9200.0, 1.0], [9400.0, 2.0], [9500.0, 2.0], [9900.0, 2.0], [10200.0, 1.0], [10300.0, 1.0], [10400.0, 3.0], [10600.0, 2.0], [10700.0, 1.0], [10800.0, 2.0], [11200.0, 2.0], [12100.0, 2.0], [12600.0, 1.0], [12700.0, 1.0], [13300.0, 2.0], [13000.0, 1.0], [13200.0, 1.0], [13100.0, 1.0], [12800.0, 1.0], [13700.0, 1.0], [14300.0, 2.0], [13900.0, 1.0], [14400.0, 2.0], [15500.0, 1.0], [16300.0, 1.0], [16700.0, 1.0], [16800.0, 1.0], [20900.0, 1.0], [22700.0, 1.0], [24500.0, 1.0], [25300.0, 1.0], [25800.0, 2.0], [29100.0, 1.0], [44400.0, 1.0], [54600.0, 1.0], [62800.0, 1.0], [63000.0, 1.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 63000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 193.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 527.0, "series": [{"data": [[0.0, 193.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 511.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 527.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.5200000000000005, "minX": 1.55612268E12, "maxY": 5.0, "series": [{"data": [[1.55612292E12, 5.0], [1.5561231E12, 5.0], [1.55612304E12, 5.0], [1.55612274E12, 5.0], [1.55612322E12, 5.0], [1.55612268E12, 4.73529411764706], [1.55612316E12, 5.0], [1.55612286E12, 5.0], [1.5561228E12, 5.0], [1.55612328E12, 4.5200000000000005], [1.55612298E12, 5.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612328E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 622.4444444444446, "minX": 1.0, "maxY": 2506.121724429415, "series": [{"data": [[1.0, 1340.3333333333335], [2.0, 1347.3333333333333], [4.0, 622.4444444444446], [5.0, 2506.121724429415], [3.0, 1088.9166666666667]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}, {"data": [[4.931762794476033, 2442.4849715678315]], "isOverall": false, "label": "BeanShell Sampler-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.55612268E12, "maxY": 278747.3, "series": [{"data": [[1.55612292E12, 278747.3], [1.5561231E12, 97120.1], [1.55612304E12, 59281.1], [1.55612274E12, 11351.7], [1.55612322E12, 185411.1], [1.55612268E12, 171536.8], [1.55612316E12, 105949.2], [1.55612286E12, 140004.3], [1.5561228E12, 191717.6], [1.55612328E12, 126130.0], [1.55612298E12, 185411.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55612292E12, 0.0], [1.5561231E12, 0.0], [1.55612304E12, 0.0], [1.55612274E12, 0.0], [1.55612322E12, 0.0], [1.55612268E12, 0.0], [1.55612316E12, 0.0], [1.55612286E12, 0.0], [1.5561228E12, 0.0], [1.55612328E12, 0.0], [1.55612298E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612328E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1072.7899999999997, "minX": 1.55612268E12, "maxY": 12828.111111111111, "series": [{"data": [[1.55612292E12, 1268.2579185520365], [1.5561231E12, 4039.8571428571436], [1.55612304E12, 6734.765957446809], [1.55612274E12, 12828.111111111111], [1.55612322E12, 2020.6938775510203], [1.55612268E12, 1587.698529411765], [1.55612316E12, 3585.4523809523807], [1.55612286E12, 2649.1081081081074], [1.5561228E12, 3328.5592105263177], [1.55612328E12, 1072.7899999999997], [1.55612298E12, 1781.904761904762]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612328E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.55612268E12, "maxY": 4.9E-324, "series": [{"data": [[1.55612292E12, 0.0], [1.5561231E12, 0.0], [1.55612304E12, 0.0], [1.55612274E12, 0.0], [1.55612322E12, 0.0], [1.55612268E12, 0.0], [1.55612316E12, 0.0], [1.55612286E12, 0.0], [1.5561228E12, 0.0], [1.55612328E12, 0.0], [1.55612298E12, 0.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612328E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.55612268E12, "maxY": 4.9E-324, "series": [{"data": [[1.55612292E12, 0.0], [1.5561231E12, 0.0], [1.55612304E12, 0.0], [1.55612274E12, 0.0], [1.55612322E12, 0.0], [1.55612268E12, 0.0], [1.55612316E12, 0.0], [1.55612286E12, 0.0], [1.5561228E12, 0.0], [1.55612328E12, 0.0], [1.55612298E12, 0.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612328E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 194.0, "minX": 1.55612268E12, "maxY": 63023.0, "series": [{"data": [[1.55612292E12, 5271.0], [1.5561231E12, 20937.0], [1.55612304E12, 35360.0], [1.55612274E12, 44446.0], [1.55612322E12, 14356.0], [1.55612268E12, 16787.0], [1.55612316E12, 16376.0], [1.55612286E12, 25823.0], [1.5561228E12, 63023.0], [1.55612328E12, 5465.0], [1.55612298E12, 5052.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55612292E12, 269.0], [1.5561231E12, 339.0], [1.55612304E12, 795.0], [1.55612274E12, 5327.0], [1.55612322E12, 197.0], [1.55612268E12, 271.0], [1.55612316E12, 811.0], [1.55612286E12, 277.0], [1.5561228E12, 254.0], [1.55612328E12, 194.0], [1.55612298E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55612292E12, 3832.0], [1.5561231E12, 4852.7], [1.55612304E12, 4410.8], [1.55612274E12, 5370.6], [1.55612322E12, 4920.000000000002], [1.55612268E12, 3187.5999999999985], [1.55612316E12, 4936.5], [1.55612286E12, 5273.9000000000015], [1.5561228E12, 5120.799999999997], [1.55612328E12, 4763.399999999998], [1.55612298E12, 3775.3000000000043]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55612292E12, 25676.900000000023], [1.5561231E12, 25818.130000000005], [1.55612304E12, 25857.96], [1.55612274E12, 31722.859999999782], [1.55612322E12, 23991.160000000113], [1.55612268E12, 14405.30999999997], [1.55612316E12, 25409.04999999999], [1.55612286E12, 53724.35999999967], [1.5561228E12, 56113.779999999875], [1.55612328E12, 22199.080000000118], [1.55612298E12, 24734.630000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55612292E12, 6747.5], [1.5561231E12, 9198.999999999993], [1.55612304E12, 7948.5999999999985], [1.55612274E12, 9393.09999999998], [1.55612322E12, 8224.79999999998], [1.55612268E12, 4941.300000000003], [1.55612316E12, 9381.25], [1.55612286E12, 10568.74999999999], [1.5561228E12, 10361.699999999995], [1.55612328E12, 7912.399999999996], [1.55612298E12, 5468.099999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612328E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1212.0, "minX": 1000.0, "maxY": 2094.5, "series": [{"data": [[1000.0, 1212.0], [2000.0, 2094.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 4.9E-324, "series": [{"data": [[1000.0, 0.0], [2000.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.55612268E12, "maxY": 3.716666666666667, "series": [{"data": [[1.55612292E12, 3.716666666666667], [1.5561231E12, 1.2833333333333334], [1.55612304E12, 0.7833333333333333], [1.55612274E12, 0.15], [1.55612322E12, 2.433333333333333], [1.55612268E12, 2.35], [1.55612316E12, 1.4], [1.55612286E12, 1.8166666666666667], [1.5561228E12, 2.533333333333333], [1.55612328E12, 1.6], [1.55612298E12, 2.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612328E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.55612268E12, "maxY": 3.683333333333333, "series": [{"data": [[1.55612292E12, 3.683333333333333], [1.5561231E12, 1.2833333333333334], [1.55612304E12, 0.7833333333333333], [1.55612274E12, 0.15], [1.55612322E12, 2.45], [1.55612268E12, 2.2666666666666666], [1.55612316E12, 1.4], [1.55612286E12, 1.85], [1.5561228E12, 2.533333333333333], [1.55612328E12, 1.6666666666666667], [1.55612298E12, 2.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612328E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.55612268E12, "maxY": 3.683333333333333, "series": [{"data": [[1.55612292E12, 3.683333333333333], [1.5561231E12, 1.2833333333333334], [1.55612304E12, 0.7833333333333333], [1.55612274E12, 0.15], [1.55612322E12, 2.45], [1.55612268E12, 2.2666666666666666], [1.55612316E12, 1.4], [1.55612286E12, 1.85], [1.5561228E12, 2.533333333333333], [1.55612328E12, 1.6666666666666667], [1.55612298E12, 2.45]], "isOverall": false, "label": "BeanShell Sampler-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612328E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.55612268E12, "maxY": 3.683333333333333, "series": [{"data": [[1.55612292E12, 3.683333333333333], [1.5561231E12, 1.2833333333333334], [1.55612304E12, 0.7833333333333333], [1.55612274E12, 0.15], [1.55612322E12, 2.45], [1.55612268E12, 2.2666666666666666], [1.55612316E12, 1.4], [1.55612286E12, 1.85], [1.5561228E12, 2.533333333333333], [1.55612328E12, 1.6666666666666667], [1.55612298E12, 2.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612328E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

