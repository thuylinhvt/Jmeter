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
        data: {"result": {"minY": 41.0, "minX": 0.0, "maxY": 18508.0, "series": [{"data": [[0.0, 41.0], [0.1, 54.0], [0.2, 80.0], [0.3, 95.0], [0.4, 99.0], [0.5, 108.0], [0.6, 116.0], [0.7, 118.0], [0.8, 121.0], [0.9, 127.0], [1.0, 134.0], [1.1, 142.0], [1.2, 158.0], [1.3, 172.0], [1.4, 180.0], [1.5, 192.0], [1.6, 198.0], [1.7, 203.0], [1.8, 209.0], [1.9, 218.0], [2.0, 227.0], [2.1, 231.0], [2.2, 236.0], [2.3, 238.0], [2.4, 245.0], [2.5, 252.0], [2.6, 260.0], [2.7, 264.0], [2.8, 273.0], [2.9, 280.0], [3.0, 286.0], [3.1, 292.0], [3.2, 297.0], [3.3, 302.0], [3.4, 308.0], [3.5, 313.0], [3.6, 316.0], [3.7, 320.0], [3.8, 323.0], [3.9, 325.0], [4.0, 328.0], [4.1, 334.0], [4.2, 338.0], [4.3, 340.0], [4.4, 342.0], [4.5, 345.0], [4.6, 349.0], [4.7, 350.0], [4.8, 351.0], [4.9, 357.0], [5.0, 364.0], [5.1, 367.0], [5.2, 371.0], [5.3, 374.0], [5.4, 380.0], [5.5, 381.0], [5.6, 383.0], [5.7, 385.0], [5.8, 387.0], [5.9, 391.0], [6.0, 392.0], [6.1, 395.0], [6.2, 398.0], [6.3, 401.0], [6.4, 401.0], [6.5, 403.0], [6.6, 404.0], [6.7, 407.0], [6.8, 409.0], [6.9, 411.0], [7.0, 413.0], [7.1, 415.0], [7.2, 416.0], [7.3, 420.0], [7.4, 424.0], [7.5, 425.0], [7.6, 427.0], [7.7, 429.0], [7.8, 430.0], [7.9, 431.0], [8.0, 434.0], [8.1, 436.0], [8.2, 437.0], [8.3, 439.0], [8.4, 440.0], [8.5, 442.0], [8.6, 445.0], [8.7, 446.0], [8.8, 448.0], [8.9, 449.0], [9.0, 450.0], [9.1, 452.0], [9.2, 453.0], [9.3, 454.0], [9.4, 456.0], [9.5, 458.0], [9.6, 461.0], [9.7, 463.0], [9.8, 463.0], [9.9, 465.0], [10.0, 466.0], [10.1, 467.0], [10.2, 467.0], [10.3, 469.0], [10.4, 470.0], [10.5, 471.0], [10.6, 472.0], [10.7, 472.0], [10.8, 473.0], [10.9, 474.0], [11.0, 476.0], [11.1, 476.0], [11.2, 477.0], [11.3, 478.0], [11.4, 478.0], [11.5, 479.0], [11.6, 480.0], [11.7, 480.0], [11.8, 481.0], [11.9, 483.0], [12.0, 483.0], [12.1, 484.0], [12.2, 485.0], [12.3, 486.0], [12.4, 487.0], [12.5, 488.0], [12.6, 489.0], [12.7, 490.0], [12.8, 491.0], [12.9, 491.0], [13.0, 493.0], [13.1, 494.0], [13.2, 495.0], [13.3, 498.0], [13.4, 499.0], [13.5, 500.0], [13.6, 502.0], [13.7, 503.0], [13.8, 504.0], [13.9, 506.0], [14.0, 506.0], [14.1, 507.0], [14.2, 508.0], [14.3, 509.0], [14.4, 509.0], [14.5, 510.0], [14.6, 511.0], [14.7, 512.0], [14.8, 513.0], [14.9, 513.0], [15.0, 514.0], [15.1, 515.0], [15.2, 516.0], [15.3, 517.0], [15.4, 518.0], [15.5, 519.0], [15.6, 520.0], [15.7, 521.0], [15.8, 522.0], [15.9, 523.0], [16.0, 524.0], [16.1, 524.0], [16.2, 525.0], [16.3, 526.0], [16.4, 527.0], [16.5, 528.0], [16.6, 529.0], [16.7, 530.0], [16.8, 530.0], [16.9, 531.0], [17.0, 532.0], [17.1, 532.0], [17.2, 533.0], [17.3, 534.0], [17.4, 534.0], [17.5, 536.0], [17.6, 536.0], [17.7, 537.0], [17.8, 537.0], [17.9, 538.0], [18.0, 539.0], [18.1, 540.0], [18.2, 540.0], [18.3, 541.0], [18.4, 542.0], [18.5, 543.0], [18.6, 543.0], [18.7, 543.0], [18.8, 544.0], [18.9, 544.0], [19.0, 545.0], [19.1, 545.0], [19.2, 546.0], [19.3, 547.0], [19.4, 547.0], [19.5, 548.0], [19.6, 548.0], [19.7, 549.0], [19.8, 550.0], [19.9, 551.0], [20.0, 552.0], [20.1, 552.0], [20.2, 553.0], [20.3, 553.0], [20.4, 554.0], [20.5, 555.0], [20.6, 556.0], [20.7, 556.0], [20.8, 556.0], [20.9, 557.0], [21.0, 558.0], [21.1, 558.0], [21.2, 558.0], [21.3, 559.0], [21.4, 559.0], [21.5, 560.0], [21.6, 560.0], [21.7, 560.0], [21.8, 561.0], [21.9, 562.0], [22.0, 562.0], [22.1, 562.0], [22.2, 563.0], [22.3, 563.0], [22.4, 564.0], [22.5, 564.0], [22.6, 564.0], [22.7, 564.0], [22.8, 565.0], [22.9, 565.0], [23.0, 565.0], [23.1, 566.0], [23.2, 566.0], [23.3, 566.0], [23.4, 567.0], [23.5, 567.0], [23.6, 567.0], [23.7, 568.0], [23.8, 568.0], [23.9, 569.0], [24.0, 569.0], [24.1, 569.0], [24.2, 569.0], [24.3, 569.0], [24.4, 570.0], [24.5, 570.0], [24.6, 570.0], [24.7, 571.0], [24.8, 571.0], [24.9, 571.0], [25.0, 571.0], [25.1, 571.0], [25.2, 572.0], [25.3, 572.0], [25.4, 572.0], [25.5, 573.0], [25.6, 573.0], [25.7, 573.0], [25.8, 573.0], [25.9, 573.0], [26.0, 573.0], [26.1, 574.0], [26.2, 574.0], [26.3, 574.0], [26.4, 574.0], [26.5, 574.0], [26.6, 575.0], [26.7, 575.0], [26.8, 575.0], [26.9, 575.0], [27.0, 575.0], [27.1, 576.0], [27.2, 576.0], [27.3, 576.0], [27.4, 576.0], [27.5, 577.0], [27.6, 577.0], [27.7, 577.0], [27.8, 577.0], [27.9, 577.0], [28.0, 577.0], [28.1, 578.0], [28.2, 578.0], [28.3, 578.0], [28.4, 578.0], [28.5, 579.0], [28.6, 579.0], [28.7, 579.0], [28.8, 579.0], [28.9, 579.0], [29.0, 579.0], [29.1, 579.0], [29.2, 580.0], [29.3, 580.0], [29.4, 580.0], [29.5, 580.0], [29.6, 580.0], [29.7, 580.0], [29.8, 581.0], [29.9, 581.0], [30.0, 581.0], [30.1, 581.0], [30.2, 581.0], [30.3, 581.0], [30.4, 581.0], [30.5, 581.0], [30.6, 582.0], [30.7, 582.0], [30.8, 582.0], [30.9, 582.0], [31.0, 582.0], [31.1, 582.0], [31.2, 583.0], [31.3, 583.0], [31.4, 583.0], [31.5, 583.0], [31.6, 583.0], [31.7, 583.0], [31.8, 583.0], [31.9, 583.0], [32.0, 583.0], [32.1, 584.0], [32.2, 584.0], [32.3, 584.0], [32.4, 584.0], [32.5, 584.0], [32.6, 584.0], [32.7, 584.0], [32.8, 584.0], [32.9, 584.0], [33.0, 584.0], [33.1, 585.0], [33.2, 585.0], [33.3, 585.0], [33.4, 585.0], [33.5, 585.0], [33.6, 585.0], [33.7, 585.0], [33.8, 586.0], [33.9, 586.0], [34.0, 586.0], [34.1, 586.0], [34.2, 586.0], [34.3, 586.0], [34.4, 586.0], [34.5, 586.0], [34.6, 586.0], [34.7, 586.0], [34.8, 586.0], [34.9, 587.0], [35.0, 587.0], [35.1, 587.0], [35.2, 587.0], [35.3, 587.0], [35.4, 587.0], [35.5, 587.0], [35.6, 587.0], [35.7, 587.0], [35.8, 587.0], [35.9, 587.0], [36.0, 588.0], [36.1, 588.0], [36.2, 588.0], [36.3, 588.0], [36.4, 588.0], [36.5, 588.0], [36.6, 588.0], [36.7, 588.0], [36.8, 588.0], [36.9, 588.0], [37.0, 588.0], [37.1, 589.0], [37.2, 589.0], [37.3, 589.0], [37.4, 589.0], [37.5, 589.0], [37.6, 589.0], [37.7, 589.0], [37.8, 589.0], [37.9, 589.0], [38.0, 589.0], [38.1, 589.0], [38.2, 589.0], [38.3, 589.0], [38.4, 589.0], [38.5, 590.0], [38.6, 590.0], [38.7, 590.0], [38.8, 590.0], [38.9, 590.0], [39.0, 590.0], [39.1, 590.0], [39.2, 590.0], [39.3, 590.0], [39.4, 590.0], [39.5, 590.0], [39.6, 590.0], [39.7, 590.0], [39.8, 590.0], [39.9, 590.0], [40.0, 590.0], [40.1, 591.0], [40.2, 591.0], [40.3, 591.0], [40.4, 591.0], [40.5, 591.0], [40.6, 591.0], [40.7, 591.0], [40.8, 591.0], [40.9, 591.0], [41.0, 591.0], [41.1, 591.0], [41.2, 591.0], [41.3, 591.0], [41.4, 591.0], [41.5, 591.0], [41.6, 591.0], [41.7, 591.0], [41.8, 591.0], [41.9, 592.0], [42.0, 592.0], [42.1, 592.0], [42.2, 592.0], [42.3, 592.0], [42.4, 592.0], [42.5, 592.0], [42.6, 592.0], [42.7, 592.0], [42.8, 592.0], [42.9, 592.0], [43.0, 592.0], [43.1, 592.0], [43.2, 592.0], [43.3, 592.0], [43.4, 593.0], [43.5, 593.0], [43.6, 593.0], [43.7, 593.0], [43.8, 593.0], [43.9, 593.0], [44.0, 593.0], [44.1, 593.0], [44.2, 593.0], [44.3, 593.0], [44.4, 593.0], [44.5, 593.0], [44.6, 593.0], [44.7, 593.0], [44.8, 593.0], [44.9, 594.0], [45.0, 594.0], [45.1, 594.0], [45.2, 594.0], [45.3, 594.0], [45.4, 594.0], [45.5, 594.0], [45.6, 594.0], [45.7, 594.0], [45.8, 594.0], [45.9, 594.0], [46.0, 594.0], [46.1, 594.0], [46.2, 594.0], [46.3, 594.0], [46.4, 594.0], [46.5, 594.0], [46.6, 594.0], [46.7, 595.0], [46.8, 595.0], [46.9, 595.0], [47.0, 595.0], [47.1, 595.0], [47.2, 595.0], [47.3, 595.0], [47.4, 595.0], [47.5, 595.0], [47.6, 595.0], [47.7, 595.0], [47.8, 595.0], [47.9, 595.0], [48.0, 595.0], [48.1, 595.0], [48.2, 595.0], [48.3, 595.0], [48.4, 595.0], [48.5, 595.0], [48.6, 596.0], [48.7, 596.0], [48.8, 596.0], [48.9, 596.0], [49.0, 596.0], [49.1, 596.0], [49.2, 596.0], [49.3, 596.0], [49.4, 596.0], [49.5, 596.0], [49.6, 596.0], [49.7, 596.0], [49.8, 596.0], [49.9, 596.0], [50.0, 596.0], [50.1, 596.0], [50.2, 596.0], [50.3, 596.0], [50.4, 596.0], [50.5, 597.0], [50.6, 597.0], [50.7, 597.0], [50.8, 597.0], [50.9, 597.0], [51.0, 597.0], [51.1, 597.0], [51.2, 597.0], [51.3, 597.0], [51.4, 597.0], [51.5, 597.0], [51.6, 597.0], [51.7, 597.0], [51.8, 597.0], [51.9, 597.0], [52.0, 597.0], [52.1, 597.0], [52.2, 597.0], [52.3, 597.0], [52.4, 597.0], [52.5, 597.0], [52.6, 597.0], [52.7, 598.0], [52.8, 598.0], [52.9, 598.0], [53.0, 598.0], [53.1, 598.0], [53.2, 598.0], [53.3, 598.0], [53.4, 598.0], [53.5, 598.0], [53.6, 598.0], [53.7, 598.0], [53.8, 598.0], [53.9, 598.0], [54.0, 598.0], [54.1, 598.0], [54.2, 598.0], [54.3, 598.0], [54.4, 598.0], [54.5, 598.0], [54.6, 598.0], [54.7, 598.0], [54.8, 599.0], [54.9, 599.0], [55.0, 599.0], [55.1, 599.0], [55.2, 599.0], [55.3, 599.0], [55.4, 599.0], [55.5, 599.0], [55.6, 599.0], [55.7, 599.0], [55.8, 599.0], [55.9, 599.0], [56.0, 599.0], [56.1, 599.0], [56.2, 599.0], [56.3, 599.0], [56.4, 599.0], [56.5, 599.0], [56.6, 599.0], [56.7, 600.0], [56.8, 600.0], [56.9, 600.0], [57.0, 600.0], [57.1, 600.0], [57.2, 600.0], [57.3, 600.0], [57.4, 600.0], [57.5, 600.0], [57.6, 600.0], [57.7, 600.0], [57.8, 600.0], [57.9, 600.0], [58.0, 600.0], [58.1, 600.0], [58.2, 600.0], [58.3, 600.0], [58.4, 600.0], [58.5, 600.0], [58.6, 600.0], [58.7, 601.0], [58.8, 601.0], [58.9, 601.0], [59.0, 601.0], [59.1, 601.0], [59.2, 601.0], [59.3, 601.0], [59.4, 601.0], [59.5, 601.0], [59.6, 601.0], [59.7, 601.0], [59.8, 601.0], [59.9, 601.0], [60.0, 601.0], [60.1, 602.0], [60.2, 602.0], [60.3, 602.0], [60.4, 602.0], [60.5, 602.0], [60.6, 602.0], [60.7, 602.0], [60.8, 602.0], [60.9, 602.0], [61.0, 602.0], [61.1, 602.0], [61.2, 602.0], [61.3, 602.0], [61.4, 603.0], [61.5, 603.0], [61.6, 603.0], [61.7, 603.0], [61.8, 603.0], [61.9, 603.0], [62.0, 603.0], [62.1, 603.0], [62.2, 603.0], [62.3, 603.0], [62.4, 604.0], [62.5, 604.0], [62.6, 604.0], [62.7, 604.0], [62.8, 604.0], [62.9, 604.0], [63.0, 604.0], [63.1, 604.0], [63.2, 604.0], [63.3, 604.0], [63.4, 604.0], [63.5, 604.0], [63.6, 605.0], [63.7, 605.0], [63.8, 605.0], [63.9, 605.0], [64.0, 605.0], [64.1, 605.0], [64.2, 605.0], [64.3, 605.0], [64.4, 605.0], [64.5, 605.0], [64.6, 606.0], [64.7, 606.0], [64.8, 606.0], [64.9, 606.0], [65.0, 606.0], [65.1, 606.0], [65.2, 606.0], [65.3, 606.0], [65.4, 606.0], [65.5, 606.0], [65.6, 606.0], [65.7, 606.0], [65.8, 606.0], [65.9, 607.0], [66.0, 607.0], [66.1, 607.0], [66.2, 607.0], [66.3, 607.0], [66.4, 607.0], [66.5, 607.0], [66.6, 607.0], [66.7, 607.0], [66.8, 607.0], [66.9, 608.0], [67.0, 608.0], [67.1, 608.0], [67.2, 608.0], [67.3, 608.0], [67.4, 608.0], [67.5, 608.0], [67.6, 608.0], [67.7, 609.0], [67.8, 609.0], [67.9, 609.0], [68.0, 609.0], [68.1, 609.0], [68.2, 609.0], [68.3, 609.0], [68.4, 609.0], [68.5, 609.0], [68.6, 609.0], [68.7, 609.0], [68.8, 609.0], [68.9, 609.0], [69.0, 610.0], [69.1, 610.0], [69.2, 610.0], [69.3, 610.0], [69.4, 610.0], [69.5, 610.0], [69.6, 610.0], [69.7, 610.0], [69.8, 610.0], [69.9, 610.0], [70.0, 610.0], [70.1, 611.0], [70.2, 611.0], [70.3, 611.0], [70.4, 611.0], [70.5, 611.0], [70.6, 611.0], [70.7, 611.0], [70.8, 611.0], [70.9, 611.0], [71.0, 612.0], [71.1, 612.0], [71.2, 612.0], [71.3, 612.0], [71.4, 612.0], [71.5, 612.0], [71.6, 612.0], [71.7, 612.0], [71.8, 612.0], [71.9, 613.0], [72.0, 613.0], [72.1, 613.0], [72.2, 613.0], [72.3, 613.0], [72.4, 613.0], [72.5, 614.0], [72.6, 614.0], [72.7, 614.0], [72.8, 614.0], [72.9, 614.0], [73.0, 614.0], [73.1, 615.0], [73.2, 615.0], [73.3, 615.0], [73.4, 615.0], [73.5, 615.0], [73.6, 615.0], [73.7, 616.0], [73.8, 616.0], [73.9, 616.0], [74.0, 616.0], [74.1, 616.0], [74.2, 616.0], [74.3, 617.0], [74.4, 617.0], [74.5, 617.0], [74.6, 617.0], [74.7, 617.0], [74.8, 618.0], [74.9, 618.0], [75.0, 618.0], [75.1, 618.0], [75.2, 619.0], [75.3, 619.0], [75.4, 619.0], [75.5, 619.0], [75.6, 619.0], [75.7, 619.0], [75.8, 620.0], [75.9, 620.0], [76.0, 620.0], [76.1, 620.0], [76.2, 620.0], [76.3, 621.0], [76.4, 621.0], [76.5, 621.0], [76.6, 621.0], [76.7, 621.0], [76.8, 622.0], [76.9, 622.0], [77.0, 622.0], [77.1, 623.0], [77.2, 623.0], [77.3, 623.0], [77.4, 623.0], [77.5, 623.0], [77.6, 624.0], [77.7, 624.0], [77.8, 624.0], [77.9, 625.0], [78.0, 625.0], [78.1, 625.0], [78.2, 625.0], [78.3, 625.0], [78.4, 626.0], [78.5, 626.0], [78.6, 626.0], [78.7, 627.0], [78.8, 627.0], [78.9, 628.0], [79.0, 628.0], [79.1, 628.0], [79.2, 629.0], [79.3, 629.0], [79.4, 629.0], [79.5, 629.0], [79.6, 630.0], [79.7, 630.0], [79.8, 631.0], [79.9, 631.0], [80.0, 632.0], [80.1, 633.0], [80.2, 634.0], [80.3, 634.0], [80.4, 634.0], [80.5, 634.0], [80.6, 635.0], [80.7, 635.0], [80.8, 636.0], [80.9, 637.0], [81.0, 637.0], [81.1, 638.0], [81.2, 638.0], [81.3, 638.0], [81.4, 639.0], [81.5, 640.0], [81.6, 640.0], [81.7, 641.0], [81.8, 642.0], [81.9, 642.0], [82.0, 643.0], [82.1, 643.0], [82.2, 644.0], [82.3, 644.0], [82.4, 644.0], [82.5, 645.0], [82.6, 645.0], [82.7, 646.0], [82.8, 647.0], [82.9, 647.0], [83.0, 648.0], [83.1, 649.0], [83.2, 649.0], [83.3, 650.0], [83.4, 650.0], [83.5, 651.0], [83.6, 651.0], [83.7, 651.0], [83.8, 652.0], [83.9, 654.0], [84.0, 654.0], [84.1, 655.0], [84.2, 656.0], [84.3, 657.0], [84.4, 657.0], [84.5, 658.0], [84.6, 659.0], [84.7, 660.0], [84.8, 662.0], [84.9, 663.0], [85.0, 664.0], [85.1, 665.0], [85.2, 666.0], [85.3, 666.0], [85.4, 667.0], [85.5, 668.0], [85.6, 668.0], [85.7, 669.0], [85.8, 670.0], [85.9, 671.0], [86.0, 672.0], [86.1, 673.0], [86.2, 674.0], [86.3, 676.0], [86.4, 678.0], [86.5, 679.0], [86.6, 680.0], [86.7, 681.0], [86.8, 681.0], [86.9, 682.0], [87.0, 683.0], [87.1, 684.0], [87.2, 685.0], [87.3, 686.0], [87.4, 688.0], [87.5, 691.0], [87.6, 692.0], [87.7, 693.0], [87.8, 694.0], [87.9, 698.0], [88.0, 702.0], [88.1, 702.0], [88.2, 704.0], [88.3, 704.0], [88.4, 705.0], [88.5, 707.0], [88.6, 711.0], [88.7, 713.0], [88.8, 716.0], [88.9, 718.0], [89.0, 720.0], [89.1, 723.0], [89.2, 726.0], [89.3, 729.0], [89.4, 730.0], [89.5, 733.0], [89.6, 734.0], [89.7, 737.0], [89.8, 738.0], [89.9, 740.0], [90.0, 742.0], [90.1, 743.0], [90.2, 746.0], [90.3, 749.0], [90.4, 751.0], [90.5, 752.0], [90.6, 754.0], [90.7, 759.0], [90.8, 760.0], [90.9, 763.0], [91.0, 767.0], [91.1, 767.0], [91.2, 770.0], [91.3, 771.0], [91.4, 773.0], [91.5, 775.0], [91.6, 776.0], [91.7, 778.0], [91.8, 780.0], [91.9, 782.0], [92.0, 785.0], [92.1, 787.0], [92.2, 790.0], [92.3, 795.0], [92.4, 797.0], [92.5, 800.0], [92.6, 803.0], [92.7, 806.0], [92.8, 813.0], [92.9, 815.0], [93.0, 818.0], [93.1, 824.0], [93.2, 828.0], [93.3, 833.0], [93.4, 839.0], [93.5, 843.0], [93.6, 847.0], [93.7, 850.0], [93.8, 857.0], [93.9, 860.0], [94.0, 867.0], [94.1, 869.0], [94.2, 872.0], [94.3, 878.0], [94.4, 880.0], [94.5, 887.0], [94.6, 889.0], [94.7, 891.0], [94.8, 895.0], [94.9, 899.0], [95.0, 915.0], [95.1, 923.0], [95.2, 929.0], [95.3, 937.0], [95.4, 946.0], [95.5, 957.0], [95.6, 969.0], [95.7, 977.0], [95.8, 984.0], [95.9, 990.0], [96.0, 997.0], [96.1, 1012.0], [96.2, 1020.0], [96.3, 1032.0], [96.4, 1045.0], [96.5, 1052.0], [96.6, 1068.0], [96.7, 1089.0], [96.8, 1102.0], [96.9, 1113.0], [97.0, 1122.0], [97.1, 1149.0], [97.2, 1167.0], [97.3, 1182.0], [97.4, 1188.0], [97.5, 1199.0], [97.6, 1213.0], [97.7, 1231.0], [97.8, 1276.0], [97.9, 1290.0], [98.0, 1327.0], [98.1, 1368.0], [98.2, 1403.0], [98.3, 1483.0], [98.4, 1568.0], [98.5, 1615.0], [98.6, 1685.0], [98.7, 1761.0], [98.8, 1803.0], [98.9, 1847.0], [99.0, 1918.0], [99.1, 1986.0], [99.2, 2075.0], [99.3, 2212.0], [99.4, 2769.0], [99.5, 3284.0], [99.6, 4032.0], [99.7, 4333.0], [99.8, 8391.0], [99.9, 8756.0], [100.0, 18508.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2044.0, "series": [{"data": [[0.0, 19.0], [8700.0, 2.0], [8600.0, 1.0], [8500.0, 1.0], [8400.0, 1.0], [8300.0, 1.0], [9000.0, 1.0], [8900.0, 1.0], [600.0, 1482.0], [9600.0, 1.0], [700.0, 216.0], [800.0, 114.0], [900.0, 53.0], [1000.0, 34.0], [1100.0, 36.0], [1200.0, 20.0], [18500.0, 1.0], [1300.0, 12.0], [1400.0, 8.0], [1500.0, 6.0], [100.0, 58.0], [1600.0, 7.0], [1700.0, 7.0], [1800.0, 10.0], [1900.0, 7.0], [2000.0, 4.0], [2100.0, 3.0], [2300.0, 2.0], [2200.0, 2.0], [2500.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 2.0], [200.0, 77.0], [3300.0, 1.0], [3200.0, 3.0], [3600.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 2.0], [4300.0, 1.0], [4500.0, 1.0], [300.0, 143.0], [5200.0, 1.0], [5500.0, 1.0], [400.0, 338.0], [6400.0, 1.0], [500.0, 2044.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 78.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4014.0, "series": [{"data": [[0.0, 640.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4014.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 78.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.2500000000000004, "minX": 1.55612496E12, "maxY": 5.0, "series": [{"data": [[1.55612514E12, 5.0], [1.55612562E12, 1.2500000000000004], [1.55612496E12, 3.7439999999999998], [1.55612544E12, 5.0], [1.55612502E12, 5.0], [1.5561255E12, 5.0], [1.55612532E12, 5.0], [1.55612538E12, 5.0], [1.5561252E12, 5.0], [1.55612526E12, 5.0], [1.55612508E12, 5.0], [1.55612556E12, 4.849794238683129]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612562E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 120.99999999999999, "minX": 1.0, "maxY": 651.0733666160189, "series": [{"data": [[1.0, 120.99999999999999], [2.0, 290.9642857142857], [4.0, 469.9714285714286], [5.0, 651.0733666160189], [3.0, 368.3225806451613]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}, {"data": [[4.935545224006767, 642.2781065088745]], "isOverall": false, "label": "BeanShell Sampler-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.55612496E12, "maxY": 85860.0, "series": [{"data": [[1.55612514E12, 80206.66666666667], [1.55612562E12, 3533.3333333333335], [1.55612496E12, 22083.333333333332], [1.55612544E12, 85153.33333333333], [1.55612502E12, 80206.66666666667], [1.5561255E12, 83386.66666666667], [1.55612532E12, 84623.33333333333], [1.55612538E12, 77556.66666666667], [1.5561252E12, 73493.33333333333], [1.55612526E12, 76496.66666666667], [1.55612508E12, 83386.66666666667], [1.55612556E12, 85860.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55612514E12, 0.0], [1.55612562E12, 0.0], [1.55612496E12, 0.0], [1.55612544E12, 0.0], [1.55612502E12, 0.0], [1.5561255E12, 0.0], [1.55612532E12, 0.0], [1.55612538E12, 0.0], [1.5561252E12, 0.0], [1.55612526E12, 0.0], [1.55612508E12, 0.0], [1.55612556E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612562E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 176.1, "minX": 1.55612496E12, "maxY": 719.0552884615385, "series": [{"data": [[1.55612514E12, 658.352422907489], [1.55612562E12, 176.1], [1.55612496E12, 447.7120000000001], [1.55612544E12, 618.5311203319502], [1.55612502E12, 657.4140969163], [1.5561255E12, 633.137711864407], [1.55612532E12, 624.5344467640913], [1.55612538E12, 681.4829157175398], [1.5561252E12, 719.0552884615385], [1.55612526E12, 690.147806004619], [1.55612508E12, 633.3516949152541], [1.55612556E12, 597.1543209876545]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612562E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.55612496E12, "maxY": 4.9E-324, "series": [{"data": [[1.55612514E12, 0.0], [1.55612562E12, 0.0], [1.55612496E12, 0.0], [1.55612544E12, 0.0], [1.55612502E12, 0.0], [1.5561255E12, 0.0], [1.55612532E12, 0.0], [1.55612538E12, 0.0], [1.5561252E12, 0.0], [1.55612526E12, 0.0], [1.55612508E12, 0.0], [1.55612556E12, 0.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612562E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.55612496E12, "maxY": 4.9E-324, "series": [{"data": [[1.55612514E12, 0.0], [1.55612562E12, 0.0], [1.55612496E12, 0.0], [1.55612544E12, 0.0], [1.55612502E12, 0.0], [1.5561255E12, 0.0], [1.55612532E12, 0.0], [1.55612538E12, 0.0], [1.5561252E12, 0.0], [1.55612526E12, 0.0], [1.55612508E12, 0.0], [1.55612556E12, 0.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612562E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 41.0, "minX": 1.55612496E12, "maxY": 18508.0, "series": [{"data": [[1.55612514E12, 2366.0], [1.55612562E12, 551.0], [1.55612496E12, 1368.0], [1.55612544E12, 1520.0], [1.55612502E12, 4284.0], [1.5561255E12, 2212.0], [1.55612532E12, 2351.0], [1.55612538E12, 6497.0], [1.5561252E12, 18508.0], [1.55612526E12, 8747.0], [1.55612508E12, 4333.0], [1.55612556E12, 1929.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55612514E12, 199.0], [1.55612562E12, 43.0], [1.55612496E12, 53.0], [1.55612544E12, 158.0], [1.55612502E12, 121.0], [1.5561255E12, 54.0], [1.55612532E12, 41.0], [1.55612538E12, 156.0], [1.5561252E12, 49.0], [1.55612526E12, 79.0], [1.55612508E12, 84.0], [1.55612556E12, 172.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55612514E12, 749.0], [1.55612562E12, 742.0], [1.55612496E12, 614.0], [1.55612544E12, 738.0], [1.55612502E12, 760.0], [1.5561255E12, 745.3000000000002], [1.55612532E12, 743.0], [1.55612538E12, 741.7000000000003], [1.5561252E12, 756.3999999999999], [1.55612526E12, 737.0], [1.55612508E12, 677.8000000000001], [1.55612556E12, 742.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55612514E12, 2031.5200000000004], [1.55612562E12, 1922.0200000000004], [1.55612496E12, 1366.7], [1.55612544E12, 2053.549999999993], [1.55612502E12, 2069.200000000069], [1.5561255E12, 1991.109999999997], [1.55612532E12, 2034.6399999999994], [1.55612538E12, 2253.1799999999976], [1.5561252E12, 2066.419999999999], [1.55612526E12, 2092.549999999993], [1.55612508E12, 2492.2800000000275], [1.55612556E12, 1923.2199999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55612514E12, 994.9000000000003], [1.55612562E12, 915.3499999999995], [1.55612496E12, 727.2999999999988], [1.55612544E12, 923.75], [1.55612502E12, 1110.0], [1.5561255E12, 935.5999999999985], [1.55612532E12, 957.5999999999995], [1.55612538E12, 931.6999999999998], [1.5561252E12, 988.4999999999993], [1.55612526E12, 934.0], [1.55612508E12, 895.4], [1.55612556E12, 917.3999999999978]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612562E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 596.0, "minX": 1000.0, "maxY": 1531.0, "series": [{"data": [[3000.0, 1531.0], [1000.0, 596.0], [2000.0, 705.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 3000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 4.9E-324, "series": [{"data": [[3000.0, 0.0], [1000.0, 0.0], [2000.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 3000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.55612496E12, "maxY": 8.05, "series": [{"data": [[1.55612514E12, 7.566666666666666], [1.55612562E12, 0.3], [1.55612496E12, 2.1666666666666665], [1.55612544E12, 8.033333333333333], [1.55612502E12, 7.566666666666666], [1.5561255E12, 7.866666666666666], [1.55612532E12, 7.983333333333333], [1.55612538E12, 7.316666666666666], [1.5561252E12, 6.933333333333334], [1.55612526E12, 7.216666666666667], [1.55612508E12, 7.866666666666666], [1.55612556E12, 8.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612562E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.55612496E12, "maxY": 8.1, "series": [{"data": [[1.55612514E12, 7.566666666666666], [1.55612562E12, 0.3333333333333333], [1.55612496E12, 2.0833333333333335], [1.55612544E12, 8.033333333333333], [1.55612502E12, 7.566666666666666], [1.5561255E12, 7.866666666666666], [1.55612532E12, 7.983333333333333], [1.55612538E12, 7.316666666666666], [1.5561252E12, 6.933333333333334], [1.55612526E12, 7.216666666666667], [1.55612508E12, 7.866666666666666], [1.55612556E12, 8.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612562E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.55612496E12, "maxY": 8.1, "series": [{"data": [[1.55612514E12, 7.566666666666666], [1.55612562E12, 0.3333333333333333], [1.55612496E12, 2.0833333333333335], [1.55612544E12, 8.033333333333333], [1.55612502E12, 7.566666666666666], [1.5561255E12, 7.866666666666666], [1.55612532E12, 7.983333333333333], [1.55612538E12, 7.316666666666666], [1.5561252E12, 6.933333333333334], [1.55612526E12, 7.216666666666667], [1.55612508E12, 7.866666666666666], [1.55612556E12, 8.1]], "isOverall": false, "label": "BeanShell Sampler-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612562E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.55612496E12, "maxY": 8.1, "series": [{"data": [[1.55612514E12, 7.566666666666666], [1.55612562E12, 0.3333333333333333], [1.55612496E12, 2.0833333333333335], [1.55612544E12, 8.033333333333333], [1.55612502E12, 7.566666666666666], [1.5561255E12, 7.866666666666666], [1.55612532E12, 7.983333333333333], [1.55612538E12, 7.316666666666666], [1.5561252E12, 6.933333333333334], [1.55612526E12, 7.216666666666667], [1.55612508E12, 7.866666666666666], [1.55612556E12, 8.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612562E12, "title": "Total Transactions Per Second"}},
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

