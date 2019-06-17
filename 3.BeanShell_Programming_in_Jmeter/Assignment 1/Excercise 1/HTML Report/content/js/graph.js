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
        data: {"result": {"minY": 41.0, "minX": 0.0, "maxY": 10481.0, "series": [{"data": [[0.0, 41.0], [0.1, 47.0], [0.2, 50.0], [0.3, 53.0], [0.4, 56.0], [0.5, 60.0], [0.6, 64.0], [0.7, 73.0], [0.8, 78.0], [0.9, 82.0], [1.0, 85.0], [1.1, 89.0], [1.2, 90.0], [1.3, 93.0], [1.4, 94.0], [1.5, 96.0], [1.6, 97.0], [1.7, 100.0], [1.8, 102.0], [1.9, 105.0], [2.0, 108.0], [2.1, 111.0], [2.2, 115.0], [2.3, 117.0], [2.4, 119.0], [2.5, 122.0], [2.6, 124.0], [2.7, 126.0], [2.8, 129.0], [2.9, 131.0], [3.0, 132.0], [3.1, 133.0], [3.2, 135.0], [3.3, 138.0], [3.4, 139.0], [3.5, 140.0], [3.6, 141.0], [3.7, 142.0], [3.8, 144.0], [3.9, 144.0], [4.0, 145.0], [4.1, 145.0], [4.2, 146.0], [4.3, 148.0], [4.4, 149.0], [4.5, 150.0], [4.6, 151.0], [4.7, 152.0], [4.8, 153.0], [4.9, 154.0], [5.0, 155.0], [5.1, 156.0], [5.2, 157.0], [5.3, 158.0], [5.4, 159.0], [5.5, 160.0], [5.6, 162.0], [5.7, 163.0], [5.8, 163.0], [5.9, 164.0], [6.0, 166.0], [6.1, 167.0], [6.2, 168.0], [6.3, 169.0], [6.4, 170.0], [6.5, 171.0], [6.6, 172.0], [6.7, 173.0], [6.8, 174.0], [6.9, 174.0], [7.0, 175.0], [7.1, 176.0], [7.2, 177.0], [7.3, 178.0], [7.4, 178.0], [7.5, 179.0], [7.6, 180.0], [7.7, 180.0], [7.8, 181.0], [7.9, 182.0], [8.0, 182.0], [8.1, 183.0], [8.2, 183.0], [8.3, 184.0], [8.4, 185.0], [8.5, 185.0], [8.6, 185.0], [8.7, 186.0], [8.8, 186.0], [8.9, 187.0], [9.0, 187.0], [9.1, 188.0], [9.2, 188.0], [9.3, 188.0], [9.4, 189.0], [9.5, 189.0], [9.6, 190.0], [9.7, 190.0], [9.8, 191.0], [9.9, 191.0], [10.0, 192.0], [10.1, 192.0], [10.2, 193.0], [10.3, 193.0], [10.4, 193.0], [10.5, 194.0], [10.6, 194.0], [10.7, 194.0], [10.8, 195.0], [10.9, 195.0], [11.0, 195.0], [11.1, 195.0], [11.2, 196.0], [11.3, 196.0], [11.4, 197.0], [11.5, 197.0], [11.6, 197.0], [11.7, 197.0], [11.8, 198.0], [11.9, 198.0], [12.0, 198.0], [12.1, 199.0], [12.2, 199.0], [12.3, 199.0], [12.4, 200.0], [12.5, 200.0], [12.6, 201.0], [12.7, 201.0], [12.8, 201.0], [12.9, 202.0], [13.0, 202.0], [13.1, 202.0], [13.2, 203.0], [13.3, 203.0], [13.4, 203.0], [13.5, 203.0], [13.6, 204.0], [13.7, 204.0], [13.8, 204.0], [13.9, 204.0], [14.0, 205.0], [14.1, 205.0], [14.2, 205.0], [14.3, 206.0], [14.4, 206.0], [14.5, 207.0], [14.6, 207.0], [14.7, 207.0], [14.8, 207.0], [14.9, 208.0], [15.0, 208.0], [15.1, 209.0], [15.2, 209.0], [15.3, 209.0], [15.4, 210.0], [15.5, 210.0], [15.6, 210.0], [15.7, 211.0], [15.8, 211.0], [15.9, 211.0], [16.0, 211.0], [16.1, 212.0], [16.2, 212.0], [16.3, 213.0], [16.4, 213.0], [16.5, 213.0], [16.6, 213.0], [16.7, 213.0], [16.8, 214.0], [16.9, 214.0], [17.0, 214.0], [17.1, 215.0], [17.2, 215.0], [17.3, 215.0], [17.4, 216.0], [17.5, 216.0], [17.6, 216.0], [17.7, 216.0], [17.8, 217.0], [17.9, 217.0], [18.0, 217.0], [18.1, 218.0], [18.2, 218.0], [18.3, 218.0], [18.4, 218.0], [18.5, 219.0], [18.6, 219.0], [18.7, 219.0], [18.8, 219.0], [18.9, 219.0], [19.0, 220.0], [19.1, 220.0], [19.2, 220.0], [19.3, 220.0], [19.4, 221.0], [19.5, 221.0], [19.6, 221.0], [19.7, 221.0], [19.8, 221.0], [19.9, 221.0], [20.0, 222.0], [20.1, 222.0], [20.2, 222.0], [20.3, 222.0], [20.4, 222.0], [20.5, 223.0], [20.6, 223.0], [20.7, 223.0], [20.8, 223.0], [20.9, 224.0], [21.0, 224.0], [21.1, 224.0], [21.2, 224.0], [21.3, 224.0], [21.4, 225.0], [21.5, 225.0], [21.6, 225.0], [21.7, 225.0], [21.8, 225.0], [21.9, 226.0], [22.0, 226.0], [22.1, 226.0], [22.2, 226.0], [22.3, 226.0], [22.4, 226.0], [22.5, 227.0], [22.6, 227.0], [22.7, 227.0], [22.8, 227.0], [22.9, 227.0], [23.0, 227.0], [23.1, 228.0], [23.2, 228.0], [23.3, 228.0], [23.4, 228.0], [23.5, 228.0], [23.6, 228.0], [23.7, 229.0], [23.8, 229.0], [23.9, 229.0], [24.0, 229.0], [24.1, 229.0], [24.2, 229.0], [24.3, 229.0], [24.4, 229.0], [24.5, 230.0], [24.6, 230.0], [24.7, 230.0], [24.8, 230.0], [24.9, 230.0], [25.0, 230.0], [25.1, 230.0], [25.2, 231.0], [25.3, 231.0], [25.4, 231.0], [25.5, 231.0], [25.6, 231.0], [25.7, 231.0], [25.8, 231.0], [25.9, 231.0], [26.0, 231.0], [26.1, 232.0], [26.2, 232.0], [26.3, 232.0], [26.4, 232.0], [26.5, 232.0], [26.6, 232.0], [26.7, 232.0], [26.8, 233.0], [26.9, 233.0], [27.0, 233.0], [27.1, 233.0], [27.2, 233.0], [27.3, 233.0], [27.4, 233.0], [27.5, 233.0], [27.6, 233.0], [27.7, 234.0], [27.8, 234.0], [27.9, 234.0], [28.0, 234.0], [28.1, 234.0], [28.2, 234.0], [28.3, 234.0], [28.4, 234.0], [28.5, 234.0], [28.6, 234.0], [28.7, 235.0], [28.8, 235.0], [28.9, 235.0], [29.0, 235.0], [29.1, 235.0], [29.2, 235.0], [29.3, 235.0], [29.4, 235.0], [29.5, 235.0], [29.6, 235.0], [29.7, 236.0], [29.8, 236.0], [29.9, 236.0], [30.0, 236.0], [30.1, 236.0], [30.2, 236.0], [30.3, 236.0], [30.4, 236.0], [30.5, 236.0], [30.6, 236.0], [30.7, 236.0], [30.8, 237.0], [30.9, 237.0], [31.0, 237.0], [31.1, 237.0], [31.2, 237.0], [31.3, 237.0], [31.4, 237.0], [31.5, 237.0], [31.6, 237.0], [31.7, 237.0], [31.8, 237.0], [31.9, 237.0], [32.0, 237.0], [32.1, 238.0], [32.2, 238.0], [32.3, 238.0], [32.4, 238.0], [32.5, 238.0], [32.6, 238.0], [32.7, 238.0], [32.8, 238.0], [32.9, 238.0], [33.0, 238.0], [33.1, 238.0], [33.2, 238.0], [33.3, 238.0], [33.4, 238.0], [33.5, 238.0], [33.6, 238.0], [33.7, 239.0], [33.8, 239.0], [33.9, 239.0], [34.0, 239.0], [34.1, 239.0], [34.2, 239.0], [34.3, 239.0], [34.4, 239.0], [34.5, 239.0], [34.6, 239.0], [34.7, 239.0], [34.8, 239.0], [34.9, 239.0], [35.0, 239.0], [35.1, 239.0], [35.2, 239.0], [35.3, 240.0], [35.4, 240.0], [35.5, 240.0], [35.6, 240.0], [35.7, 240.0], [35.8, 240.0], [35.9, 240.0], [36.0, 240.0], [36.1, 240.0], [36.2, 240.0], [36.3, 240.0], [36.4, 240.0], [36.5, 240.0], [36.6, 240.0], [36.7, 240.0], [36.8, 240.0], [36.9, 241.0], [37.0, 241.0], [37.1, 241.0], [37.2, 241.0], [37.3, 241.0], [37.4, 241.0], [37.5, 241.0], [37.6, 241.0], [37.7, 241.0], [37.8, 241.0], [37.9, 241.0], [38.0, 241.0], [38.1, 241.0], [38.2, 241.0], [38.3, 241.0], [38.4, 241.0], [38.5, 241.0], [38.6, 241.0], [38.7, 242.0], [38.8, 242.0], [38.9, 242.0], [39.0, 242.0], [39.1, 242.0], [39.2, 242.0], [39.3, 242.0], [39.4, 242.0], [39.5, 242.0], [39.6, 242.0], [39.7, 242.0], [39.8, 242.0], [39.9, 242.0], [40.0, 242.0], [40.1, 242.0], [40.2, 242.0], [40.3, 242.0], [40.4, 242.0], [40.5, 242.0], [40.6, 243.0], [40.7, 243.0], [40.8, 243.0], [40.9, 243.0], [41.0, 243.0], [41.1, 243.0], [41.2, 243.0], [41.3, 243.0], [41.4, 243.0], [41.5, 243.0], [41.6, 243.0], [41.7, 243.0], [41.8, 243.0], [41.9, 243.0], [42.0, 243.0], [42.1, 243.0], [42.2, 243.0], [42.3, 243.0], [42.4, 243.0], [42.5, 243.0], [42.6, 243.0], [42.7, 243.0], [42.8, 244.0], [42.9, 244.0], [43.0, 244.0], [43.1, 244.0], [43.2, 244.0], [43.3, 244.0], [43.4, 244.0], [43.5, 244.0], [43.6, 244.0], [43.7, 244.0], [43.8, 244.0], [43.9, 244.0], [44.0, 244.0], [44.1, 244.0], [44.2, 244.0], [44.3, 244.0], [44.4, 244.0], [44.5, 244.0], [44.6, 244.0], [44.7, 244.0], [44.8, 244.0], [44.9, 244.0], [45.0, 245.0], [45.1, 245.0], [45.2, 245.0], [45.3, 245.0], [45.4, 245.0], [45.5, 245.0], [45.6, 245.0], [45.7, 245.0], [45.8, 245.0], [45.9, 245.0], [46.0, 245.0], [46.1, 245.0], [46.2, 245.0], [46.3, 245.0], [46.4, 245.0], [46.5, 245.0], [46.6, 245.0], [46.7, 245.0], [46.8, 245.0], [46.9, 245.0], [47.0, 245.0], [47.1, 245.0], [47.2, 245.0], [47.3, 245.0], [47.4, 246.0], [47.5, 246.0], [47.6, 246.0], [47.7, 246.0], [47.8, 246.0], [47.9, 246.0], [48.0, 246.0], [48.1, 246.0], [48.2, 246.0], [48.3, 246.0], [48.4, 246.0], [48.5, 246.0], [48.6, 246.0], [48.7, 246.0], [48.8, 246.0], [48.9, 246.0], [49.0, 246.0], [49.1, 246.0], [49.2, 246.0], [49.3, 246.0], [49.4, 246.0], [49.5, 246.0], [49.6, 246.0], [49.7, 246.0], [49.8, 246.0], [49.9, 247.0], [50.0, 247.0], [50.1, 247.0], [50.2, 247.0], [50.3, 247.0], [50.4, 247.0], [50.5, 247.0], [50.6, 247.0], [50.7, 247.0], [50.8, 247.0], [50.9, 247.0], [51.0, 247.0], [51.1, 247.0], [51.2, 247.0], [51.3, 247.0], [51.4, 247.0], [51.5, 247.0], [51.6, 247.0], [51.7, 247.0], [51.8, 247.0], [51.9, 247.0], [52.0, 247.0], [52.1, 247.0], [52.2, 247.0], [52.3, 247.0], [52.4, 248.0], [52.5, 248.0], [52.6, 248.0], [52.7, 248.0], [52.8, 248.0], [52.9, 248.0], [53.0, 248.0], [53.1, 248.0], [53.2, 248.0], [53.3, 248.0], [53.4, 248.0], [53.5, 248.0], [53.6, 248.0], [53.7, 248.0], [53.8, 248.0], [53.9, 248.0], [54.0, 248.0], [54.1, 248.0], [54.2, 248.0], [54.3, 248.0], [54.4, 248.0], [54.5, 248.0], [54.6, 248.0], [54.7, 248.0], [54.8, 248.0], [54.9, 249.0], [55.0, 249.0], [55.1, 249.0], [55.2, 249.0], [55.3, 249.0], [55.4, 249.0], [55.5, 249.0], [55.6, 249.0], [55.7, 249.0], [55.8, 249.0], [55.9, 249.0], [56.0, 249.0], [56.1, 249.0], [56.2, 249.0], [56.3, 249.0], [56.4, 249.0], [56.5, 249.0], [56.6, 249.0], [56.7, 249.0], [56.8, 249.0], [56.9, 250.0], [57.0, 250.0], [57.1, 250.0], [57.2, 250.0], [57.3, 250.0], [57.4, 250.0], [57.5, 250.0], [57.6, 250.0], [57.7, 250.0], [57.8, 250.0], [57.9, 250.0], [58.0, 250.0], [58.1, 250.0], [58.2, 250.0], [58.3, 250.0], [58.4, 250.0], [58.5, 250.0], [58.6, 250.0], [58.7, 250.0], [58.8, 250.0], [58.9, 250.0], [59.0, 250.0], [59.1, 251.0], [59.2, 251.0], [59.3, 251.0], [59.4, 251.0], [59.5, 251.0], [59.6, 251.0], [59.7, 251.0], [59.8, 251.0], [59.9, 251.0], [60.0, 251.0], [60.1, 251.0], [60.2, 251.0], [60.3, 251.0], [60.4, 251.0], [60.5, 251.0], [60.6, 251.0], [60.7, 251.0], [60.8, 251.0], [60.9, 251.0], [61.0, 252.0], [61.1, 252.0], [61.2, 252.0], [61.3, 252.0], [61.4, 252.0], [61.5, 252.0], [61.6, 252.0], [61.7, 252.0], [61.8, 252.0], [61.9, 252.0], [62.0, 252.0], [62.1, 252.0], [62.2, 252.0], [62.3, 252.0], [62.4, 252.0], [62.5, 252.0], [62.6, 252.0], [62.7, 253.0], [62.8, 253.0], [62.9, 253.0], [63.0, 253.0], [63.1, 253.0], [63.2, 253.0], [63.3, 253.0], [63.4, 253.0], [63.5, 253.0], [63.6, 253.0], [63.7, 253.0], [63.8, 253.0], [63.9, 253.0], [64.0, 253.0], [64.1, 253.0], [64.2, 253.0], [64.3, 254.0], [64.4, 254.0], [64.5, 254.0], [64.6, 254.0], [64.7, 254.0], [64.8, 254.0], [64.9, 254.0], [65.0, 254.0], [65.1, 254.0], [65.2, 254.0], [65.3, 254.0], [65.4, 254.0], [65.5, 254.0], [65.6, 254.0], [65.7, 254.0], [65.8, 255.0], [65.9, 255.0], [66.0, 255.0], [66.1, 255.0], [66.2, 255.0], [66.3, 255.0], [66.4, 255.0], [66.5, 255.0], [66.6, 255.0], [66.7, 255.0], [66.8, 255.0], [66.9, 255.0], [67.0, 255.0], [67.1, 256.0], [67.2, 256.0], [67.3, 256.0], [67.4, 256.0], [67.5, 256.0], [67.6, 256.0], [67.7, 256.0], [67.8, 256.0], [67.9, 256.0], [68.0, 256.0], [68.1, 256.0], [68.2, 256.0], [68.3, 256.0], [68.4, 257.0], [68.5, 257.0], [68.6, 257.0], [68.7, 257.0], [68.8, 257.0], [68.9, 257.0], [69.0, 257.0], [69.1, 257.0], [69.2, 257.0], [69.3, 257.0], [69.4, 257.0], [69.5, 258.0], [69.6, 258.0], [69.7, 258.0], [69.8, 258.0], [69.9, 258.0], [70.0, 258.0], [70.1, 258.0], [70.2, 258.0], [70.3, 258.0], [70.4, 258.0], [70.5, 258.0], [70.6, 258.0], [70.7, 258.0], [70.8, 259.0], [70.9, 259.0], [71.0, 259.0], [71.1, 259.0], [71.2, 259.0], [71.3, 259.0], [71.4, 259.0], [71.5, 259.0], [71.6, 259.0], [71.7, 259.0], [71.8, 259.0], [71.9, 260.0], [72.0, 260.0], [72.1, 260.0], [72.2, 260.0], [72.3, 260.0], [72.4, 260.0], [72.5, 260.0], [72.6, 260.0], [72.7, 260.0], [72.8, 260.0], [72.9, 261.0], [73.0, 261.0], [73.1, 261.0], [73.2, 261.0], [73.3, 261.0], [73.4, 261.0], [73.5, 261.0], [73.6, 261.0], [73.7, 262.0], [73.8, 262.0], [73.9, 262.0], [74.0, 262.0], [74.1, 262.0], [74.2, 262.0], [74.3, 263.0], [74.4, 263.0], [74.5, 263.0], [74.6, 263.0], [74.7, 263.0], [74.8, 263.0], [74.9, 263.0], [75.0, 264.0], [75.1, 264.0], [75.2, 264.0], [75.3, 264.0], [75.4, 264.0], [75.5, 264.0], [75.6, 264.0], [75.7, 265.0], [75.8, 265.0], [75.9, 265.0], [76.0, 265.0], [76.1, 265.0], [76.2, 265.0], [76.3, 265.0], [76.4, 266.0], [76.5, 266.0], [76.6, 266.0], [76.7, 266.0], [76.8, 266.0], [76.9, 266.0], [77.0, 267.0], [77.1, 267.0], [77.2, 267.0], [77.3, 267.0], [77.4, 267.0], [77.5, 268.0], [77.6, 268.0], [77.7, 268.0], [77.8, 268.0], [77.9, 268.0], [78.0, 268.0], [78.1, 269.0], [78.2, 269.0], [78.3, 269.0], [78.4, 269.0], [78.5, 269.0], [78.6, 270.0], [78.7, 270.0], [78.8, 270.0], [78.9, 270.0], [79.0, 270.0], [79.1, 271.0], [79.2, 271.0], [79.3, 271.0], [79.4, 271.0], [79.5, 272.0], [79.6, 272.0], [79.7, 272.0], [79.8, 273.0], [79.9, 273.0], [80.0, 273.0], [80.1, 273.0], [80.2, 274.0], [80.3, 274.0], [80.4, 274.0], [80.5, 274.0], [80.6, 275.0], [80.7, 275.0], [80.8, 275.0], [80.9, 275.0], [81.0, 276.0], [81.1, 276.0], [81.2, 276.0], [81.3, 276.0], [81.4, 277.0], [81.5, 277.0], [81.6, 277.0], [81.7, 278.0], [81.8, 278.0], [81.9, 278.0], [82.0, 278.0], [82.1, 279.0], [82.2, 279.0], [82.3, 280.0], [82.4, 280.0], [82.5, 280.0], [82.6, 281.0], [82.7, 281.0], [82.8, 281.0], [82.9, 281.0], [83.0, 282.0], [83.1, 282.0], [83.2, 283.0], [83.3, 283.0], [83.4, 283.0], [83.5, 284.0], [83.6, 284.0], [83.7, 285.0], [83.8, 285.0], [83.9, 285.0], [84.0, 286.0], [84.1, 286.0], [84.2, 287.0], [84.3, 287.0], [84.4, 288.0], [84.5, 289.0], [84.6, 289.0], [84.7, 289.0], [84.8, 290.0], [84.9, 290.0], [85.0, 291.0], [85.1, 292.0], [85.2, 292.0], [85.3, 292.0], [85.4, 293.0], [85.5, 294.0], [85.6, 294.0], [85.7, 295.0], [85.8, 296.0], [85.9, 296.0], [86.0, 296.0], [86.1, 297.0], [86.2, 297.0], [86.3, 298.0], [86.4, 299.0], [86.5, 299.0], [86.6, 300.0], [86.7, 300.0], [86.8, 301.0], [86.9, 303.0], [87.0, 303.0], [87.1, 304.0], [87.2, 304.0], [87.3, 305.0], [87.4, 305.0], [87.5, 306.0], [87.6, 307.0], [87.7, 308.0], [87.8, 308.0], [87.9, 309.0], [88.0, 310.0], [88.1, 311.0], [88.2, 311.0], [88.3, 312.0], [88.4, 313.0], [88.5, 314.0], [88.6, 315.0], [88.7, 316.0], [88.8, 317.0], [88.9, 317.0], [89.0, 318.0], [89.1, 319.0], [89.2, 320.0], [89.3, 321.0], [89.4, 323.0], [89.5, 323.0], [89.6, 324.0], [89.7, 325.0], [89.8, 327.0], [89.9, 328.0], [90.0, 330.0], [90.1, 331.0], [90.2, 333.0], [90.3, 335.0], [90.4, 336.0], [90.5, 337.0], [90.6, 338.0], [90.7, 339.0], [90.8, 340.0], [90.9, 342.0], [91.0, 343.0], [91.1, 345.0], [91.2, 346.0], [91.3, 347.0], [91.4, 349.0], [91.5, 350.0], [91.6, 352.0], [91.7, 354.0], [91.8, 356.0], [91.9, 358.0], [92.0, 360.0], [92.1, 361.0], [92.2, 362.0], [92.3, 364.0], [92.4, 366.0], [92.5, 368.0], [92.6, 369.0], [92.7, 371.0], [92.8, 373.0], [92.9, 374.0], [93.0, 376.0], [93.1, 379.0], [93.2, 383.0], [93.3, 386.0], [93.4, 388.0], [93.5, 392.0], [93.6, 396.0], [93.7, 399.0], [93.8, 403.0], [93.9, 406.0], [94.0, 409.0], [94.1, 410.0], [94.2, 413.0], [94.3, 415.0], [94.4, 419.0], [94.5, 421.0], [94.6, 425.0], [94.7, 429.0], [94.8, 432.0], [94.9, 436.0], [95.0, 443.0], [95.1, 448.0], [95.2, 450.0], [95.3, 453.0], [95.4, 458.0], [95.5, 464.0], [95.6, 466.0], [95.7, 468.0], [95.8, 472.0], [95.9, 478.0], [96.0, 484.0], [96.1, 489.0], [96.2, 495.0], [96.3, 502.0], [96.4, 506.0], [96.5, 510.0], [96.6, 515.0], [96.7, 519.0], [96.8, 530.0], [96.9, 534.0], [97.0, 541.0], [97.1, 546.0], [97.2, 551.0], [97.3, 556.0], [97.4, 568.0], [97.5, 574.0], [97.6, 592.0], [97.7, 601.0], [97.8, 615.0], [97.9, 629.0], [98.0, 641.0], [98.1, 651.0], [98.2, 663.0], [98.3, 687.0], [98.4, 702.0], [98.5, 711.0], [98.6, 725.0], [98.7, 740.0], [98.8, 792.0], [98.9, 831.0], [99.0, 871.0], [99.1, 898.0], [99.2, 979.0], [99.3, 1036.0], [99.4, 1116.0], [99.5, 1466.0], [99.6, 1638.0], [99.7, 2185.0], [99.8, 2650.0], [99.9, 5593.0]], "isOverall": false, "label": "BeanShell Call tiki.vn", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 8079.0, "series": [{"data": [[0.0, 182.0], [8300.0, 4.0], [9100.0, 1.0], [600.0, 75.0], [10400.0, 1.0], [700.0, 50.0], [800.0, 30.0], [900.0, 13.0], [1000.0, 15.0], [1100.0, 7.0], [1200.0, 3.0], [1300.0, 4.0], [1400.0, 1.0], [1500.0, 7.0], [100.0, 1161.0], [1600.0, 5.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 3.0], [2100.0, 2.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 6.0], [2900.0, 1.0], [200.0, 8079.0], [3300.0, 2.0], [3500.0, 1.0], [300.0, 784.0], [5000.0, 2.0], [4900.0, 1.0], [5500.0, 2.0], [5800.0, 1.0], [6100.0, 1.0], [400.0, 280.0], [6400.0, 1.0], [6700.0, 1.0], [500.0, 154.0]], "isOverall": false, "label": "BeanShell Call tiki.vn", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 54.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10487.0, "series": [{"data": [[0.0, 10487.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 351.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 54.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.034375000000001, "minX": 1.55612526E12, "maxY": 5.0, "series": [{"data": [[1.55612562E12, 5.0], [1.55612544E12, 5.0], [1.5561255E12, 5.0], [1.55612532E12, 5.0], [1.5561258E12, 5.0], [1.55612538E12, 5.0], [1.55612586E12, 4.683284457478008], [1.55612568E12, 5.0], [1.55612526E12, 4.034375000000001], [1.55612574E12, 5.0], [1.55612556E12, 5.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612586E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 87.41860465116281, "minX": 1.0, "maxY": 280.4480128084389, "series": [{"data": [[1.0, 87.41860465116281], [2.0, 99.3421052631579], [4.0, 200.23376623376632], [5.0, 280.4480128084389], [3.0, 147.97435897435898]], "isOverall": false, "label": "BeanShell Call tiki.vn", "isController": false}, {"data": [[4.94188395152407, 276.90653690782244]], "isOverall": false, "label": "BeanShell Call tiki.vn-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.55612526E12, "maxY": 71011.2, "series": [{"data": [[1.55612562E12, 63960.0], [1.55612544E12, 69139.2], [1.5561255E12, 66518.4], [1.55612532E12, 67516.8], [1.5561258E12, 69264.0], [1.55612538E12, 60777.6], [1.55612586E12, 63835.2], [1.55612568E12, 59342.4], [1.55612526E12, 19968.0], [1.55612574E12, 71011.2], [1.55612556E12, 68328.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55612562E12, 0.0], [1.55612544E12, 0.0], [1.5561255E12, 0.0], [1.55612532E12, 0.0], [1.5561258E12, 0.0], [1.55612538E12, 0.0], [1.55612586E12, 0.0], [1.55612568E12, 0.0], [1.55612526E12, 0.0], [1.55612574E12, 0.0], [1.55612556E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612586E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 233.92864125122176, "minX": 1.55612526E12, "maxY": 312.6761303890642, "series": [{"data": [[1.55612562E12, 290.943414634146], [1.55612544E12, 267.1525270758121], [1.5561255E12, 279.5150093808628], [1.55612532E12, 282.27541589648825], [1.5561258E12, 268.30810810810704], [1.55612538E12, 304.7546201232034], [1.55612586E12, 233.92864125122176], [1.55612568E12, 312.6761303890642], [1.55612526E12, 298.94687500000003], [1.55612574E12, 260.2240773286468], [1.55612556E12, 269.7205479452053]], "isOverall": false, "label": "BeanShell Call tiki.vn", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612586E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.55612526E12, "maxY": 4.9E-324, "series": [{"data": [[1.55612562E12, 0.0], [1.55612544E12, 0.0], [1.5561255E12, 0.0], [1.55612532E12, 0.0], [1.5561258E12, 0.0], [1.55612538E12, 0.0], [1.55612586E12, 0.0], [1.55612568E12, 0.0], [1.55612526E12, 0.0], [1.55612574E12, 0.0], [1.55612556E12, 0.0]], "isOverall": false, "label": "BeanShell Call tiki.vn", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612586E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.55612526E12, "maxY": 4.9E-324, "series": [{"data": [[1.55612562E12, 0.0], [1.55612544E12, 0.0], [1.5561255E12, 0.0], [1.55612532E12, 0.0], [1.5561258E12, 0.0], [1.55612538E12, 0.0], [1.55612586E12, 0.0], [1.55612568E12, 0.0], [1.55612526E12, 0.0], [1.55612574E12, 0.0], [1.55612556E12, 0.0]], "isOverall": false, "label": "BeanShell Call tiki.vn", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612586E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 41.0, "minX": 1.55612526E12, "maxY": 10481.0, "series": [{"data": [[1.55612562E12, 1348.0], [1.55612544E12, 2115.0], [1.5561255E12, 2334.0], [1.55612532E12, 9124.0], [1.5561258E12, 3397.0], [1.55612538E12, 6713.0], [1.55612586E12, 564.0], [1.55612568E12, 10481.0], [1.55612526E12, 8372.0], [1.55612574E12, 1782.0], [1.55612556E12, 1612.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55612562E12, 62.0], [1.55612544E12, 102.0], [1.5561255E12, 48.0], [1.55612532E12, 55.0], [1.5561258E12, 53.0], [1.55612538E12, 74.0], [1.55612586E12, 44.0], [1.55612568E12, 48.0], [1.55612526E12, 41.0], [1.55612574E12, 50.0], [1.55612556E12, 62.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55612562E12, 357.90000000000055], [1.55612544E12, 341.0], [1.5561255E12, 346.0], [1.55612532E12, 345.70000000000005], [1.5561258E12, 339.0], [1.55612538E12, 356.0], [1.55612586E12, 330.0], [1.55612568E12, 356.0], [1.55612526E12, 260.90000000000003], [1.55612574E12, 342.0], [1.55612556E12, 343.40000000000055]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55612562E12, 895.8699999999999], [1.55612544E12, 1018.9500000000012], [1.5561255E12, 1002.3699999999972], [1.55612532E12, 1079.5000000000014], [1.5561258E12, 898.2999999999993], [1.55612538E12, 1083.5300000000002], [1.55612586E12, 871.4199999999983], [1.55612568E12, 977.6999999999962], [1.55612526E12, 8322.220000000001], [1.55612574E12, 926.7999999999993], [1.55612556E12, 937.1799999999994]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55612562E12, 478.0], [1.55612544E12, 439.75], [1.5561255E12, 458.4499999999998], [1.55612532E12, 454.0], [1.5561258E12, 458.0], [1.55612538E12, 465.4500000000003], [1.55612586E12, 443.0], [1.55612568E12, 480.0], [1.55612526E12, 272.9], [1.55612574E12, 465.0], [1.55612556E12, 459.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612586E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 247.0, "minX": 1000.0, "maxY": 279.5, "series": [{"data": [[1000.0, 247.0], [2000.0, 279.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 5.416666666666667, "minX": 1.55612526E12, "maxY": 18.966666666666665, "series": [{"data": [[1.55612562E12, 17.083333333333332], [1.55612544E12, 18.466666666666665], [1.5561255E12, 17.766666666666666], [1.55612532E12, 18.033333333333335], [1.5561258E12, 18.5], [1.55612538E12, 16.233333333333334], [1.55612586E12, 16.966666666666665], [1.55612568E12, 15.85], [1.55612526E12, 5.416666666666667], [1.55612574E12, 18.966666666666665], [1.55612556E12, 18.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612586E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.333333333333333, "minX": 1.55612526E12, "maxY": 18.966666666666665, "series": [{"data": [[1.55612562E12, 17.083333333333332], [1.55612544E12, 18.466666666666665], [1.5561255E12, 17.766666666666666], [1.55612532E12, 18.033333333333335], [1.5561258E12, 18.5], [1.55612538E12, 16.233333333333334], [1.55612586E12, 17.05], [1.55612568E12, 15.85], [1.55612526E12, 5.333333333333333], [1.55612574E12, 18.966666666666665], [1.55612556E12, 18.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612586E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.333333333333333, "minX": 1.55612526E12, "maxY": 18.966666666666665, "series": [{"data": [[1.55612562E12, 17.083333333333332], [1.55612544E12, 18.466666666666665], [1.5561255E12, 17.766666666666666], [1.55612532E12, 18.033333333333335], [1.5561258E12, 18.5], [1.55612538E12, 16.233333333333334], [1.55612586E12, 17.05], [1.55612568E12, 15.85], [1.55612526E12, 5.333333333333333], [1.55612574E12, 18.966666666666665], [1.55612556E12, 18.25]], "isOverall": false, "label": "BeanShell Call tiki.vn-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612586E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.333333333333333, "minX": 1.55612526E12, "maxY": 18.966666666666665, "series": [{"data": [[1.55612562E12, 17.083333333333332], [1.55612544E12, 18.466666666666665], [1.5561255E12, 17.766666666666666], [1.55612532E12, 18.033333333333335], [1.5561258E12, 18.5], [1.55612538E12, 16.233333333333334], [1.55612586E12, 17.05], [1.55612568E12, 15.85], [1.55612526E12, 5.333333333333333], [1.55612574E12, 18.966666666666665], [1.55612556E12, 18.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612586E12, "title": "Total Transactions Per Second"}},
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

